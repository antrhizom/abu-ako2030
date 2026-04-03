"use client";

import { Aktivitaet } from "@/lib/inhalte/berufsleben";

interface Props {
  kompetenzen: string[]; // All competencies for this thema
  aktivitaeten: Aktivitaet[];
  completedIds: Set<string>;
}

export default function KompetenzTracker({ kompetenzen, aktivitaeten, completedIds }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-zinc-500">
        Diese Kompetenzen werden in Thema 1 geübt. Der Fortschritt zeigt, welche
        Aktivitäten du bereits abgeschlossen hast.
      </p>
      {kompetenzen.map((k) => {
        const relevant = aktivitaeten.filter((a) => a.kompetenzen.includes(k));
        const erledigt = relevant.filter((a) => completedIds.has(a.id));
        const pct = relevant.length > 0 ? Math.round((erledigt.length / relevant.length) * 100) : 0;

        return (
          <div key={k} className="rounded-lg border border-zinc-200 bg-white p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-800">{k}</span>
              <span className="text-xs text-zinc-400">
                {erledigt.length} / {relevant.length} Aktivitäten
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-zinc-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
            {relevant.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {relevant.map((a) => (
                  <span
                    key={a.id}
                    className={`rounded px-2 py-0.5 text-[10px] ${
                      completedIds.has(a.id)
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-zinc-100 text-zinc-400"
                    }`}
                  >
                    {a.titel}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
