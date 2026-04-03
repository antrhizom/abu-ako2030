"use client";

import { useState } from "react";
import type { Thema } from "@/lib/themen";
import type { Lebensbezug } from "@/lib/inhalte/lebensbezuege";
import type { RessourcenBlockData } from "@/lib/inhalte/berufsleben";

interface Props {
  thema: Thema;
  lebensbezuege: Lebensbezug[];
  ressourcen: RessourcenBlockData[];
}

export default function ThemaTitelHover({ thema, lebensbezuege, ressourcen }: Props) {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div className="mb-6">
      <span className="text-5xl font-light text-zinc-200">
        {String(thema.nummer).padStart(2, "0")}
      </span>

      {/* Titel — klickbar für Panel */}
      <div className="mt-2 flex items-center gap-3">
        <h1
          className="text-2xl font-bold text-zinc-900 cursor-pointer hover:text-indigo-700 transition-colors"
          onMouseEnter={() => setShowPanel(true)}
          onClick={() => setShowPanel(!showPanel)}
        >
          {thema.titel}
        </h1>
        <button
          onClick={() => setShowPanel(!showPanel)}
          className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] transition-colors ${
            showPanel ? "bg-indigo-600 text-white" : "bg-zinc-200 text-zinc-500 hover:bg-zinc-300"
          }`}
        >
          {showPanel ? "×" : "↓"}
        </button>
      </div>

      <p className="mt-2 text-zinc-500">{thema.leitfrage}</p>

      {/* Panel: Lebensbezüge + Lerninhalte */}
      {showPanel && (
        <div
          className="mt-4 rounded-2xl border-2 border-indigo-200 bg-white p-6 shadow-md"
          onMouseLeave={() => setShowPanel(false)}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500 mb-4">
            Individuelle Lebensbezüge & Lerninhalte
          </p>

          <div className="space-y-5">
            {lebensbezuege.map((lb) => {
              // Finde passende Ressourcen für diesen Lebensbezug
              const passendeRessourcen = ressourcen.filter((r) => {
                if (lb.kompetenzart === "aspekt") return r.aspekte.includes(lb.wert);
                if (lb.kompetenzart === "sprachmodus") return r.sprachmodiAnschluesse.includes(lb.wert);
                return r.kompetenzen.includes(lb.wert);
              });

              const artFarbe = lb.kompetenzart === "aspekt"
                ? "border-green-200 bg-green-50"
                : lb.kompetenzart === "sprachmodus"
                ? "border-amber-200 bg-amber-50"
                : "border-blue-200 bg-blue-50";

              const artLabel = lb.kompetenzart === "aspekt"
                ? "Aspekt"
                : lb.kompetenzart === "sprachmodus"
                ? "Sprachmodus"
                : "Schlüsselkompetenz";

              const artTextFarbe = lb.kompetenzart === "aspekt"
                ? "text-green-700"
                : lb.kompetenzart === "sprachmodus"
                ? "text-amber-700"
                : "text-blue-700";

              return (
                <div key={`${lb.kompetenzart}-${lb.wert}`} className={`rounded-xl border-2 p-4 ${artFarbe}`}>
                  {/* Kopfzeile */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-sm font-semibold ${artTextFarbe}`}>
                      {lb.wert}
                    </span>
                    <span className="rounded bg-white/60 px-1.5 py-0.5 text-[9px] font-medium text-zinc-500">
                      {artLabel}
                    </span>
                  </div>

                  {/* Lebensbezug — vollständiger Text */}
                  <div className="mb-3 rounded-lg bg-white/70 border border-rose-200 p-3">
                    <p className="text-[10px] font-semibold uppercase text-rose-400 mb-1">
                      Dein Lebensbezug
                    </p>
                    <p className="text-sm leading-relaxed text-rose-900">
                      {lb.lebensbezug}
                    </p>
                  </div>

                  {/* Anwendungskompetenz — vollständiger Text */}
                  <div className="mb-3 rounded-lg bg-white/70 border border-violet-200 p-3">
                    <p className="text-[10px] font-semibold uppercase text-violet-400 mb-1">
                      Anwendungskompetenz
                    </p>
                    <p className="text-sm leading-relaxed text-violet-900">
                      {lb.anwendung}
                    </p>
                  </div>

                  {/* Zugehörige Lerninhalte */}
                  {passendeRessourcen.length > 0 && (
                    <div>
                      <p className="text-[10px] font-semibold uppercase text-zinc-400 mb-1.5">
                        Lerninhalte
                      </p>
                      <div className="space-y-1.5">
                        {passendeRessourcen.map((r) => (
                          <div key={r.id} className="rounded-lg bg-white/70 border border-zinc-200 p-2.5">
                            <p className="text-xs font-medium text-zinc-800">{r.titel}</p>
                            <p className="mt-0.5 text-xs text-zinc-500 italic">
                              &laquo;{r.zitat}&raquo;
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
