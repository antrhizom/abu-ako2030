"use client";

import { useState } from "react";
import type { RessourcenBlockData } from "@/lib/inhalte/berufsleben";
import MiniAktivitaet from "./MiniAktivitaet";

interface Props {
  block: RessourcenBlockData;
  completed: boolean;
  completedSteps: Set<string>;
  onMarkRead: () => void;
  onMiniComplete: (score: number) => void;
}

export default function RessourcenBlock({
  block,
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
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-500 to-violet-500" />

      <div className="pl-6 pr-5 pt-5 pb-4">
        <div className="flex items-start gap-3">
          <span
            className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
              completed ? "bg-emerald-500 text-white" : "bg-zinc-100 text-zinc-400"
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

      {expanded && (
        <div className="border-t border-zinc-100 bg-zinc-50/50 pl-6 pr-5 py-5">
          <div className="mb-4">
            {block.inhalt.split("\n\n").map((p, i) => (
              <p key={i} className="mb-2 text-sm leading-relaxed text-zinc-600">{p}</p>
            ))}
          </div>

          {block.miniAktivitaet && (
            <MiniAktivitaet
              data={block.miniAktivitaet}
              completed={completedSteps.has(`mini-${block.id}`)}
              onComplete={onMiniComplete}
            />
          )}

        </div>
      )}
    </div>
  );
}
