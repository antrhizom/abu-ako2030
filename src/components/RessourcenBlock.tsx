"use client";

import { useState } from "react";
import type { RessourcenBlockData } from "@/lib/inhalte/berufsleben";
import { themenFarben } from "@/lib/themen";
import MiniAktivitaet from "./MiniAktivitaet";
import SterneRating from "./SterneRating";

interface Props {
  block: RessourcenBlockData;
  themaNummer?: number;
  completed: boolean;
  completedSteps: Set<string>;
  onMarkRead: () => void;
  onMiniComplete: (score: number) => void;
  meinRating?: number;
  communityRating?: { avg: number; count: number };
  onRate?: (sterne: number) => void;
}

export default function RessourcenBlock({
  block,
  themaNummer,
  completed,
  completedSteps,
  onMarkRead,
  onMiniComplete,
  meinRating = 0,
  communityRating,
  onRate,
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
          {/* Mini-Sterne neben dem Titel wenn schon bewertet */}
          {meinRating > 0 && (
            <div className="flex shrink-0 gap-0.5 mt-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className={`text-xs ${s <= meinRating ? "text-amber-400" : "text-zinc-200"}`}>★</span>
              ))}
            </div>
          )}
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
        </div>
      </div>

      {expanded && (
        <div className={`border-t border-zinc-100 pl-6 pr-5 py-6 ${
          themaNummer ? themenFarben[themaNummer]?.bg ?? "bg-zinc-50/50" : "bg-zinc-50/50"
        }`}>
          <div className="mb-5 space-y-4">
            {block.inhalt.split("\n\n").map((p, i) => {
              // Erkennt "Schlüsselwort: Erklärung" oder "Schlüsselwort — Erklärung"
              const colonMatch = p.match(/^([^:—]{2,40})([:—])\s*(.+)$/);
              if (colonMatch) {
                return (
                  <div key={i} className="flex gap-3">
                    <span className="text-indigo-400 mt-1 shrink-0">◆</span>
                    <p className="text-base leading-relaxed text-zinc-700">
                      <strong className="text-zinc-900">{colonMatch[1].trim()}{colonMatch[2]}</strong>{" "}
                      {colonMatch[3].trim()}
                    </p>
                  </div>
                );
              }
              return (
                <div key={i} className="flex gap-3">
                  <span className="text-zinc-300 mt-1 shrink-0">●</span>
                  <p className="text-base leading-relaxed text-zinc-700">{p}</p>
                </div>
              );
            })}
          </div>

          {block.miniAktivitaet && (
            <MiniAktivitaet
              data={block.miniAktivitaet}
              completed={completedSteps.has(`mini-${block.id}`)}
              onComplete={onMiniComplete}
            />
          )}

          {/* Sterne-Rating */}
          {completed && onRate && (
            <SterneRating
              meinRating={meinRating}
              communityAvg={communityRating?.avg ?? 0}
              communityCount={communityRating?.count ?? 0}
              onRate={onRate}
            />
          )}
        </div>
      )}
    </div>
  );
}
