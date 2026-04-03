"use client";

import { useState } from "react";
import type { RessourcenBlockData } from "@/lib/inhalte/berufsleben";
import { aspekteFarben } from "@/lib/themen";
import { sprachmodiFarben, sprachmodiKurz } from "@/lib/sprachmodi";
import MiniAktivitaet from "./MiniAktivitaet";

interface Props {
  block: RessourcenBlockData;
  themaSprachmodi: string[];
  completed: boolean;
  completedSteps: Set<string>;
  onMarkRead: () => void;
  onMiniComplete: (score: number) => void;
}

export default function RessourcenBlock({
  block,
  themaSprachmodi,
  completed,
  completedSteps,
  onMarkRead,
  onMiniComplete,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const [wasExpanded, setWasExpanded] = useState(false);

  function toggleExpanded() {
    const next = !expanded;
    setExpanded(next);
    if (next) setWasExpanded(true);
  }

  return (
    <div className="relative rounded-2xl bg-white border border-zinc-200 overflow-hidden">
      {/* Farbiger linker Balken */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-500 to-violet-500" />

      {/* Hauptbereich — immer sichtbar */}
      <div className="pl-6 pr-5 pt-5 pb-4">
        <div className="flex items-start gap-3">
          <span
            className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
              completed
                ? "bg-emerald-500 text-white"
                : "bg-zinc-100 text-zinc-400"
            }`}
          >
            {completed ? "\u2713" : "\u00B7"}
          </span>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-zinc-900">{block.titel}</h3>
            <blockquote className="mt-2 text-lg leading-relaxed text-zinc-700 italic border-none pl-0">
              &laquo;{block.zitat}&raquo;
            </blockquote>
          </div>
        </div>

        {/* Aspekte-Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5 pl-9">
          {block.aspekte.map((a) => (
            <span
              key={a}
              className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                aspekteFarben[a] ?? "bg-zinc-100 text-zinc-600"
              }`}
            >
              {a}
            </span>
          ))}
          {block.kompetenzen.map((k) => (
            <span
              key={k}
              className="rounded-full border border-zinc-200 px-2 py-0.5 text-[10px] text-zinc-500"
            >
              {k}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-4 flex items-center gap-2 pl-9">
          <button
            onClick={toggleExpanded}
            className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-50 transition-colors"
          >
            {expanded ? "Weniger" : "Mehr erfahren"}
          </button>
          {!completed && wasExpanded && (
            <button
              onClick={onMarkRead}
              className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700 transition-colors"
            >
              Gelesen
            </button>
          )}
          <button
            onClick={() => {
              const w = window.open("", "_blank");
              if (w) {
                w.document.write(`<!DOCTYPE html><html><head><title>${block.titel}</title><style>body{font-family:system-ui;max-width:650px;margin:2rem auto;padding:0 1rem;color:#333}h1{font-size:1.3rem;border-bottom:2px solid #eee;padding-bottom:.5rem}blockquote{font-style:italic;color:#555;margin:1rem 0;padding-left:1rem;border-left:3px solid #ddd}p{line-height:1.7}</style></head><body><h1>${block.titel}</h1><blockquote>${block.zitat}</blockquote>${block.inhalt.split("\n\n").map((p) => `<p>${p}</p>`).join("")}<p style="margin-top:2rem;color:#999;font-size:11px">ABU AKO 2030 — Thema 1</p></body></html>`);
                w.document.close();
                w.print();
              }
            }}
            className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 transition-colors"
          >
            PDF
          </button>
        </div>
      </div>

      {/* Expanded: Detailtext + Sprachmodi + Aktivität + Anschlüsse */}
      {expanded && (
        <div className="border-t border-zinc-100 bg-zinc-50/50 pl-6 pr-5 py-5">
          {/* Detailtext */}
          <div className="mb-5">
            {block.inhalt.split("\n\n").map((p, i) => (
              <p key={i} className="mb-2 text-sm leading-relaxed text-zinc-600">
                {p}
              </p>
            ))}
          </div>

          {/* Sprachmodi für dieses Thema */}
          <div className="mb-5 rounded-lg border border-zinc-200 bg-white p-4">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-zinc-500 mb-2">
              Sprachmodi — hier übbar
            </h4>
            <div className="space-y-1.5">
              {themaSprachmodi.map((sm) => {
                const relevant = block.sprachmodiAnschluesse.includes(sm);
                return (
                  <div key={sm} className="flex items-center gap-2">
                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] ${
                        relevant
                          ? "bg-indigo-500 text-white"
                          : "bg-zinc-200 text-zinc-400"
                      }`}
                    >
                      {relevant ? "\u2713" : "\u00B7"}
                    </span>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${
                        relevant
                          ? sprachmodiFarben[sm] ?? "bg-zinc-100 text-zinc-600"
                          : "bg-zinc-50 text-zinc-400 border-zinc-200"
                      }`}
                    >
                      {sprachmodiKurz[sm] ?? sm}
                    </span>
                    {relevant && (
                      <span className="text-[10px] text-zinc-400">passend</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mini-Aktivität */}
          {block.miniAktivitaet && (
            <MiniAktivitaet
              data={block.miniAktivitaet}
              completed={completedSteps.has(`mini-${block.id}`)}
              onComplete={onMiniComplete}
            />
          )}

          {/* Anschlüsse in die Lernlandschaft */}
          {block.anschluesse.length > 0 && (
            <div className="mt-5 rounded-lg border border-dashed border-zinc-300 bg-white p-4">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-zinc-500 mb-2">
                Anschlüsse in die Lernlandschaft
              </h4>
              <ul className="space-y-1">
                {block.anschluesse.map((a, i) => (
                  <li key={i} className="flex gap-2 text-sm text-zinc-600">
                    <span className="text-indigo-400">→</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
