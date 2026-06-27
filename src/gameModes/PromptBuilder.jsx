export default function PromptBuilder({
  level,
  goBack,
}) {
  const { description, status, title } = level.content;

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 text-white">

      <div className="w-full max-w-sm bg-slate-900 rounded-[2rem] border border-slate-700 overflow-hidden">

        <div className="bg-cyan-500 p-5">

          <button
            onClick={goBack}
            className="mb-4 text-white/80 hover:text-white"
          >
            &lt; Back
          </button>

          <h1 className="text-2xl font-bold">
            {level.title}
          </h1>

          <p className="text-white/70">
            {status}
          </p>
        </div>

        <div className="p-5 text-center">

          <h2 className="text-3xl font-bold mb-3">
            {title}
          </h2>

          <p className="text-slate-300">
            {description}
          </p>

        </div>
      </div>
    </div>
  );
}
