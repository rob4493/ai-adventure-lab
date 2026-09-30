begin;
-- Run once in the Supabase SQL editor. No passwords or emails are stored here.
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null check (username ~ '^[a-zA-Z0-9-]{3,24}$'),
  "ageBand" text not null check ("ageBand" in ('teen', 'older')),
  managed boolean not null default false,
  "createdAt" timestamptz not null default now()
);
create table public."learnerProgress" (
  id uuid primary key references public.profiles(id) on delete cascade,
  progress jsonb not null default '{}',
  version bigint not null default 0,
  "updatedAt" timestamptz not null default now()
);
create table public."saveOperations" (
  "ownerId" uuid not null references public.profiles(id) on delete cascade,
  id uuid not null,
  version bigint not null,
  primary key ("ownerId", id)
);
alter table public.profiles enable row level security;
alter table public."learnerProgress" enable row level security;
alter table public."saveOperations" enable row level security;
revoke all on public.profiles, public."learnerProgress", public."saveOperations" from anon, authenticated;
grant select on public.profiles, public."learnerProgress" to authenticated;
create policy "Read own profile" on public.profiles for select to authenticated using ((select auth.uid()) = id);
create policy "Read own progress" on public."learnerProgress" for select to authenticated using ((select auth.uid()) = id);

-- Registration is checked in the database too. Under-13 creation stays closed until
-- a verified consent service exists; editable user metadata cannot reopen it.
create function public."createLearner"() returns trigger
language plpgsql security definer set search_path = '' as $$
declare
  band text := new.raw_user_meta_data ->> 'ageBand';
  managed boolean := coalesce((new.raw_user_meta_data ->> 'managed')::boolean, false);
begin
  if band is null or band not in ('teen', 'older') then
    raise exception 'Parent verification for learners 12 and under is not available yet';
  end if;
  if managed and coalesce(new.raw_user_meta_data ->> 'guardian', 'false') <> 'true' then
    raise exception 'A parent or guardian must manage this account';
  end if;
  insert into public.profiles(id, username, "ageBand", managed)
    values (new.id, new.raw_user_meta_data ->> 'username', band, managed);
  insert into public."learnerProgress"(id) values (new.id);
  return new;
end;
$$;
revoke all on function public."createLearner"() from public, anon, authenticated;
create trigger "createLearnerAfterSignup" after insert on auth.users
for each row execute function public."createLearner"();

-- Compare-and-swap prevents old devices from restoring progress after a reset.
-- Stable operation IDs make retries idempotent even if the response was lost.
create function public."saveLearnerProgress"("operationId" uuid, "expectedVersion" bigint, snapshot jsonb)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare
  owner uuid := auth.uid();
  currentVersion bigint;
  priorVersion bigint;
begin
  if owner is null then raise exception 'Authentication required'; end if;
  if jsonb_typeof(snapshot) <> 'object' or snapshot is null or octet_length(snapshot::text) > 1048576 then
    raise exception 'Invalid progress';
  end if;
  select version into currentVersion from public."learnerProgress" where id = owner for update;
  if not found then raise exception 'Learner profile missing'; end if;
  select version into priorVersion from public."saveOperations" where "ownerId" = owner and id = "operationId";
  if found then return jsonb_build_object('version', priorVersion, 'conflict', false); end if;
  if currentVersion <> "expectedVersion" then
    return jsonb_build_object('version', currentVersion, 'conflict', true);
  end if;
  update public."learnerProgress" set progress = snapshot, version = currentVersion + 1, "updatedAt" = now() where id = owner;
  insert into public."saveOperations"("ownerId", id, version) values(owner, "operationId", currentVersion + 1);
  return jsonb_build_object('version', currentVersion + 1, 'conflict', false);
end;
$$;
revoke all on function public."saveLearnerProgress"(uuid, bigint, jsonb) from public, anon;
grant execute on function public."saveLearnerProgress"(uuid, bigint, jsonb) to authenticated;

commit;
