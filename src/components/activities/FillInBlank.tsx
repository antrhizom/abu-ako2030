"use client";

import { useState } from "react";
import { LueckenAbschnitt } from "@/lib/inhalte/berufsleben";

interface Props {
  abschnitt: LueckenAbschnitt;
  onComplete: (score: number) => void;
  completed: boolean;
}

export default function FillInBlank({ abschnitt, onComplete, completed }: Props) {
  const [antworten, setAntworten] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [done, setDone] = useState(false);

  function pruefen() {
    setChecked(true);
    const korrekt = abschnitt.luecken.filter(
      (l) => antworten[l.id]?.trim().toLowerCase() === l.antwort.toLowerCase()
    ).length;
    const score = Math.round((korrekt / abschnitt.luecken.length) * 100);
    setDone(true);
    onComplete(score);
  }

  if (completed && !done) {
    return (
      <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-5 text-center">
        <span className="text-emerald-600 font-medium">Bereits abgeschlossen</span>
      </div>
    );
  }

  // Parse text and replace {{id}} with inputs
  const parts = abschnitt.text.split(/(\{\{\d+\}\})/);

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5">
      <div className="text-sm leading-relaxed text-zinc-700">
        {parts.map((part, i) => {
          const match = part.match(/^\{\{(\d+)\}\}$/);
          if (!match) return <span key={i}>{part}</span>;

          const id = match[1];
          const luecke = abschnitt.luecken.find((l) => l.id === id);
          if (!luecke) return <span key={i}>{part}</span>;

          const userVal = antworten[id] || "";
          const isCorrect =
            checked && userVal.trim().toLowerCase() === luecke.antwort.toLowerCase();
          const isWrong =
            checked && userVal.trim().toLowerCase() !== luecke.antwort.toLowerCase();

          return (
            <span key={i} className="inline-block mx-1">
              <input
                type="text"
                value={userVal}
                onChange={(e) =>
                  setAntworten((prev) => ({ ...prev, [id]: e.target.value }))
                }
                disabled={checked}
                placeholder="..."
                className={`w-28 rounded border-2 px-2 py-1 text-sm font-medium text-center transition-colors ${
                  isCorrect
                    ? "border-emerald-400 bg-emerald-50 text-emerald-700"
                    : isWrong
                    ? "border-red-400 bg-red-50 text-red-700"
                    : "border-zinc-300 bg-zinc-50"
                }`}
              />
              {isWrong && (
                <span className="ml-1 text-xs text-red-500">{luecke.antwort}</span>
              )}
            </span>
          );
        })}
      </div>

      {!checked && (
        <div className="mt-5 flex justify-end">
          <button
            onClick={pruefen}
            disabled={Object.keys(antworten).length < abschnitt.luecken.length}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-40 transition-colors"
          >
            Prüfen
          </button>
        </div>
      )}

      {checked && (
        <div className="mt-4 text-center">
          <span className="text-lg font-bold text-emerald-700">
            {abschnitt.luecken.filter(
              (l) => antworten[l.id]?.trim().toLowerCase() === l.antwort.toLowerCase()
            ).length}{" "}
            / {abschnitt.luecken.length} richtig
          </span>
        </div>
      )}
    </div>
  );
}
