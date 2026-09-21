import { SearchCheck } from "lucide-react";
import elementaryCircuitFox from "../assets/elementary-circuit-fox.png";

// Keeps the Elementary guide treatment consistent anywhere the fox offers support.
export default function ElementaryGuideCard({
  children,
  className = "",
  label = "Guide Tip",
  source = null,
}) {
  return (
    <div className={`elementary-clue-card rounded-xl border p-3 text-left ${className}`}>
      <div className="elementary-clue-layout">
        <div className="min-w-0">
          <p className="elementary-clue-title flex items-center gap-2 text-xs font-black uppercase">
            <SearchCheck size={17} aria-hidden="true" />
            {label}
          </p>

          {source && (
            <p className="elementary-clue-source">
              Source: {source}
            </p>
          )}

          <div className="elementary-clue-text mt-2 text-sm font-bold leading-relaxed">
            {children}
          </div>
        </div>

        {/* The nearby text carries the meaning; the fox is a decorative guide cue. */}
        <img
          aria-hidden="true"
          alt=""
          className="elementary-clue-fox"
          src={elementaryCircuitFox}
        />
      </div>
    </div>
  );
}
