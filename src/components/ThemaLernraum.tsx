"use client";

import { useEffect, useState } from "react";
import { useUser } from "./UserProvider";
import { trackStep, subscribeToCompletions } from "@/lib/tracking";
import type { RessourcenBlockData, QuittungDef } from "@/lib/inhalte/berufsleben";
import type { Thema } from "@/lib/themen";
import RessourcenBlock from "./RessourcenBlock";
import SprachmodiTracker from "./SprachmodiTracker";
import Quittung from "./Quittung";

type Tab = "ressourcen" | "quittungen" | "fortschritt";

interface Props {
  thema: Thema;
  ressourcen: RessourcenBlockData[];
  quittungen: QuittungDef[];
}

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "ressourcen", label: "Ressourcen", icon: "📚" },
  { id: "quittungen", label: "Quittungen", icon: "📋" },
  { id: "fortschritt", label: "Fortschritt", icon: "📊" },
];

export default function ThemaLernraum({
  thema,
  ressourcen: ress,
  quittungen: quits,
}: Props) {
  const { userId } = useUser();
  const [activeTab, setActiveTab] = useState<Tab>("ressourcen");
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!userId) return;
    const unsub = subscribeToCompletions(userId, thema.id, setCompletedIds);
    return unsub;
  }, [userId, thema.id]);

  async function markContentRead(stepId: string) {
    if (!userId || completedIds.has(stepId)) return;
    await trackStep(userId, thema.id, stepId, "content", true);
  }

  async function markMiniComplete(blockId: string, score: number) {
    if (!userId) return;
    await trackStep(userId, thema.id, `mini-${blockId}`, "quiz", true, score);
  }

  const readCount = ress.filter((r) => completedIds.has(r.id)).length;

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
            {tab.id === "ressourcen" && (
              <span className="rounded-full bg-emerald-100 px-1.5 text-[10px] text-emerald-700">
                {readCount}/{ress.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Ressourcen */}
      {activeTab === "ressourcen" && (
        <div>
          <p className="mb-6 text-sm text-zinc-500">
            Lies die Ressourcen durch, beantworte die Verständnisfragen und entdecke
            die Anschlüsse in die Lernlandschaft.
          </p>
          <div className="space-y-4">
            {ress.map((block) => (
              <RessourcenBlock
                key={block.id}
                block={block}
                themaSprachmodi={thema.sprachmodi}
                completed={completedIds.has(block.id)}
                completedSteps={completedIds}
                onMarkRead={() => markContentRead(block.id)}
                onMiniComplete={(score) => markMiniComplete(block.id, score)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Quittungen */}
      {activeTab === "quittungen" && (
        <div>
          <p className="mb-6 text-sm text-zinc-500">
            Lernschrittquittungen bestätigen, was du erarbeitet hast. Freigeschaltete
            Quittungen kannst du drucken.
          </p>
          <div className="space-y-6">
            {quits.map((q) => (
              <Quittung key={q.id} quittung={q} completedIds={completedIds} />
            ))}
          </div>
        </div>
      )}

      {/* Fortschritt */}
      {activeTab === "fortschritt" && (
        <SprachmodiTracker
          themaSprachmodi={thema.sprachmodi}
          kompetenzen={thema.kompetenzen}
          ressourcen={ress}
          completedIds={completedIds}
        />
      )}
    </div>
  );
}
