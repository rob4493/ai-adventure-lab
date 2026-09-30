-- Transactional checks: temporary test users and all progress are rolled back.
begin;
insert into auth.users(id, raw_user_meta_data) values
('a0000000-0000-4000-8000-000000000001', '{"username":"test-a","ageBand":"older"}'),
('a0000000-0000-4000-8000-000000000002', '{"username":"test-b","ageBand":"teen","managed":true,"guardian":true}');
do $$ declare blocked boolean := false; begin
  begin
    insert into auth.users(id, raw_user_meta_data) values
    ('a0000000-0000-4000-8000-000000000003', '{"username":"test-child","ageBand":"under13"}');
  exception when raise_exception then blocked := true; end;
  if not blocked then raise exception 'Under-13 signup was not blocked'; end if;
end $$;
set local role authenticated;
select set_config('request.jwt.claim.sub', 'a0000000-0000-4000-8000-000000000001', true);
do $$ declare result jsonb; blocked boolean := false; begin
  if (select count(*) from public.profiles) <> 1 then raise exception 'Profile isolation failed'; end if;
  if (select count(*) from public."learnerProgress") <> 1 then raise exception 'Progress isolation failed'; end if;
  begin
    update public."learnerProgress" set progress = '{}' where id = 'a0000000-0000-4000-8000-000000000002';
  exception when insufficient_privilege then blocked := true; end;
  if not blocked then raise exception 'Direct writes should be denied'; end if;
  result := public."saveLearnerProgress"('b0000000-0000-4000-8000-000000000001', 0, '{"completed":[1]}');
  if result->>'version' <> '1' then raise exception 'First save failed'; end if;
  result := public."saveLearnerProgress"('b0000000-0000-4000-8000-000000000001', 0, '{"completed":[1]}');
  if result->>'version' <> '1' then raise exception 'Retry was duplicated'; end if;
  result := public."saveLearnerProgress"('b0000000-0000-4000-8000-000000000002', 1, '{"completed":[]}');
  if result->>'version' <> '2' then raise exception 'Reset failed'; end if;
  result := public."saveLearnerProgress"('b0000000-0000-4000-8000-000000000003', 1, '{"completed":[1]}');
  if result->>'conflict' <> 'true' then raise exception 'Stale save was accepted'; end if;
end $$;
reset role;
set local role anon;
do $$ declare blocked boolean := false; begin
  begin perform * from public.profiles; exception when insufficient_privilege then blocked := true; end;
  if not blocked then raise exception 'Anonymous reads allowed'; end if;
end $$;
reset role;
rollback;
select 'PASS: isolation, retry deduplication, reset conflicts, age gate, anonymous denial. Test data rolled back.' as result;
