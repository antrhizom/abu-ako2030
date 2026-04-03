"use client";

import { useState } from "react";

interface Props {
  meinRating: number; // 0 = noch nicht bewertet
  communityAvg: number;
  communityCount: number;
  onRate: (sterne: number) => void;
  label?: string;
}

export default function SterneRating({
  meinRating,
  communityAvg,
  communityCount,
  onRate,
  label = "Wie wichtig ist das für deine Lebenswelt?",
}: Props) {
  const [hover, setHover] = useState(0);

  return (
    <div className="mt-3 rounded-lg border border-zinc-200 bg-zinc-50 p-3">
      <p className="text-[10px] font-semibold uppercase text-zinc-400 mb-1.5">{label}</p>

      {/* Sterne */}
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((s) => {
          const filled = hover > 0 ? s <= hover : s <= meinRating;
          return (
            <button
              key={s}
              onMouseEnter={() => setHover(s)}
              onMouseLeave={() => setHover(0)}
              onClick={() => onRate(s)}
              className={`text-lg transition-colors ${
                filled ? "text-amber-400" : "text-zinc-300 hover:text-amber-200"
              }`}
            >
              ★
            </button>
          );
        })}
        {meinRating > 0 && (
          <span className="ml-2 text-[10px] text-zinc-400">
            Deine Bewertung: {meinRating}/5
          </span>
        )}
      </div>

      {/* Community */}
      {communityCount > 0 && (
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <span
                key={s}
                className={`text-xs ${
                  s <= Math.round(communityAvg) ? "text-indigo-400" : "text-zinc-200"
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-[10px] text-zinc-400">
            {communityAvg}/5 von {communityCount} {communityCount === 1 ? "Person" : "Personen"}
          </span>
        </div>
      )}
    </div>
  );
}
