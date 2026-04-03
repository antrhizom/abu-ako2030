"use client";

import { useState } from "react";
import { TrueFalseKarte } from "@/lib/inhalte/berufsleben";

interface Props {
  karten: TrueFalseKarte[];
  onComplete: (score: number) => void;
  completed: boolean;
}

export default function TrueFalseCards({ karten, onComplete, completed }: Props) {
  const [current, setCurrent] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [richtig, setRichtig] = useState(0);
  const [done, setDone] = useState(false);
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);

  const karte = karten[current];

  function antworten(antwort: boolean) {
    setUserAnswer(antwort);
    setAnswered(true);
    if (antwort === karte.korrekt) {
      setRichtig((r) => r + 1);
    }
  }

  function weiter() {
    if (current + 1 < karten.length) {
      setCurrent(current + 1);
      setAnswered(false);
      setUserAnswer(null);
    } else {
      const score = Math.round((richtig / karten.length) * 100);
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
    const score = Math.round((richtig / karten.length) * 100);
    return (
      <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6 text-center">
        <div className="text-3xl font-bold text-emerald-700">{score}%</div>
        <p className="mt-2 text-sm text-emerald-600">
          {richtig} von {karten.length} richtig beurteilt
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs text-zinc-400">
          Karte {current + 1} / {karten.length}
        </span>
        <div className="flex gap-1">
          {karten.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-6 rounded-full ${
                i < current ? "bg-emerald-400" : i === current ? "bg-amber-400" : "bg-zinc-200"
              }`}
            />
          ))}
        </div>
      </div>

      <div
        className={`rounded-xl p-6 text-center transition-colors ${
          !answered
            ? "bg-zinc-50 border-2 border-zinc-200"
            : userAnswer === karte.korrekt
            ? "bg-emerald-50 border-2 border-emerald-300"
            : "bg-red-50 border-2 border-red-300"
        }`}
      >
        <p className="text-lg font-medium text-zinc-800">{karte.aussage}</p>

        {answered && (
          <div className="mt-4">
            <span
              className={`inline-block rounded-full px-3 py-1 text-sm font-bold ${
                karte.korrekt ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
              }`}
            >
              {karte.korrekt ? "WAHR" : "FALSCH"}
            </span>
            <p className="mt-2 text-sm text-zinc-600">{karte.erklaerung}</p>
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-center gap-3">
        {!answered ? (
          <>
            <button
              onClick={() => antworten(true)}
              className="rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
            >
              Wahr
            </button>
            <button
              onClick={() => antworten(false)}
              className="rounded-lg bg-red-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-red-600 transition-colors"
            >
              Falsch
            </button>
          </>
        ) : (
          <button
            onClick={weiter}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
          >
            {current + 1 < karten.length ? "Nächste Karte" : "Abschliessen"}
          </button>
        )}
      </div>
    </div>
  );
}
