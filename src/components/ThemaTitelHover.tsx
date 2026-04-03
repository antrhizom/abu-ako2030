"use client";

import { useState } from "react";
import type { Thema } from "@/lib/themen";
import type { ThemaHandlungskompetenzen, Lerninhalt } from "@/lib/inhalte/lebensbezuege";

interface Props {
  thema: Thema;
  handlungskompetenzen: ThemaHandlungskompetenzen;
}

function LerninhaltZeile({ li }: { li: Lerninhalt }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 hover:border-indigo-300 hover:bg-indigo-50/30 transition-colors cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-baseline gap-2">
        <span className="text-xs font-bold text-indigo-500">{li.nr}</span>
        <p className="text-sm text-zinc-800 leading-snug">{li.text}</p>
      </div>

      {/* Hover-Panel: Gesellschaftliche Inhalte + Sprachmodi */}
      {hovered && (
        <div className="absolute left-0 top-full mt-1 z-30 w-full rounded-xl border border-zinc-200 bg-white p-4 shadow-xl">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-green-50 border border-green-200 p-2.5">
              <p className="text-[9px] font-bold uppercase text-green-500 mb-1">
                Gesellschaftliche Inhalte
              </p>
              {li.gesellschaftlicheInhalte.map((gi, i) => (
                <p key={i} className="text-xs text-green-800 leading-relaxed">{gi}</p>
              ))}
            </div>
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-2.5">
              <p className="text-[9px] font-bold uppercase text-amber-500 mb-1">
                Sprachmodi
              </p>
              {li.sprachmodi.map((sm, i) => (
                <p key={i} className="text-xs text-amber-800 leading-relaxed">{sm}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ThemaTitelHover({ thema, handlungskompetenzen }: Props) {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div className="mb-6">
      <span className="text-5xl font-light text-zinc-200">
        {String(thema.nummer).padStart(2, "0")}
      </span>

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

      {showPanel && (
        <div
          className="mt-4 rounded-2xl border-2 border-indigo-200 bg-white shadow-md overflow-hidden"
        >
          <div className="bg-indigo-600 px-6 py-3">
            <p className="text-sm font-semibold text-white">
              Lebensbezug und Kompetenzen — SLP ABU 2030
            </p>
          </div>

          <div className="p-6 space-y-6">
            {handlungskompetenzen.lebensbezuege.map((lb) => (
              <div key={lb.nr}>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-lg font-bold text-indigo-600">{lb.nr}</span>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 leading-snug">
                      &laquo;{lb.text}&raquo;
                    </p>
                    <span className="text-[10px] text-zinc-400">{lb.lektionen} Lektionen</span>
                  </div>
                </div>

                <div className="space-y-2 pl-2">
                  {lb.lerninhalte.map((li) => (
                    <LerninhaltZeile key={li.nr} li={li} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
