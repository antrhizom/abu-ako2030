import { notFound } from "next/navigation";
import Link from "next/link";
import { themen, aspekteFarben } from "@/lib/themen";
import { sprachmodiKurz, sprachmodiFarben } from "@/lib/sprachmodi";
import ThemaLernraum from "@/components/ThemaLernraum";
import { ressourcen, quittungen } from "@/lib/inhalte/berufsleben";

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
      <div className="mb-10">
        <span className="text-5xl font-light text-zinc-200">
          {String(thema.nummer).padStart(2, "0")}
        </span>
        <h1 className="mt-2 text-2xl font-bold text-zinc-900">{thema.titel}</h1>
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

        {/* Sprachmodi */}
        <div className="mt-3 flex flex-wrap gap-2">
          {thema.sprachmodi.map((sm) => (
            <span
              key={sm}
              className={`rounded-full border px-3 py-1 text-xs font-medium ${
                sprachmodiFarben[sm] ?? "bg-zinc-100 text-zinc-600 border-zinc-200"
              }`}
            >
              {sprachmodiKurz[sm] ?? sm}
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

      <ThemaLernraum
        thema={thema}
        ressourcen={ressourcen}
        quittungen={quittungen}
      />
    </div>
  );
}
