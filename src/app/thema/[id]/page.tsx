import { notFound } from "next/navigation";
import Link from "next/link";
import { themen, themenFarben } from "@/lib/themen";
import ThemaPfadeBackground from "@/components/ThemaPfadeBackground";
import ThemaTitelHover from "@/components/ThemaTitelHover";
import ThemaLernraum from "@/components/ThemaLernraum";
import { getThemaDaten } from "@/lib/inhalte";

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

  const daten = getThemaDaten(id);
  if (!daten) return notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <ThemaPfadeBackground />
      <Link
        href="/themen"
        className="mb-8 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600"
      >
        &larr; Alle Themen
      </Link>

      <ThemaTitelHover
        thema={thema}
        handlungskompetenzen={daten.handlungskompetenzen}
      />

      <ThemaLernraum
        thema={thema}
        ressourcen={daten.ressourcen}
        quittungen={daten.quittungen}
        einleitung={daten.einleitung}
      />
    </div>
  );
}
