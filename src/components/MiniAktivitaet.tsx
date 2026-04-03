"use client";

import { useState } from "react";
import type { MiniAktivitaet as MiniAktData } from "@/lib/inhalte/berufsleben";

interface Props {
  data: MiniAktData;
  completed: boolean;
  onComplete: (score: number) => void;
}

export default function MiniAktivitaet({ data, completed, onComplete }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);

  function pruefen() {
    if (selected === null) return;
    setChecked(true);
    const score = selected === data.korrekt ? 100 : 0;
    onComplete(score);
  }

  if (completed && !checked) {
    return (
      <div className="mt-4 rounded-lg bg-emerald-50 border border-emerald-200 p-4">
        <p className="text-sm font-medium text-emerald-800 mb-2">{data.frage}</p>
        <div className="space-y-1">
          {data.optionen.map((opt, i) => (
            <div
              key={i}
              className={`rounded-lg border px-3 py-2 text-sm ${
                i === data.korrekt
                  ? "border-emerald-400 bg-emerald-100 text-emerald-800 font-medium"
                  : "border-emerald-200 bg-white/50 text-zinc-400"
              }`}
            >
              {i === data.korrekt && <span className="mr-1">✓</span>}
              {opt}
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-emerald-600">{data.erklaerung}</p>
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-lg bg-zinc-50 border border-zinc-200 p-4">
      <p className="text-sm font-medium text-zinc-800 mb-3">{data.frage}</p>
      <div className="space-y-1.5">
        {data.optionen.map((opt, i) => {
          let cls = "border-zinc-200 bg-white hover:border-zinc-400";
          if (checked) {
            if (i === data.korrekt) cls = "border-emerald-500 bg-emerald-50";
            else if (i === selected) cls = "border-red-400 bg-red-50";
          } else if (i === selected) {
            cls = "border-indigo-400 bg-indigo-50";
          }
          return (
            <button
              key={i}
              onClick={() => !checked && setSelected(i)}
              disabled={checked}
              className={`w-full rounded-lg border px-3 py-2 text-left text-sm transition-colors ${cls}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {checked && (
        <p className="mt-2 text-xs text-zinc-500">{data.erklaerung}</p>
      )}
      {!checked && (
        <button
          onClick={pruefen}
          disabled={selected === null}
          className="mt-3 rounded-lg bg-indigo-600 px-4 py-1.5 text-xs font-medium text-white hover:bg-indigo-700 disabled:opacity-40 transition-colors"
        >
          Prüfen
        </button>
      )}
    </div>
  );
}
