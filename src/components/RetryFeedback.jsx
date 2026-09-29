export default function RetryFeedback({ round, level, explanation }) {
  const elementary = level.theme === "elementary";
  const clue = round.retryClue ?? round.guidance ?? level.content.guidance ??
    round.feedback?.correct ?? round.options?.find((option) => option.id === round.correctAnswer)?.feedback;
  return (
    <div className="mb-3 space-y-3 text-left" role="status">
      <p className="font-bold text-amber-100">{elementary ? "Let’s look again. You can try another answer." : "Take another look before you decide."}</p>
      <p className="text-slate-300">{explanation}</p>
      {clue && <div className="app-inset-surface rounded-xl p-3">
        <p className="text-xs font-bold uppercase text-cyan-200">{elementary ? "Look for this clue" : "What to check"}</p>
        <p className="mt-1 text-sm text-slate-200">{clue}</p>
      </div>}
    </div>
  );
}
