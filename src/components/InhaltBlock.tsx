"use client";

import { useState } from "react";
import { InhaltBlock as InhaltBlockType } from "@/lib/inhalte/berufsleben";
import { aspekteFarben } from "@/lib/themen";

interface Props {
  block: InhaltBlockType;
  completed: boolean;
  onMarkRead: () => void;
}

export default function InhaltBlock({ block, completed, onMarkRead }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-3 px-5 py-4 text-left hover:bg-zinc-50 transition-colors"
      >
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
            completed
              ? "bg-emerald-500 text-white"
              : "bg-zinc-100 text-zinc-400"
          }`}
        >
          {completed ? "\u2713" : "\u00B7"}
        </span>
        <span className="flex-1 font-medium text-zinc-900">{block.titel}</span>
        <div className="flex gap-1.5">
          {block.aspekte.map((a) => (
            <span
              key={a}
              className={`hidden sm:inline rounded-full px-2 py-0.5 text-[10px] font-medium ${
                aspekteFarben[a] ?? "bg-zinc-100 text-zinc-600"
              }`}
            >
              {a}
            </span>
          ))}
        </div>
        <svg
          className={`h-4 w-4 text-zinc-400 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="border-t border-zinc-100 px-5 py-5">
          <div className="prose prose-sm prose-zinc max-w-none">
            {block.inhalt.split("\n\n").map((p, i) => (
              <p key={i} className="mb-3 text-sm leading-relaxed text-zinc-700">
                {p}
              </p>
            ))}
          </div>

          {block.schluesselwoerter.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {block.schluesselwoerter.map((w) => (
                <span
                  key={w}
                  className="rounded bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-500"
                >
                  {w}
                </span>
              ))}
            </div>
          )}

          <div className="mt-5 flex items-center gap-3">
            {!completed && (
              <button
                onClick={onMarkRead}
                className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
              >
                Gelesen
              </button>
            )}
            <button
              onClick={() => {
                const printWindow = window.open("", "_blank");
                if (printWindow) {
                  printWindow.document.write(`<!DOCTYPE html><html><head><title>${block.titel}</title><style>body{font-family:system-ui,sans-serif;max-width:700px;margin:2rem auto;padding:0 1rem;color:#333}h1{font-size:1.4rem;border-bottom:2px solid #eee;padding-bottom:.5rem}p{line-height:1.7;margin:1rem 0}.kw{display:inline-block;background:#f4f4f5;padding:2px 8px;border-radius:4px;font-size:12px;margin:2px}</style></head><body><h1>${block.titel}</h1>${block.inhalt.split("\n\n").map((p) => `<p>${p}</p>`).join("")}<div style="margin-top:1.5rem">${block.schluesselwoerter.map((w) => `<span class="kw">${w}</span>`).join(" ")}</div><p style="margin-top:2rem;color:#999;font-size:12px">ABU AKO 2030 — Thema 1: Ins Berufsleben einsteigen</p></body></html>`);
                  printWindow.document.close();
                  printWindow.print();
                }
              }}
              className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50 transition-colors"
            >
              Als PDF drucken
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
