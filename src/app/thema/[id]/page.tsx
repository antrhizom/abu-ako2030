import { notFound } from "next/navigation";
import Link from "next/link";
import { themen } from "@/lib/themen";
import ThemaExplorer from "@/components/ThemaExplorer";
import ThemaLernraum from "@/components/ThemaLernraum";
import { ressourcen, quittungen } from "@/lib/inhalte/berufsleben";
import { einleitungBerufsleben } from "@/lib/inhalte/herausforderungen";
import { lebensbezuegeBerufsleben } from "@/lib/inhalte/lebensbezuege";

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

      {/* Header */}
      <div className="mb-6">
        <span className="text-5xl font-light text-zinc-200">
          {String(thema.nummer).padStart(2, "0")}
        </span>
        <h1 className="mt-2 text-2xl font-bold text-zinc-900">{thema.titel}</h1>
        <p className="mt-2 text-zinc-500">{thema.leitfrage}</p>
      </div>

      {/* Explorer: zentrale Navigationsebene */}
      <ThemaExplorer
        thema={thema}
        einleitung={einleitungBerufsleben}
        ressourcen={ressourcen}
        lebensbezuege={lebensbezuegeBerufsleben}
      />

      {/* Lernraum: Ressourcen-Liste, Quittungen, Fortschritt */}
      <ThemaLernraum
        thema={thema}
        ressourcen={ressourcen}
        quittungen={quittungen}
      />
    </div>
  );
}
