"use client";

import { useState } from "react";
import type { Thema } from "@/lib/themen";
import { aspekteFarben } from "@/lib/themen";
import { sprachmodiFarben } from "@/lib/sprachmodi";

interface Props {
  thema: Thema;
}

export default function ThemaInfoPanel({ thema }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50 transition-colors"
      >
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        Thema-Info: Aspekte, Sprachmodi, Kompetenzen
      </button>

      {open && (
        <div className="mt-3 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          {/* Aspekte */}
          <div className="mb-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 mb-2">
              Aspekte
            </h3>
            <div className="flex flex-wrap gap-2">
              {thema.aspekte.map((a) => (
                <span
                  key={a}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    aspekteFarben[a] ?? "bg-zinc-100 text-zinc-600"
                  }`}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Sprachmodi — volle SLP-Bezeichnungen */}
          <div className="mb-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 mb-2">
              Verpflichtende Sprachmodi (SLP ABU 2030)
            </h3>
            <div className="space-y-1.5">
              {thema.sprachmodi.map((sm) => (
                <div
                  key={sm}
                  className={`inline-flex mr-2 mb-1 rounded-full border px-3 py-1 text-xs font-medium ${
                    sprachmodiFarben[sm] ?? "bg-zinc-100 text-zinc-600 border-zinc-200"
                  }`}
                >
                  {sm}
                </div>
              ))}
            </div>
          </div>

          {/* Schlüsselkompetenzen */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 mb-2">
              Schlüsselkompetenzen
            </h3>
            <div className="flex flex-wrap gap-2">
              {thema.kompetenzen.map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
