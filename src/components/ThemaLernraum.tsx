"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "./UserProvider";
import { trackStep, subscribeToCompletions, saveRating, subscribeToMyRatings, getCommunityRatings } from "@/lib/tracking";
import type { RessourcenBlockData, QuittungDef } from "@/lib/inhalte/berufsleben";
import type { ThemaEinleitung } from "@/lib/inhalte/herausforderungen";
import { handlungskompetenzenBerufsleben } from "@/lib/inhalte/lebensbezuege";
import type { Thema } from "@/lib/themen";
import ThemaExplorer from "./ThemaExplorer";
import RessourcenBlock from "./RessourcenBlock";
import SprachmodiTracker from "./SprachmodiTracker";
import Quittung from "./Quittung";

type Tab = "ressourcen" | "quittungen" | "fortschritt";

interface Props {
  thema: Thema;
  ressourcen: RessourcenBlockData[];
  quittungen: QuittungDef[];
  einleitung: ThemaEinleitung;
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
  einleitung,
}: Props) {
  const { userId, isLoggedIn } = useUser();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("ressourcen");
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [myRatings, setMyRatings] = useState<Map<string, number>>(new Map());
  const [communityRatings, setCommunityRatings] = useState<Map<string, { avg: number; count: number }>>(new Map());

  useEffect(() => {
    if (!userId) return;
    const unsub1 = subscribeToCompletions(userId, thema.id, setCompletedIds);
    const unsub2 = subscribeToMyRatings(userId, thema.id, setMyRatings);
    getCommunityRatings(thema.id).then(setCommunityRatings);
    return () => { unsub1(); unsub2(); };
  }, [userId, thema.id]);

  function requireLogin() {
    if (!isLoggedIn) {
      router.push("/login");
      return true;
    }
    return false;
  }

  async function markContentRead(stepId: string) {
    if (requireLogin()) return;
    if (!userId || completedIds.has(stepId)) return;
    await trackStep(userId, thema.id, stepId, "content", true);
  }

  async function handleRate(ressourceId: string, sterne: number) {
    if (requireLogin()) return;
    if (!userId) return;
    await saveRating(userId, thema.id, ressourceId, sterne);
    // Refresh community ratings
    getCommunityRatings(thema.id).then(setCommunityRatings);
  }

  async function markMiniComplete(blockId: string, score: number) {
    if (requireLogin()) return;
    if (!userId) return;
    await trackStep(userId, thema.id, `mini-${blockId}`, "quiz", true, score);
  }

  const erledigteRessourcen = ress.filter((r) => completedIds.has(r.id));
  const readCount = erledigteRessourcen.length;

  function printAlleRessourcen() {
    const w = window.open("", "_blank");
    if (!w) return;
    const css = "body{font-family:system-ui;max-width:700px;margin:2rem auto;padding:0 1rem;color:#333}h1{font-size:1.5rem;border-bottom:3px solid #4f46e5;padding-bottom:.5rem;color:#1e1b4b}h2{font-size:1.1rem;margin-top:2rem;color:#312e81;border-bottom:1px solid #e5e7eb;padding-bottom:.3rem}blockquote{font-style:italic;color:#555;margin:.5rem 0 1rem;padding-left:1rem;border-left:3px solid #c7d2fe}p{line-height:1.7;margin:.5rem 0}.footer{margin-top:3rem;color:#999;font-size:11px;border-top:1px solid #eee;padding-top:.5rem}";
    const body = ress.map((r) => {
      const paragraphs = r.inhalt.split("\n\n").map((p) => "<p>" + p + "</p>").join("");
      return "<h2>" + r.titel + "</h2><blockquote>" + r.zitat + "</blockquote>" + paragraphs;
    }).join("");
    w.document.write("<!DOCTYPE html><html><head><title>Thema " + thema.nummer + ": " + thema.titel + "</title><style>" + css + "</style></head><body><h1>Thema " + thema.nummer + ": " + thema.titel + "</h1><p style='color:#666'>" + thema.leitfrage + "</p>" + body + "<p class='footer'>ABU AKO 2030 — EFZ 3-jährig — SLP ABU 2030 Kanton Zürich</p></body></html>");
    w.document.close();
    w.print();
  }

  return (
    <div>
      {/* Explorer — Kompetenzarten-Filter mit Ressourcen */}
      <ThemaExplorer
        thema={thema}
        einleitung={einleitung}
        ressourcen={ress}
        completedIds={completedIds}
        myRatings={myRatings}
        communityRatings={communityRatings}
        onMarkRead={(id) => markContentRead(id)}
        onMiniComplete={(blockId, score) => markMiniComplete(blockId, score)}
        onRate={handleRate}
      />

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

      {/* Ressourcen — nur bereits erledigte */}
      {activeTab === "ressourcen" && (
        <div>
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-zinc-500">
              {erledigteRessourcen.length === 0
                ? "Klicke oben auf eine Kompetenzart, um Ressourcen durchzuspielen."
                : `${erledigteRessourcen.length} von ${ress.length} Ressourcen gelesen.`}
            </p>
            {erledigteRessourcen.length > 0 && (
              <button
                onClick={() => printAlleRessourcen()}
                className="rounded-lg border border-zinc-200 px-4 py-1.5 text-xs font-medium text-zinc-500 hover:bg-zinc-50 hover:text-zinc-700 transition-colors print:hidden"
              >
                Gelesene als PDF
              </button>
            )}
          </div>
          {erledigteRessourcen.length > 0 ? (
            <div className="space-y-4">
              {erledigteRessourcen.map((block) => (
                <RessourcenBlock
                  key={block.id}
                  block={block}
                  completed={true}
                  completedSteps={completedIds}
                  onMarkRead={() => {}}
                  onMiniComplete={(score) => markMiniComplete(block.id, score)}
                  meinRating={myRatings.get(block.id) ?? 0}
                  communityRating={communityRatings.get(block.id)}
                  onRate={(sterne) => handleRate(block.id, sterne)}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border-2 border-dashed border-zinc-200 bg-zinc-50 py-12 text-center">
              <p className="text-zinc-400 text-sm">Noch keine Ressourcen gelesen.</p>
              <p className="text-zinc-400 text-xs mt-1">Nutze das Kompetenz-Erkunden oben, um Ressourcen zu entdecken.</p>
            </div>
          )}
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
              <Quittung key={q.id} quittung={q} completedIds={completedIds} thema={thema} />
            ))}
          </div>
        </div>
      )}

      {/* Fortschritt */}
      {activeTab === "fortschritt" && (
        <div className="space-y-8">
          {/* Lerninhalte-Statistik */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 mb-1">Erledigte Ressourcen pro Lerninhalt</h3>
            <p className="text-xs text-zinc-500 mb-4">Welche Ressourcen hast du pro SLP-Lerninhalt schon bearbeitet?</p>
            <div className="space-y-4">
              {handlungskompetenzenBerufsleben.lebensbezuege.map((lb) => (
                <div key={lb.nr}>
                  <p className="text-xs font-semibold text-indigo-600 mb-2">{lb.nr} {lb.text}</p>
                  <div className="space-y-2 pl-3">
                    {lb.lerninhalte.map((li) => {
                      // Finde Ressourcen die zu diesem Lerninhalt passen (über Aspekte/Sprachmodi)
                      const passendeRess = ress.filter((r) => {
                        const aspektMatch = li.gesellschaftlicheInhalte.some((gi) =>
                          r.aspekte.some((a) => gi.toLowerCase().includes(a.toLowerCase()))
                        );
                        const sprachMatch = li.sprachmodi.some((sm) =>
                          r.sprachmodiAnschluesse.some((sa) => sm.toLowerCase().includes(sa.toLowerCase()))
                        );
                        return aspektMatch || sprachMatch;
                      });
                      const erledigte = passendeRess.filter((r) => completedIds.has(r.id));
                      return (
                        <div key={li.nr} className="rounded-lg border border-zinc-200 bg-white p-3">
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-[10px] font-bold text-indigo-400">{li.nr}</span>
                            <p className="text-xs text-zinc-700">{li.text}</p>
                          </div>
                          {passendeRess.length > 0 ? (
                            <div className="flex flex-wrap gap-1">
                              {passendeRess.map((r) => (
                                <span
                                  key={r.id}
                                  className={`rounded px-2 py-0.5 text-[10px] ${
                                    completedIds.has(r.id)
                                      ? "bg-emerald-100 text-emerald-700"
                                      : "bg-zinc-100 text-zinc-400"
                                  }`}
                                >
                                  {completedIds.has(r.id) && "✓ "}{r.titel}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <span className="text-[10px] text-zinc-400">Keine passenden Ressourcen</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sprachmodi + Kompetenzen */}
          <SprachmodiTracker
            themaSprachmodi={thema.sprachmodi}
            kompetenzen={thema.kompetenzen}
            ressourcen={ress}
            completedIds={completedIds}
          />
        </div>
      )}
    </div>
  );
}
