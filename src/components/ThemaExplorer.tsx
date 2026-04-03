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

// Wo kommt ein Item über Themen hinweg vor?
function itemInThemen(
  typ: FilterTyp,
  value: string
): { titel: string; nummer: number; aktuell: string }[] {
  return themen
    .filter((t) => {
      if (typ === "aspekt") return t.aspekte.includes(value);
      if (typ === "sprachmodus") return (t.sprachmodi as string[]).includes(value);
      return t.kompetenzen.includes(value);
    })
    .map((t) => ({
      titel: t.titel,
      nummer: t.nummer,
      aktuell: t.id,
    }));
}

export default function ThemaExplorer({ thema, einleitung, ressourcen }: Props) {
  const [activeFilter, setActiveFilter] = useState<{ typ: FilterTyp; value: string } | null>(null);
  const [hovered, setHovered] = useState<{ typ: FilterTyp; value: string } | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  function toggleFilter(typ: FilterTyp, value: string) {
    if (activeFilter?.typ === typ && activeFilter?.value === value) {
      setActiveFilter(null);
    } else {
      setActiveFilter({ typ, value });
    }
  }

  // Welche Ressourcen passen zum aktiven Filter?
  function filterRessourcen(): RessourcenBlockData[] {
    if (!activeFilter) return [];
    return ressourcen.filter((r) => {
      if (activeFilter.typ === "aspekt") return r.aspekte.includes(activeFilter.value);
      if (activeFilter.typ === "sprachmodus") return r.sprachmodiAnschluesse.includes(activeFilter.value);
      return r.kompetenzen.includes(activeFilter.value);
    });
  }

  // Welche Herausforderungen passen?
  function filterHerausforderungen() {
    if (!activeFilter) return [];
    return einleitung.herausforderungen.filter((h) =>
      h.kompetenzHilfe.some((kh) => {
        if (activeFilter.typ === "kompetenz") return kh.kompetenz === activeFilter.value;
        return false;
      })
    );
  }

  const gefilterteRessourcen = filterRessourcen();
  const gefilterteHerausforderungen = filterHerausforderungen();
  const hoveredThemen = hovered ? itemInThemen(hovered.typ, hovered.value) : [];

  return (
    <div className="mb-10">
      {/* Einleitungstext */}
      <div className="mb-6 rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-6">
        <p className="text-sm leading-relaxed text-indigo-900">
          {einleitung.situationstext}
        </p>
      </div>

      {/* Filter-Überschrift + Info */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-base font-semibold text-zinc-900">Erkunden</h2>
        <div className="relative">
          <button
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
            className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-200 text-[10px] font-bold text-zinc-600 hover:bg-zinc-300"
          >
            i
          </button>
          {showInfo && (
            <div className="absolute left-6 top-0 z-30 w-72 rounded-xl border border-zinc-200 bg-white p-4 shadow-lg text-xs text-zinc-600 leading-relaxed">
              <p className="font-semibold text-zinc-800 mb-1">Wie funktioniert das?</p>
              <p>
                Klicke auf einen Aspekt, Sprachmodus oder eine Kompetenz, um die
                passenden Inhalte zu sehen. Hovere über ein Element, um zu sehen
                in welchen Themen es vorkommt. Die Auswahl fliesst in deine Quittung ein.
              </p>
            </div>
          )}
        </div>
        {activeFilter && (
          <button
            onClick={() => setActiveFilter(null)}
            className="ml-auto text-xs text-zinc-400 hover:text-zinc-600"
          >
            Filter aufheben
          </button>
        )}
      </div>

      {/* Aspekte */}
      <div className="mb-3">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400">Aspekte</span>
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
                    isActive
                      ? `${aspekteFarben[a]} ring-2 ring-zinc-400 shadow-sm`
                      : `${aspekteFarben[a]} opacity-70 hover:opacity-100`
                  }`}
                >
                  {a}
                </button>
                {hovered?.typ === "aspekt" && hovered.value === a && (
                  <HoverTooltip items={hoveredThemen} currentThemaId={thema.id} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Sprachmodi */}
      <div className="mb-3">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400">Sprachmodi</span>
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
                    isActive
                      ? `${sprachmodiFarben[sm]} ring-2 ring-zinc-400 shadow-sm`
                      : `${sprachmodiFarben[sm]} opacity-70 hover:opacity-100`
                  }`}
                >
                  {sm}
                </button>
                {hovered?.typ === "sprachmodus" && hovered.value === sm && (
                  <HoverTooltip items={hoveredThemen} currentThemaId={thema.id} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Kompetenzen */}
      <div className="mb-6">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400">Schlüsselkompetenzen</span>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {thema.kompetenzen.map((k) => {
            const farbe = kompetenzFarben[k];
            const isActive = activeFilter?.typ === "kompetenz" && activeFilter.value === k;
            return (
              <div key={k} className="relative">
                <button
                  onClick={() => toggleFilter("kompetenz", k)}
                  onMouseEnter={() => setHovered({ typ: "kompetenz", value: k })}
                  onMouseLeave={() => setHovered(null)}
                  className={`rounded-full border-2 px-3 py-1 text-xs font-medium transition-all ${
                    isActive
                      ? `${farbe?.bg} ${farbe?.text} ${farbe?.border} ring-2 ${farbe?.ring} shadow-sm`
                      : `${farbe?.bg} ${farbe?.text} ${farbe?.border} opacity-70 hover:opacity-100`
                  }`}
                >
                  {k}
                </button>
                {hovered?.typ === "kompetenz" && hovered.value === k && (
                  <HoverTooltip items={hoveredThemen} currentThemaId={thema.id} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Gefilterter Inhalt — nur bei aktivem Filter */}
      {activeFilter && (
        <div className="rounded-2xl border-2 border-zinc-300 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-sm font-semibold text-zinc-900">
              {activeFilter.value}
            </span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-[10px] text-zinc-500">
              {activeFilter.typ === "aspekt" ? "Aspekt" : activeFilter.typ === "sprachmodus" ? "Sprachmodus" : "Kompetenz"}
            </span>
          </div>

          {/* Passende Ressourcen */}
          {gefilterteRessourcen.length > 0 && (
            <div className="mb-4">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 mb-2">
                Passende Ressourcen
              </h4>
              <div className="space-y-2">
                {gefilterteRessourcen.map((r) => (
                  <div
                    key={r.id}
                    className="rounded-xl border border-zinc-200 bg-zinc-50 p-3"
                  >
                    <span className="font-medium text-sm text-zinc-800">{r.titel}</span>
                    <p className="mt-1 text-xs text-zinc-500 italic">
                      &laquo;{r.zitat}&raquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Passende Herausforderungen (nur bei Kompetenz-Filter) */}
          {gefilterteHerausforderungen.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 mb-2">
                Wo diese Kompetenz hilft
              </h4>
              <div className="space-y-2">
                {gefilterteHerausforderungen.map((h) => {
                  const hilfe = h.kompetenzHilfe.find(
                    (kh) => kh.kompetenz === activeFilter.value
                  );
                  return (
                    <div
                      key={h.id}
                      className={`rounded-xl border-2 p-3 ${
                        kompetenzFarben[activeFilter.value]?.bg ?? "bg-zinc-50"
                      } ${kompetenzFarben[activeFilter.value]?.border ?? "border-zinc-200"}`}
                    >
                      <span className="font-medium text-sm text-zinc-800">{h.titel}</span>
                      <p className="mt-1 text-xs text-zinc-500">{h.beschreibung}</p>
                      {hilfe && (
                        <p className={`mt-2 text-xs ${kompetenzFarben[activeFilter.value]?.text ?? "text-zinc-600"}`}>
                          → {hilfe.wieHilft}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Themen-Übersicht für dieses Item */}
          <div className="mt-4 pt-4 border-t border-zinc-200">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 mb-2">
              In diesen Themen
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {itemInThemen(activeFilter.typ, activeFilter.value).map((t) => (
                <span
                  key={t.nummer}
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${
                    t.aktuell === thema.id
                      ? "bg-indigo-100 text-indigo-700"
                      : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  T{t.nummer}: {t.titel}
                  {t.aktuell === thema.id && " (hier)"}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {!activeFilter && (
        <p className="text-xs text-zinc-400 text-center py-4">
          Klicke auf einen Aspekt, Sprachmodus oder eine Kompetenz um Inhalte zu sehen.
        </p>
      )}
    </div>
  );
}

// Hover-Tooltip Komponente
function HoverTooltip({
  items,
  currentThemaId,
}: {
  items: { titel: string; nummer: number; aktuell: string }[];
  currentThemaId: string;
}) {
  return (
    <div className="absolute left-0 top-full mt-1 z-30 w-52 rounded-lg border border-zinc-200 bg-white p-3 shadow-lg text-xs">
      <p className="font-semibold text-zinc-700 mb-1.5">Kommt vor in:</p>
      <div className="space-y-0.5">
        {items.map((t) => (
          <div
            key={t.nummer}
            className={`flex items-center gap-1.5 rounded px-2 py-0.5 ${
              t.aktuell === currentThemaId
                ? "bg-indigo-50 text-indigo-700 font-medium"
                : "text-zinc-500"
            }`}
          >
            <span className="text-[10px] font-bold w-4">
              {String(t.nummer).padStart(2, "0")}
            </span>
            <span className="truncate">{t.titel}</span>
            {t.aktuell === currentThemaId && (
              <span className="ml-auto text-[9px] opacity-60">hier</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
