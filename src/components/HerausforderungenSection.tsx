"use client";

import { useState } from "react";
import type { Herausforderung } from "@/lib/inhalte/herausforderungen";

interface Props {
  herausforderungen: Herausforderung[];
}

export default function HerausforderungenSection({ herausforderungen }: Props) {
  const [activeKompetenz, setActiveKompetenz] = useState<string | null>(null);

  // Alle einzigartigen Kompetenzen sammeln
  const alleKompetenzen = Array.from(
    new Set(
      herausforderungen.flatMap((h) =>
        h.kompetenzHilfe.map((kh) => kh.kompetenz)
      )
    )
  );

  const kompetenzFarben: Record<string, { bg: string; text: string; ring: string }> = {
    "Verständnis fördern": { bg: "bg-sky-50", text: "text-sky-700", ring: "ring-sky-300" },
    "Lebensphasen planen": { bg: "bg-violet-50", text: "text-violet-700", ring: "ring-violet-300" },
    "Ziele setzen und anpassen": { bg: "bg-amber-50", text: "text-amber-700", ring: "ring-amber-300" },
  };

  return (
    <div className="mb-10">
      <h2 className="text-lg font-semibold text-zinc-900 mb-2">
        Wo stehst du? Wo stösst du an?
      </h2>
      <p className="text-sm text-zinc-500 mb-4">
        Typische Herausforderungen beim Berufseinstieg — und wie die
        Kompetenzen dir helfen. Klicke auf eine Kompetenz, um zu sehen,
        wo sie wirkt.
      </p>

      {/* Kompetenz-Filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        {alleKompetenzen.map((k) => {
          const farbe = kompetenzFarben[k] ?? { bg: "bg-zinc-50", text: "text-zinc-700", ring: "ring-zinc-300" };
          const isActive = activeKompetenz === k;
          return (
            <button
              key={k}
              onClick={() => setActiveKompetenz(isActive ? null : k)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                isActive
                  ? `${farbe.bg} ${farbe.text} ring-2 ${farbe.ring} shadow-sm`
                  : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
              }`}
            >
              {k}
            </button>
          );
        })}
        {activeKompetenz && (
          <button
            onClick={() => setActiveKompetenz(null)}
            className="rounded-full px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-600"
          >
            Filter aufheben
          </button>
        )}
      </div>

      {/* Herausforderungen */}
      <div className="space-y-4">
        {herausforderungen.map((h) => {
          const relevanteHilfen = activeKompetenz
            ? h.kompetenzHilfe.filter((kh) => kh.kompetenz === activeKompetenz)
            : h.kompetenzHilfe;

          const isHighlighted = !activeKompetenz || relevanteHilfen.length > 0;

          return (
            <div
              key={h.id}
              className={`rounded-xl border p-5 transition-all ${
                isHighlighted
                  ? "border-zinc-200 bg-white"
                  : "border-zinc-100 bg-zinc-50 opacity-40"
              }`}
            >
              <h3 className="font-medium text-zinc-900 text-sm">
                {h.titel}
              </h3>
              <p className="mt-1 text-sm text-zinc-500">{h.beschreibung}</p>

              {/* Kompetenz-Hilfe */}
              <div className="mt-3 space-y-2">
                {h.kompetenzHilfe.map((kh) => {
                  const farbe = kompetenzFarben[kh.kompetenz] ?? { bg: "bg-zinc-50", text: "text-zinc-700", ring: "ring-zinc-300" };
                  const isKompetenzActive = activeKompetenz === kh.kompetenz;

                  return (
                    <div
                      key={kh.kompetenz}
                      className={`rounded-lg p-3 transition-all ${
                        isKompetenzActive
                          ? `${farbe.bg} ring-2 ${farbe.ring}`
                          : activeKompetenz && !isKompetenzActive
                          ? "bg-zinc-50 opacity-30"
                          : "bg-zinc-50"
                      }`}
                    >
                      <span
                        className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                          isKompetenzActive ? `${farbe.text}` : "text-zinc-500"
                        }`}
                      >
                        {kh.kompetenz}
                      </span>
                      <p
                        className={`mt-1 text-xs ${
                          isKompetenzActive ? farbe.text : "text-zinc-500"
                        }`}
                      >
                        {kh.wieHilft}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
