import { notFound } from "next/navigation";
import Link from "next/link";
import { themen, aspekteFarben } from "@/lib/themen";
import ScaffoldingStufe from "@/components/ScaffoldingStufe";
import ThemaLernraum from "@/components/ThemaLernraum";
import {
  inhalte,
  aktivitaeten,
  quittungen,
} from "@/lib/inhalte/berufsleben";

export function generateStaticParams() {
  return themen.filter((t) => t.fertig).map((t) => ({ id: t.id }));
}

export default async function ThemaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const thema = themen.find((t) => t.id === id);

  if (!thema || !thema.fertig) return notFound();

  const isPrototyp = id === "berufsleben";

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <Link
        href="/themen"
        className="mb-8 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600"
      >
        &larr; Alle Themen
      </Link>

      {/* Header */}
      <div className="mb-10">
        <span className="text-5xl font-light text-zinc-200">
          {String(thema.nummer).padStart(2, "0")}
        </span>
        <h1 className="mt-2 text-2xl font-bold text-zinc-900">
          {thema.titel}
          {isPrototyp && (
            <span className="ml-3 rounded bg-indigo-100 px-2 py-0.5 text-xs font-semibold text-indigo-600 align-middle">
              PROTOTYP
            </span>
          )}
        </h1>
        <p className="mt-2 text-zinc-500">{thema.leitfrage}</p>

        <div className="mt-4 flex flex-wrap gap-2">
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

        <div className="mt-3 flex flex-wrap gap-2">
          {thema.kompetenzen.map((k) => (
            <span
              key={k}
              className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-500"
            >
              {k}
            </span>
          ))}
        </div>
      </div>

      {/* Content — Prototyp vs. Fallback */}
      {isPrototyp ? (
        <ThemaLernraum
          thema={thema}
          inhalte={inhalte}
          aktivitaeten={aktivitaeten}
          quittungen={quittungen}
        />
      ) : (
        <div className="space-y-8">
          <ScaffoldingStufe
            stufe={thema.grundressourcen}
            stufenName="Grundressourcen"
          />
          <ScaffoldingStufe
            stufe={thema.scaffolding}
            stufenName="Scaffolding"
          />
          <ScaffoldingStufe
            stufe={thema.kompetenzaufgabe}
            stufenName="Kompetenzaufgabe"
          />
        </div>
      )}
    </div>
  );
}
