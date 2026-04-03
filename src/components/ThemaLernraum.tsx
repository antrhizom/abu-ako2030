"use client";

import { useEffect, useState } from "react";
import { useBrowserId } from "./BrowserIdProvider";
import { trackStep, subscribeToCompletions } from "@/lib/tracking";
import {
  InhaltBlock as InhaltBlockType,
  Aktivitaet,
  QuittungDef,
} from "@/lib/inhalte/berufsleben";
import { Thema } from "@/lib/themen";
import InhaltBlock from "./InhaltBlock";
import MultipleChoiceQuiz from "./activities/MultipleChoiceQuiz";
import TrueFalseCards from "./activities/TrueFalseCards";
import DragDropMatch from "./activities/DragDropMatch";
import FillInBlank from "./activities/FillInBlank";
import KompetenzTracker from "./KompetenzTracker";
import Quittung from "./Quittung";

type Tab = "fachinhalte" | "aktivitaeten" | "quittungen" | "kompetenzen";

interface Props {
  thema: Thema;
  inhalte: InhaltBlockType[];
  aktivitaeten: Aktivitaet[];
  quittungen: QuittungDef[];
}

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "fachinhalte", label: "Fachinhalte", icon: "📚" },
  { id: "aktivitaeten", label: "Aktivitäten", icon: "🎮" },
  { id: "quittungen", label: "Quittungen", icon: "📋" },
  { id: "kompetenzen", label: "Kompetenzen", icon: "📊" },
];

export default function ThemaLernraum({
  thema,
  inhalte,
  aktivitaeten: akts,
  quittungen: quits,
}: Props) {
  const browserId = useBrowserId();
  const [activeTab, setActiveTab] = useState<Tab>("fachinhalte");
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!browserId) return;
    const unsub = subscribeToCompletions(browserId, thema.id, setCompletedIds);
    return unsub;
  }, [browserId, thema.id]);

  async function markContentRead(stepId: string) {
    if (!browserId || completedIds.has(stepId)) return;
    await trackStep(browserId, thema.id, stepId, "content", true);
  }

  async function markActivityComplete(stepId: string, score: number) {
    if (!browserId) return;
    const type = akts.find((a) => a.id === stepId)?.daten.typ === "multiple-choice" ||
      akts.find((a) => a.id === stepId)?.daten.typ === "true-false"
      ? "quiz"
      : "activity";
    await trackStep(browserId, thema.id, stepId, type, true, score);
  }

  const inhalteCount = inhalte.filter((i) => completedIds.has(i.id)).length;
  const aktsCount = akts.filter((a) => completedIds.has(a.id)).length;

  return (
    <div>
      {/* Tab navigation */}
      <div className="mb-8 flex gap-1 overflow-x-auto rounded-xl bg-zinc-100 p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? "bg-white text-zinc-900 shadow-sm"
                : "text-zinc-500 hover:text-zinc-700"
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
            {tab.id === "fachinhalte" && (
              <span className="rounded-full bg-emerald-100 px-1.5 text-[10px] text-emerald-700">
                {inhalteCount}/{inhalte.length}
              </span>
            )}
            {tab.id === "aktivitaeten" && (
              <span className="rounded-full bg-amber-100 px-1.5 text-[10px] text-amber-700">
                {aktsCount}/{akts.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Fachinhalte */}
      {activeTab === "fachinhalte" && (
        <div>
          <p className="mb-4 text-sm text-zinc-500">
            Lies die Fachinhalte durch und markiere sie als gelesen. Du kannst jeden
            Inhalt auch als PDF herunterladen.
          </p>

          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-emerald-600">
            Grundressourcen
          </h3>
          <div className="space-y-3 mb-8">
            {inhalte
              .filter((i) => i.stufe === "grundressourcen")
              .map((block) => (
                <InhaltBlock
                  key={block.id}
                  block={block}
                  completed={completedIds.has(block.id)}
                  onMarkRead={() => markContentRead(block.id)}
                />
              ))}
          </div>
        </div>
      )}

      {/* Aktivitäten */}
      {activeTab === "aktivitaeten" && (
        <div>
          <p className="mb-4 text-sm text-zinc-500">
            Teste dein Wissen mit interaktiven Übungen. Jede Aktivität wird automatisch
            gespeichert.
          </p>

          <div className="space-y-6">
            {akts.map((akt) => (
              <div key={akt.id}>
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
                      completedIds.has(akt.id)
                        ? "bg-emerald-500 text-white"
                        : "bg-zinc-200 text-zinc-400"
                    }`}
                  >
                    {completedIds.has(akt.id) ? "\u2713" : "\u00B7"}
                  </span>
                  <h3 className="font-medium text-zinc-900">{akt.titel}</h3>
                </div>
                <p className="mb-3 text-sm text-zinc-500">{akt.beschreibung}</p>

                {akt.daten.typ === "multiple-choice" && (
                  <MultipleChoiceQuiz
                    fragen={akt.daten.fragen}
                    completed={completedIds.has(akt.id)}
                    onComplete={(score) => markActivityComplete(akt.id, score)}
                  />
                )}
                {akt.daten.typ === "true-false" && (
                  <TrueFalseCards
                    karten={akt.daten.karten}
                    completed={completedIds.has(akt.id)}
                    onComplete={(score) => markActivityComplete(akt.id, score)}
                  />
                )}
                {akt.daten.typ === "drag-drop" && (
                  <DragDropMatch
                    paare={akt.daten.paare}
                    instruktion={akt.daten.instruktion}
                    completed={completedIds.has(akt.id)}
                    onComplete={(score) => markActivityComplete(akt.id, score)}
                  />
                )}
                {akt.daten.typ === "fill-blank" && (
                  <FillInBlank
                    abschnitt={akt.daten.abschnitt}
                    completed={completedIds.has(akt.id)}
                    onComplete={(score) => markActivityComplete(akt.id, score)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quittungen */}
      {activeTab === "quittungen" && (
        <div>
          <p className="mb-4 text-sm text-zinc-500">
            Lernschrittquittungen bestätigen, was du erarbeitet hast. Sie zeigen die
            Inhalte, Aktivitäten und Kompetenzbezüge. Freigeschaltete Quittungen
            kannst du drucken.
          </p>
          <div className="space-y-6">
            {quits.map((q) => (
              <Quittung key={q.id} quittung={q} completedIds={completedIds} />
            ))}
          </div>
        </div>
      )}

      {/* Kompetenzen */}
      {activeTab === "kompetenzen" && (
        <KompetenzTracker
          kompetenzen={thema.kompetenzen}
          aktivitaeten={akts}
          completedIds={completedIds}
        />
      )}
    </div>
  );
}
