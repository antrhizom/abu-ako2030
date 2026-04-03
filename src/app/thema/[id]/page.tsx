import { notFound } from "next/navigation";
import Link from "next/link";
import { themen } from "@/lib/themen";
import ThemaLernraum from "@/components/ThemaLernraum";
import ThemaInfoPanel from "@/components/ThemaInfoPanel";
import HerausforderungenSection from "@/components/HerausforderungenSection";
import { ressourcen, quittungen } from "@/lib/inhalte/berufsleben";
import { herausforderungenBerufsleben } from "@/lib/inhalte/herausforderungen";

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

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <Link
        href="/themen"
        className="mb-8 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600"
      >
        &larr; Alle Themen
      </Link>

      {/* Header — schlank */}
      <div className="mb-6">
        <span className="text-5xl font-light text-zinc-200">
          {String(thema.nummer).padStart(2, "0")}
        </span>
        <h1 className="mt-2 text-2xl font-bold text-zinc-900">{thema.titel}</h1>
        <p className="mt-2 text-zinc-500">{thema.leitfrage}</p>
      </div>

      {/* Info-Button — öffnet Details als Panel */}
      <ThemaInfoPanel thema={thema} />

      {/* Herausforderungen & Kompetenzen */}
      <HerausforderungenSection herausforderungen={herausforderungenBerufsleben} />

      {/* Infografik-Platzhalter */}
      <div className="mb-8 rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-50 p-8 text-center">
        <div className="text-4xl mb-3">🖼️</div>
        <p className="text-sm font-medium text-zinc-500">
          Infografik — {thema.titel}
        </p>
        <p className="mt-1 text-xs text-zinc-400">
          Textdatei für NotebookLM:{" "}
          <a
            href={`/themen-texte/${thema.id}.txt`}
            className="underline hover:text-zinc-600"
            target="_blank"
          >
            {thema.id}.txt
          </a>
        </p>
      </div>

      <ThemaLernraum
        thema={thema}
        ressourcen={ressourcen}
        quittungen={quittungen}
      />
    </div>
  );
}
