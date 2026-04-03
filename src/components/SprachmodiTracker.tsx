"use client";

import { sprachmodiFarben, sprachmodiKurz } from "@/lib/sprachmodi";
import type { RessourcenBlockData } from "@/lib/inhalte/berufsleben";

interface Props {
  themaSprachmodi: string[];
  kompetenzen: string[];
  ressourcen: RessourcenBlockData[];
  completedIds: Set<string>;
}

export default function SprachmodiTracker({
  themaSprachmodi,
  kompetenzen,
  ressourcen,
  completedIds,
}: Props) {
  return (
    <div className="space-y-6">
      {/* Sprachmodi */}
      <div>
        <h3 className="text-sm font-semibold text-zinc-900 mb-1">
          Verpflichtende Sprachmodi
        </h3>
        <p className="text-xs text-zinc-500 mb-4">
          Diese Sprachmodi müssen in diesem Thema geübt werden. Der Fortschritt zeigt,
          bei welchen Ressourcen du sie bereits angetroffen hast.
        </p>
        <div className="space-y-3">
          {themaSprachmodi.map((sm) => {
            const relevant = ressourcen.filter((r) =>
              r.sprachmodiAnschluesse.includes(sm)
            );
            const erledigt = relevant.filter((r) => completedIds.has(r.id));
            const pct =
              relevant.length > 0
                ? Math.round((erledigt.length / relevant.length) * 100)
                : 0;

            return (
              <div
                key={sm}
                className="rounded-lg border border-zinc-200 bg-white p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                      sprachmodiFarben[sm] ?? "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    {sprachmodiKurz[sm] ?? sm}
                  </span>
                  <span className="text-xs text-zinc-400">
                    {erledigt.length}/{relevant.length} Ressourcen
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-500 to-purple-500 transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {relevant.map((r) => (
                    <span
                      key={r.id}
                      className={`rounded px-1.5 py-0.5 text-[10px] ${
                        completedIds.has(r.id)
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-zinc-100 text-zinc-400"
                      }`}
                    >
                      {r.titel}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Kompetenzen */}
      <div>
        <h3 className="text-sm font-semibold text-zinc-900 mb-1">
          Schlüsselkompetenzen
        </h3>
        <p className="text-xs text-zinc-500 mb-4">
          Diese Kompetenzen werden in diesem Thema angesprochen.
        </p>
        <div className="space-y-3">
          {kompetenzen.map((k) => {
            const relevant = ressourcen.filter((r) =>
              r.kompetenzen.includes(k)
            );
            const erledigt = relevant.filter((r) => completedIds.has(r.id));
            const pct =
              relevant.length > 0
                ? Math.round((erledigt.length / relevant.length) * 100)
                : 0;

            return (
              <div
                key={k}
                className="rounded-lg border border-zinc-200 bg-white p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-zinc-800">{k}</span>
                  <span className="text-xs text-zinc-400">
                    {erledigt.length}/{relevant.length}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
