"use client";

import { QuittungDef, ressourcen as alleRessourcen } from "@/lib/inhalte/berufsleben";
import { kompetenzFarben } from "@/lib/themen";
import { sprachmodiFarben } from "@/lib/sprachmodi";
import type { Thema } from "@/lib/themen";

interface Props {
  quittung: QuittungDef;
  completedIds: Set<string>;
  thema: Thema;
}

export default function Quittung({ quittung, completedIds, thema }: Props) {
  const erledigte = quittung.erforderlicheSchritte.filter((id) =>
    completedIds.has(id)
  );
  const alle = quittung.erforderlicheSchritte.length;
  const freigeschaltet = erledigte.length === alle;
  const pct = alle > 0 ? Math.round((erledigte.length / alle) * 100) : 0;

  // Welche Aspekte/Sprachmodi/Kompetenzen wurden durch erledigte Ressourcen berührt?
  const erledigteRessourcen = alleRessourcen.filter((r) => completedIds.has(r.id));
  const beruehrteAspekte = Array.from(new Set(erledigteRessourcen.flatMap((r) => r.aspekte)));
  const beruehrteSprachmodi = Array.from(new Set(erledigteRessourcen.flatMap((r) => r.sprachmodiAnschluesse)));
  const beruehrteKompetenzen = Array.from(new Set(erledigteRessourcen.flatMap((r) => r.kompetenzen)));

  return (
    <div
      className={`rounded-2xl border-2 p-6 transition-all ${
        freigeschaltet
          ? "border-emerald-300 bg-emerald-50"
          : "border-zinc-200 bg-zinc-50 opacity-70"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{freigeschaltet ? "📋" : "🔒"}</span>
        <div className="flex-1">
          <h3 className="font-semibold text-zinc-900">{quittung.titel}</h3>
          <p className="mt-1 text-sm text-zinc-600">{quittung.beschreibung}</p>
        </div>
      </div>

      {/* Fortschritt */}
      <div className="mt-4">
        <div className="mb-1 flex justify-between text-xs text-zinc-500">
          <span>Fortschritt</span>
          <span>{pct}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/60">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              freigeschaltet ? "bg-emerald-500" : "bg-zinc-300"
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Schritte */}
      <div className="mt-4 space-y-1">
        {quittung.erforderlicheSchritte.map((stepId) => {
          const done = completedIds.has(stepId);
          const res = alleRessourcen.find((r) => r.id === stepId);
          const label = res?.titel ?? stepId;
          return (
            <div key={stepId} className="flex items-center gap-2 text-sm">
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] ${
                  done ? "bg-emerald-500 text-white" : "bg-zinc-200 text-zinc-400"
                }`}
              >
                {done ? "\u2713" : "\u00B7"}
              </span>
              <span className={done ? "text-zinc-700" : "text-zinc-400"}>
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Freigeschaltet: Zusammenstellung was berührt wurde */}
      {freigeschaltet && (
        <div className="mt-5 border-t border-white/40 pt-4 space-y-4 print-section">
          {/* Aspekte */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-zinc-500 mb-1.5">
              Berührte Aspekte
            </h4>
            <div className="flex flex-wrap gap-1">
              {thema.aspekte.map((a) => (
                <span
                  key={a}
                  className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${
                    beruehrteAspekte.includes(a)
                      ? "bg-emerald-100 text-emerald-700 border-emerald-300"
                      : "bg-zinc-100 text-zinc-400 border-zinc-200"
                  }`}
                >
                  {a} {beruehrteAspekte.includes(a) ? "✓" : "–"}
                </span>
              ))}
            </div>
          </div>

          {/* Sprachmodi */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-zinc-500 mb-1.5">
              Berührte Sprachmodi
            </h4>
            <div className="flex flex-wrap gap-1">
              {thema.sprachmodi.map((sm) => (
                <span
                  key={sm}
                  className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${
                    beruehrteSprachmodi.includes(sm)
                      ? `${sprachmodiFarben[sm]}`
                      : "bg-zinc-100 text-zinc-400 border-zinc-200"
                  }`}
                >
                  {sm} {beruehrteSprachmodi.includes(sm) ? "✓" : "–"}
                </span>
              ))}
            </div>
          </div>

          {/* Kompetenzen */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-zinc-500 mb-1.5">
              Berührte Kompetenzen
            </h4>
            <div className="flex flex-wrap gap-1">
              {quittung.kompetenzen.map((k) => {
                const farbe = kompetenzFarben[k];
                return (
                  <span
                    key={k}
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${
                      beruehrteKompetenzen.includes(k)
                        ? `${farbe?.bg} ${farbe?.text} ${farbe?.border}`
                        : "bg-zinc-100 text-zinc-400 border-zinc-200"
                    }`}
                  >
                    {k} {beruehrteKompetenzen.includes(k) ? "✓" : "–"}
                  </span>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="mt-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm text-zinc-600 hover:bg-white/50 transition-colors print:hidden"
          >
            Quittung drucken / PDF
          </button>
        </div>
      )}
    </div>
  );
}
