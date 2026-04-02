import { themen } from "@/lib/themen";
import ThemenKarte from "@/components/ThemenKarte";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Allgemeinbildung — kompetenzorientiert
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-500">
          7 Themen. 3 Stufen pro Thema. Von Grundressourcen uber Scaffolding zur
          Kompetenzaufgabe. Schlank, klar, auf den Punkt.
        </p>

        {/* Legende Scaffolding */}
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-400" />
            <span className="text-zinc-600">Grundressourcen — Was muss ich wissen?</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-amber-400" />
            <span className="text-zinc-600">Scaffolding — Wie wende ich es an?</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-violet-400" />
            <span className="text-zinc-600">Kompetenzaufgabe — Kann ich es selbst?</span>
          </div>
        </div>
      </section>

      {/* Themen-Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {themen.map((t) => (
          <ThemenKarte key={t.id} thema={t} />
        ))}
      </div>

      {/* Info */}
      <section className="mt-16 rounded-2xl bg-white border border-zinc-200 p-8">
        <h2 className="text-lg font-semibold text-zinc-900">Aufbau</h2>
        <p className="mt-2 text-sm text-zinc-500 max-w-2xl">
          Jedes Thema folgt dem gleichen Dreischritt: Zuerst baust du{" "}
          <strong>Grundressourcen</strong> auf — das Wissen, die Begriffe, die
          Fakten. Dann ubst du mit <strong>Scaffolding</strong> — geleitete
          Aufgaben mit Hilfestellungen. Schliesslich zeigst du in einer offenen{" "}
          <strong>Kompetenzaufgabe</strong>, dass du das Gelernte selbststandig
          anwenden kannst.
        </p>
        <div className="mt-4 text-xs text-zinc-400">
          Basierend auf dem Schullehrplan ABU 2030 (EFZ 3-jahrig, Kanton Zurich).
          8 Aspekte: Ethik, Identitat & Sozialisation, Kultur, Okologie, Politik,
          Recht, Technologie, Wirtschaft.
        </div>
      </section>
    </div>
  );
}
