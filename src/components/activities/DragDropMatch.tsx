"use client";

import { useState, useCallback } from "react";
import { DragDropPaar } from "@/lib/inhalte/berufsleben";

interface Props {
  paare: DragDropPaar[];
  instruktion: string;
  onComplete: (score: number) => void;
  completed: boolean;
}

export default function DragDropMatch({ paare, instruktion, onComplete, completed }: Props) {
  const [zuordnungen, setZuordnungen] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [dragging, setDragging] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const verfuegbar = paare
    .map((p) => p.item)
    .filter((item) => !Object.values(zuordnungen).includes(item));

  const handleDragStart = useCallback((item: string) => {
    setDragging(item);
  }, []);

  const handleDrop = useCallback(
    (ziel: string) => {
      if (dragging) {
        setZuordnungen((prev) => {
          const next = { ...prev };
          // Remove dragging item from any previous assignment
          for (const [k, v] of Object.entries(next)) {
            if (v === dragging) delete next[k];
          }
          // If target already had an item, free it
          next[ziel] = dragging;
          return next;
        });
        setDragging(null);
      }
    },
    [dragging]
  );

  function pruefen() {
    setChecked(true);
    const korrekt = paare.filter((p) => zuordnungen[p.ziel] === p.item).length;
    const score = Math.round((korrekt / paare.length) * 100);
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

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5">
      <p className="mb-4 text-sm text-zinc-500">{instruktion}</p>

      {/* Draggable items */}
      <div className="mb-5 flex flex-wrap gap-2">
        {verfuegbar.map((item) => (
          <div
            key={item}
            draggable
            onDragStart={() => handleDragStart(item)}
            className={`cursor-grab rounded-lg border-2 border-indigo-300 bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700 select-none active:cursor-grabbing ${
              dragging === item ? "opacity-50" : ""
            }`}
          >
            {item}
          </div>
        ))}
        {verfuegbar.length === 0 && !checked && (
          <span className="text-xs text-zinc-400">Alle zugeordnet — prüfe deine Antworten.</span>
        )}
      </div>

      {/* Drop zones */}
      <div className="space-y-2">
        {paare.map((p) => {
          const assigned = zuordnungen[p.ziel];
          const isCorrect = checked && assigned === p.item;
          const isWrong = checked && assigned && assigned !== p.item;

          return (
            <div
              key={p.ziel}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(p.ziel)}
              className={`flex items-center gap-3 rounded-lg border-2 p-3 transition-colors ${
                isCorrect
                  ? "border-emerald-400 bg-emerald-50"
                  : isWrong
                  ? "border-red-400 bg-red-50"
                  : assigned
                  ? "border-indigo-300 bg-indigo-50"
                  : "border-dashed border-zinc-300 bg-zinc-50"
              }`}
            >
              <div className="min-w-[80px]">
                {assigned ? (
                  <span
                    draggable={!checked}
                    onDragStart={() => !checked && handleDragStart(assigned)}
                    className={`inline-block rounded px-3 py-1 text-sm font-bold ${
                      isCorrect
                        ? "bg-emerald-200 text-emerald-800"
                        : isWrong
                        ? "bg-red-200 text-red-800"
                        : "bg-indigo-200 text-indigo-800 cursor-grab"
                    }`}
                  >
                    {assigned}
                  </span>
                ) : (
                  <span className="inline-block rounded border border-dashed border-zinc-300 px-3 py-1 text-sm text-zinc-400">
                    ?
                  </span>
                )}
              </div>
              <span className="text-sm text-zinc-700">{p.ziel}</span>
              {isWrong && (
                <span className="ml-auto text-xs text-red-500">
                  Richtig: {p.item}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {!checked && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={pruefen}
            disabled={Object.keys(zuordnungen).length < paare.length}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-40 transition-colors"
          >
            Prüfen
          </button>
        </div>
      )}

      {checked && (
        <div className="mt-4 text-center">
          <span className="text-lg font-bold text-emerald-700">
            {paare.filter((p) => zuordnungen[p.ziel] === p.item).length} / {paare.length} richtig
          </span>
        </div>
      )}
    </div>
  );
}
