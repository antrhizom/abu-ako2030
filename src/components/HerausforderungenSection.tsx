"use client";

import { useState } from "react";
import type { ThemaEinleitung } from "@/lib/inhalte/herausforderungen";
import { themen, kompetenzFarben } from "@/lib/themen";

interface Props {
  einleitung: ThemaEinleitung;
}

// Finde alle Themen wo eine Kompetenz vorkommt
function kompetenzInThemen(kompetenz: string): { titel: string; nummer: number; aktuell: boolean }[] {
  return themen
    .filter((t) => t.kompetenzen.includes(kompetenz))
    .map((t) => ({
      titel: t.titel,
      nummer: t.nummer,
      aktuell: t.id === "berufsleben",
    }));
}

export default function HerausforderungenSection({ einleitung }: Props) {
  const [activeKompetenz, setActiveKompetenz] = useState<string | null>(null);
  const [hoveredKompetenz, setHoveredKompetenz] = useState<string | null>(null);
  const [showInfoTooltip, setShowInfoTooltip] = useState(false);

  const alleKompetenzen = Array.from(
    new Set(
      einleitung.herausforderungen.flatMap((h) =>
        h.kompetenzHilfe.map((kh) => kh.kompetenz)
      )
    )
  );

  return (
    <div className="mb-10">
      {/* Einleitungstext — Situation der Lernenden */}
      <div className="mb-6 rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-6">
        <p className="text-sm leading-relaxed text-indigo-900">
          {einleitung.situationstext}
        </p>
      </div>

      {/* Überschrift + Info-Button */}
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-lg font-semibold text-zinc-900">
          Herausforderungen & Kompetenzen
        </h2>
        <div className="relative">
          <button
            onMouseEnter={() => setShowInfoTooltip(true)}
            onMouseLeave={() => setShowInfoTooltip(false)}
            onClick={() => setShowInfoTooltip(!showInfoTooltip)}
            className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-200 text-[10px] font-bold text-zinc-600 hover:bg-zinc-300 transition-colors"
          >
            i
          </button>
          {showInfoTooltip && (
            <div className="absolute left-6 top-0 z-20 w-72 rounded-xl border border-zinc-200 bg-white p-4 shadow-lg text-xs text-zinc-600 leading-relaxed">
              <p className="font-semibold text-zinc-800 mb-1">Was sind Schlüsselkompetenzen?</p>
              <p>
                Der Lehrplan definiert 12 Schlüsselkompetenzen, die über alle Themen
                hinweg aufgebaut werden. Jedes Thema fördert bestimmte Kompetenzen
                besonders. Klicke auf eine Kompetenz, um zu sehen, wo sie hilft.
                Hovere über eine Kompetenz, um zu sehen, in welchen anderen Themen
                sie auch vorkommt.
              </p>
            </div>
          )}
        </div>
      </div>

      <p className="text-sm text-zinc-500 mb-5">
        Klicke auf eine Kompetenz, um zu sehen wo sie in den Herausforderungen wirkt.
      </p>

      {/* Kompetenz-Filter-Buttons */}
      <div className="mb-6 flex flex-wrap gap-2">
        {alleKompetenzen.map((k) => {
          const farbe = kompetenzFarben[k] ?? { bg: "bg-zinc-50", text: "text-zinc-700", border: "border-zinc-300", ring: "ring-zinc-300" };
          const isActive = activeKompetenz === k;
          const isHovered = hoveredKompetenz === k;

          return (
            <div key={k} className="relative">
              <button
                onClick={() => setActiveKompetenz(isActive ? null : k)}
                onMouseEnter={() => setHoveredKompetenz(k)}
                onMouseLeave={() => setHoveredKompetenz(null)}
                className={`rounded-full border-2 px-4 py-1.5 text-xs font-semibold transition-all ${
                  isActive
                    ? `${farbe.bg} ${farbe.text} ${farbe.border} ring-2 ${farbe.ring} shadow-sm`
                    : `bg-white ${farbe.text} ${farbe.border} hover:${farbe.bg}`
                }`}
              >
                {k}
              </button>

              {/* Hover-Tooltip: Wo diese Kompetenz vorkommt */}
              {isHovered && !isActive && (
                <div className="absolute left-0 top-full mt-1 z-20 w-56 rounded-lg border border-zinc-200 bg-white p-3 shadow-lg text-xs">
                  <p className="font-semibold text-zinc-700 mb-1.5">Kommt vor in:</p>
                  <div className="space-y-1">
                    {kompetenzInThemen(k).map((t) => (
                      <div
                        key={t.nummer}
                        className={`flex items-center gap-2 rounded px-2 py-1 ${
                          t.aktuell ? `${farbe.bg} ${farbe.text} font-medium` : "text-zinc-500"
                        }`}
                      >
                        <span className="text-[10px] font-bold w-4">
                          {String(t.nummer).padStart(2, "0")}
                        </span>
                        <span>{t.titel}</span>
                        {t.aktuell && (
                          <span className="ml-auto text-[9px] opacity-70">aktuell</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {activeKompetenz && (
          <button
            onClick={() => setActiveKompetenz(null)}
            className="rounded-full px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-600"
          >
            Alle zeigen
          </button>
        )}
      </div>

      {/* Herausforderungen */}
      <div className="space-y-4">
        {einleitung.herausforderungen.map((h) => {
          const relevanteHilfen = activeKompetenz
            ? h.kompetenzHilfe.filter((kh) => kh.kompetenz === activeKompetenz)
            : h.kompetenzHilfe;
          const isHighlighted = !activeKompetenz || relevanteHilfen.length > 0;

          return (
            <div
              key={h.id}
              className={`rounded-2xl border-2 p-5 transition-all ${
                isHighlighted
                  ? "border-zinc-300 bg-white shadow-sm"
                  : "border-zinc-100 bg-zinc-50 opacity-30"
              }`}
            >
              <h3 className="font-semibold text-zinc-900 text-sm">{h.titel}</h3>
              <p className="mt-1 text-sm text-zinc-500">{h.beschreibung}</p>

              <div className="mt-3 space-y-2">
                {h.kompetenzHilfe.map((kh) => {
                  const farbe = kompetenzFarben[kh.kompetenz] ?? { bg: "bg-zinc-50", text: "text-zinc-700", border: "border-zinc-300", ring: "ring-zinc-300" };
                  const isKompetenzActive = activeKompetenz === kh.kompetenz;

                  return (
                    <div
                      key={kh.kompetenz}
                      className={`rounded-xl border-2 p-3 transition-all ${
                        isKompetenzActive
                          ? `${farbe.bg} ${farbe.border} ring-1 ${farbe.ring}`
                          : activeKompetenz && !isKompetenzActive
                          ? "border-zinc-100 bg-zinc-50 opacity-30"
                          : `${farbe.bg} ${farbe.border}`
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${farbe.text} ${farbe.border}`}
                        >
                          {kh.kompetenz}
                        </span>
                      </div>
                      <p className={`mt-1.5 text-xs leading-relaxed ${farbe.text}`}>
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
