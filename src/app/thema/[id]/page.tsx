import { notFound } from "next/navigation";
import Link from "next/link";
import { themen } from "@/lib/themen";
import ThemaExplorer from "@/components/ThemaExplorer";
import ThemaTitelHover from "@/components/ThemaTitelHover";
import ThemaLernraum from "@/components/ThemaLernraum";
import { ressourcen, quittungen } from "@/lib/inhalte/berufsleben";
import { einleitungBerufsleben } from "@/lib/inhalte/herausforderungen";
import { handlungskompetenzenBerufsleben } from "@/lib/inhalte/lebensbezuege";

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

      {/* Header mit SLP-Handlungskompetenzen */}
      <ThemaTitelHover
        thema={thema}
        handlungskompetenzen={handlungskompetenzenBerufsleben}
      />

      {/* Explorer: Kompetenzarten-Filter */}
      <ThemaExplorer
        thema={thema}
        einleitung={einleitungBerufsleben}
        ressourcen={ressourcen}
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
