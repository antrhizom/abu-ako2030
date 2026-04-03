"use client";

import { useState } from "react";
import type { Thema } from "@/lib/themen";
import { aspekteFarben, kompetenzFarben, themen } from "@/lib/themen";
import { sprachmodiFarben } from "@/lib/sprachmodi";
import type { ThemaEinleitung } from "@/lib/inhalte/herausforderungen";
import type { RessourcenBlockData } from "@/lib/inhalte/berufsleben";

interface Props {
  thema: Thema;
  einleitung: ThemaEinleitung;
  ressourcen: RessourcenBlockData[];
}

type FilterTyp = "aspekt" | "sprachmodus" | "kompetenz";

function itemInThemen(typ: FilterTyp, value: string) {
  return themen
    .filter((t) => {
      if (typ === "aspekt") return t.aspekte.includes(value);
      if (typ === "sprachmodus") return (t.sprachmodi as string[]).includes(value);
      return t.kompetenzen.includes(value);
    })
    .map((t) => ({ titel: t.titel, nummer: t.nummer, aktuell: t.id }));
}

export default function ThemaExplorer({ thema, einleitung, ressourcen }: Props) {
  const [activeFilter, setActiveFilter] = useState<{ typ: FilterTyp; value: string } | null>(null);
  const [hovered, setHovered] = useState<{ typ: FilterTyp; value: string } | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [showZirkularitaet, setShowZirkularitaet] = useState(false);
  const [expandedRessource, setExpandedRessource] = useState<string | null>(null);

  function toggleFilter(typ: FilterTyp, value: string) {
    if (activeFilter?.typ === typ && activeFilter?.value === value) {
      setActiveFilter(null);
    } else {
      setActiveFilter({ typ, value });
      setExpandedRessource(null);
    }
  }

  function filterRessourcen(): RessourcenBlockData[] {
    if (!activeFilter) return [];
    return ressourcen.filter((r) => {
      if (activeFilter.typ === "aspekt") return r.aspekte.includes(activeFilter.value);
      if (activeFilter.typ === "sprachmodus") return r.sprachmodiAnschluesse.includes(activeFilter.value);
      return r.kompetenzen.includes(activeFilter.value);
    });
  }

  const gefilterteRessourcen = filterRessourcen();
  const hoveredThemen = hovered ? itemInThemen(hovered.typ, hovered.value) : [];

  return (
    <div className="mb-10 relative">
      {/* Schwebendes Zirkularitäts-Symbol */}
      <div className="fixed bottom-6 right-6 z-40 print:hidden">
        <button
          onClick={() => setShowZirkularitaet(!showZirkularitaet)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-colors"
          title="Zirkularität"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
        {showZirkularitaet && (
          <div className="absolute bottom-12 right-0 w-80 rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl text-xs leading-relaxed">
            <div className="flex items-center justify-between mb-3">
              <p className="font-semibold text-zinc-900 text-sm">Zirkularität</p>
              <button onClick={() => setShowZirkularitaet(false)} className="text-zinc-400 hover:text-zinc-600">&times;</button>
            </div>
            <p className="mb-3 text-zinc-500">Spiralförmig über 7 Themen: Einführung (R1) → Vertiefung (R2/R3).</p>
            <div className="space-y-2">
              <div className="rounded-lg bg-green-50 border-2 border-green-300 p-2.5">
                <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-green-400" /><span className="font-semibold text-green-800">Aspekte</span><span className="text-green-600 text-[10px]">Grüntöne</span></div>
                <p className="text-green-700 mt-0.5">8 Perspektiven — <em>worüber</em> du lernst</p>
              </div>
              <div className="rounded-lg bg-amber-50 border-2 border-amber-300 p-2.5">
                <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-amber-400" /><span className="font-semibold text-amber-800">Sprachmodi</span><span className="text-amber-600 text-[10px]">Gelbtöne</span></div>
                <p className="text-amber-700 mt-0.5">9 Handlungsformen — <em>wie</em> du arbeitest</p>
              </div>
              <div className="rounded-lg bg-blue-50 border-2 border-blue-300 p-2.5">
                <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-blue-400" /><span className="font-semibold text-blue-800">Schlüsselkompetenzen</span><span className="text-blue-600 text-[10px]">Blautöne</span></div>
                <p className="text-blue-700 mt-0.5">12 Fähigkeiten — <em>wozu</em> du lernst</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Einleitungstext */}
      <div className="mb-6 rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-6">
        <p className="text-sm leading-relaxed text-indigo-900">{einleitung.situationstext}</p>
      </div>

      {/* Überschrift + Info */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-base font-semibold text-zinc-900">Kompetenz-Erkunden</h2>
        <div className="relative">
          <button
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
            onClick={() => setShowInfo(!showInfo)}
            className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-200 text-[10px] font-bold text-zinc-600 hover:bg-zinc-300"
          >i</button>
          {showInfo && (
            <div className="absolute left-6 top-0 z-30 w-80 rounded-xl border border-zinc-200 bg-white p-4 shadow-lg text-xs leading-relaxed">
              <p className="font-semibold text-zinc-900 text-sm mb-2">Drei Kompetenzarten</p>
              <div className="space-y-2">
                <div className="rounded-lg bg-green-50 border-2 border-green-300 p-2"><span className="font-semibold text-green-800">Aspekte</span> — <em className="text-green-600">worüber</em></div>
                <div className="rounded-lg bg-amber-50 border-2 border-amber-300 p-2"><span className="font-semibold text-amber-800">Sprachmodi</span> — <em className="text-amber-600">wie</em></div>
                <div className="rounded-lg bg-blue-50 border-2 border-blue-300 p-2"><span className="font-semibold text-blue-800">Schlüsselkompetenzen</span> — <em className="text-blue-600">wozu</em></div>
              </div>
              <p className="mt-2 text-zinc-400">Klicke → Ressourcen. Hovere → Themen-Übersicht.</p>
            </div>
          )}
        </div>
        {activeFilter && (
          <button onClick={() => setActiveFilter(null)} className="ml-auto text-xs text-zinc-400 hover:text-zinc-600">Alle zeigen</button>
        )}
      </div>

      {/* Aspekte */}
      <div className="mb-3">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-green-600">Aspekte — worüber</span>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {thema.aspekte.map((a) => {
            const isActive = activeFilter?.typ === "aspekt" && activeFilter.value === a;
            return (
              <div key={a} className="relative">
                <button
                  onClick={() => toggleFilter("aspekt", a)}
                  onMouseEnter={() => setHovered({ typ: "aspekt", value: a })}
                  onMouseLeave={() => setHovered(null)}
                  className={`rounded-full border-2 px-3 py-1 text-xs font-medium transition-all ${
                    isActive ? `${aspekteFarben[a]} ring-2 ring-green-400 shadow-sm` : `${aspekteFarben[a]} opacity-70 hover:opacity-100`
                  }`}
                >{a}</button>
                {hovered?.typ === "aspekt" && hovered.value === a && <HoverTooltip items={hoveredThemen} currentThemaId={thema.id} />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Sprachmodi */}
      <div className="mb-3">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-amber-600">Sprachmodi — wie</span>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {thema.sprachmodi.map((sm) => {
            const isActive = activeFilter?.typ === "sprachmodus" && activeFilter.value === sm;
            return (
              <div key={sm} className="relative">
                <button
                  onClick={() => toggleFilter("sprachmodus", sm)}
                  onMouseEnter={() => setHovered({ typ: "sprachmodus", value: sm })}
                  onMouseLeave={() => setHovered(null)}
                  className={`rounded-full border-2 px-3 py-1 text-xs font-medium transition-all ${
                    isActive ? `${sprachmodiFarben[sm]} ring-2 ring-amber-400 shadow-sm` : `${sprachmodiFarben[sm]} opacity-70 hover:opacity-100`
                  }`}
                >{sm}</button>
                {hovered?.typ === "sprachmodus" && hovered.value === sm && <HoverTooltip items={hoveredThemen} currentThemaId={thema.id} />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Schlüsselkompetenzen */}
      <div className="mb-6">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-blue-600">Schlüsselkompetenzen — wozu</span>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {thema.kompetenzen.map((k) => {
            const f = kompetenzFarben[k];
            const isActive = activeFilter?.typ === "kompetenz" && activeFilter.value === k;
            return (
              <div key={k} className="relative">
                <button
                  onClick={() => toggleFilter("kompetenz", k)}
                  onMouseEnter={() => setHovered({ typ: "kompetenz", value: k })}
                  onMouseLeave={() => setHovered(null)}
                  className={`rounded-full border-2 px-3 py-1 text-xs font-medium transition-all ${
                    isActive ? `${f?.bg} ${f?.text} ${f?.border} ring-2 ring-blue-400 shadow-sm` : `${f?.bg} ${f?.text} ${f?.border} opacity-70 hover:opacity-100`
                  }`}
                >{k}</button>
                {hovered?.typ === "kompetenz" && hovered.value === k && <HoverTooltip items={hoveredThemen} currentThemaId={thema.id} />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Gefilterter Inhalt — Ressourcen als Zitatblöcke */}
      {activeFilter && gefilterteRessourcen.length > 0 && (
        <div className="space-y-2">
          {gefilterteRessourcen.map((r) => (
            <div key={r.id} className="rounded-2xl border-2 border-zinc-200 bg-white overflow-hidden">
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-400 to-violet-400" />
                <button
                  onClick={() => setExpandedRessource(expandedRessource === r.id ? null : r.id)}
                  className="w-full text-left pl-5 pr-4 py-4 hover:bg-zinc-50 transition-colors"
                >
                  <p className="font-medium text-sm text-zinc-900">{r.titel}</p>
                  <p className="mt-1 text-sm text-zinc-600 italic">&laquo;{r.zitat}&raquo;</p>
                </button>
              </div>
              {expandedRessource === r.id && (
                <div className="border-t border-zinc-100 bg-zinc-50/50 pl-5 pr-4 py-4">
                  {r.inhalt.split("\n\n").map((p, i) => (
                    <p key={i} className="mb-2 text-sm leading-relaxed text-zinc-600">{p}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {!activeFilter && (
        <p className="text-xs text-zinc-400 text-center py-4">
          Klicke auf einen Aspekt, Sprachmodus oder eine Schlüsselkompetenz.
        </p>
      )}
    </div>
  );
}

function HoverTooltip({ items, currentThemaId }: { items: { titel: string; nummer: number; aktuell: string }[]; currentThemaId: string }) {
  return (
    <div className="absolute left-0 top-full mt-1 z-30 w-52 rounded-lg border border-zinc-200 bg-white p-3 shadow-xl text-xs">
      <p className="font-semibold text-zinc-600 mb-1">Themen:</p>
      <div className="space-y-0.5">
        {items.map((t) => (
          <div key={t.nummer} className={`flex items-center gap-1.5 rounded px-2 py-0.5 ${
            t.aktuell === currentThemaId ? "bg-indigo-50 text-indigo-700 font-medium" : "text-zinc-500"
          }`}>
            <span className="text-[10px] font-bold w-4">{String(t.nummer).padStart(2, "0")}</span>
            <span className="truncate">{t.titel}</span>
            {t.aktuell === currentThemaId && <span className="ml-auto text-[9px] opacity-60">hier</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
