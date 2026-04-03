"use client";

import { useState } from "react";
import { MCFrage } from "@/lib/inhalte/berufsleben";

interface Props {
  fragen: MCFrage[];
  onComplete: (score: number) => void;
  completed: boolean;
}

export default function MultipleChoiceQuiz({ fragen, onComplete, completed }: Props) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [richtig, setRichtig] = useState(0);
  const [done, setDone] = useState(false);

  const frage = fragen[current];

  function pruefen() {
    if (selected === null) return;
    setChecked(true);
    if (selected === frage.korrekt) {
      setRichtig((r) => r + 1);
    }
  }

  function weiter() {
    if (current + 1 < fragen.length) {
      setCurrent(current + 1);
      setSelected(null);
      setChecked(false);
    } else {
      const score = Math.round(((richtig + (selected === frage.korrekt ? 1 : 0)) / fragen.length) * 100);
      setDone(true);
      onComplete(score);
    }
  }

  if (completed && !done) {
    return (
      <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-5 text-center">
        <span className="text-emerald-600 font-medium">Bereits abgeschlossen</span>
      </div>
    );
  }

  if (done) {
    const score = Math.round((richtig / fragen.length) * 100);
    return (
      <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6 text-center">
        <div className="text-3xl font-bold text-emerald-700">{score}%</div>
        <p className="mt-2 text-sm text-emerald-600">
          {richtig} von {fragen.length} Fragen richtig
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs text-zinc-400">
          Frage {current + 1} / {fragen.length}
        </span>
        <div className="flex gap-1">
          {fragen.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-6 rounded-full ${
                i < current ? "bg-emerald-400" : i === current ? "bg-amber-400" : "bg-zinc-200"
              }`}
            />
          ))}
        </div>
      </div>

      <p className="mb-4 font-medium text-zinc-900">{frage.frage}</p>

      <div className="space-y-2">
        {frage.optionen.map((opt, i) => {
          let cls = "border-zinc-200 bg-white hover:border-zinc-400";
          if (checked) {
            if (i === frage.korrekt) cls = "border-emerald-500 bg-emerald-50";
            else if (i === selected) cls = "border-red-400 bg-red-50";
          } else if (i === selected) {
            cls = "border-indigo-400 bg-indigo-50";
          }
          return (
            <button
              key={i}
              onClick={() => !checked && setSelected(i)}
              disabled={checked}
              className={`w-full rounded-lg border-2 px-4 py-3 text-left text-sm transition-colors ${cls}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {checked && (
        <p className="mt-3 rounded-lg bg-zinc-50 p-3 text-sm text-zinc-600">
          {frage.erklaerung}
        </p>
      )}

      <div className="mt-4 flex justify-end">
        {!checked ? (
          <button
            onClick={pruefen}
            disabled={selected === null}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-40 transition-colors"
          >
            Prüfen
          </button>
        ) : (
          <button
            onClick={weiter}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
          >
            {current + 1 < fragen.length ? "Weiter" : "Abschliessen"}
          </button>
        )}
      </div>
    </div>
  );
}
