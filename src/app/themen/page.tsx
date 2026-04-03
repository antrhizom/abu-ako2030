import { themen } from "@/lib/themen";
import ThemenKarte from "@/components/ThemenKarte";

export default function ThemenPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <section className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Alle Themen
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-500">
          7 Themen mit Ressourcen, Sprachmodi und Kompetenzen. Jedes Thema
          zeigt dir, welche Sprachkompetenzen du dort übst.
        </p>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {themen.map((t) => (
          <ThemenKarte key={t.id} thema={t} />
        ))}
      </div>
    </div>
  );
}
