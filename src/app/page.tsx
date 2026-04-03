import Link from "next/link";
import { themen } from "@/lib/themen";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-indigo-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <p className="mb-4 text-sm font-medium tracking-wider text-indigo-300 uppercase">
            SLP ABU 2030 — EFZ 3-jährig
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Allgemeinbildung
            <br />
            <span className="text-indigo-400">neu denken</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-300 leading-relaxed">
            Von Grundwissen über geleitete Übungen zur eigenen Kompetenz.
            7 Themen, die dich durch die Allgemeinbildung begleiten — schlank,
            klar und auf den Punkt.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/themen"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              Alle Themen entdecken
            </Link>
            <Link
              href="/thema/berufsleben"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors backdrop-blur"
            >
              Direkt starten — Thema 1
            </Link>
          </div>
        </div>
      </section>

      {/* Scaffolding-Erklärung */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-2xl font-bold text-zinc-900">
          Drei Stufen zum Können
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-500">
          Jedes Thema folgt dem gleichen Dreischritt — vom Wissen zur Anwendung
          zur eigenständigen Kompetenz.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white text-lg">
              1
            </div>
            <h3 className="font-semibold text-zinc-900">Grundressourcen</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Das Basiswissen: Begriffe, Fakten, Zusammenhänge. Was muss ich wissen,
              um das Thema zu verstehen?
            </p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white text-lg">
              2
            </div>
            <h3 className="font-semibold text-zinc-900">Scaffolding</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Geleitete Übungen mit Hilfestellungen. Quizfragen, Zuordnungen,
              Lückentexte — du wendest das Wissen an.
            </p>
          </div>
          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-violet-500 text-white text-lg">
              3
            </div>
            <h3 className="font-semibold text-zinc-900">Kompetenzaufgabe</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Eine offene, realitätsnahe Aufgabe. Zeig, dass du das Gelernte
              selbstständig einsetzen kannst — Transfer!
            </p>
          </div>
        </div>
      </section>

      {/* Themen-Vorschau */}
      <section className="bg-white border-y border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-bold text-zinc-900">7 Themen</h2>
          <p className="mt-2 text-zinc-500">
            Dein Weg durch die Allgemeinbildung — vom Berufseinstieg bis zur Zukunft
            der Arbeit.
          </p>

          <div className="mt-10 relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-zinc-200 sm:left-1/2 sm:-translate-x-px hidden sm:block" />

            <div className="space-y-4">
              {themen.map((t) => (
                <Link
                  key={t.id}
                  href={t.fertig ? `/thema/${t.id}` : "/themen"}
                  className={`group flex items-center gap-4 rounded-xl border p-4 transition-all ${
                    t.fertig
                      ? "border-indigo-200 bg-indigo-50 hover:shadow-md hover:border-indigo-300"
                      : "border-zinc-200 bg-zinc-50 hover:bg-zinc-100"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      t.fertig
                        ? "bg-indigo-600 text-white"
                        : "bg-zinc-200 text-zinc-500"
                    }`}
                  >
                    {t.nummer}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="font-medium text-zinc-900">{t.titel}</span>
                    {t.fertig && (
                      <span className="ml-2 rounded bg-indigo-100 px-2 py-0.5 text-[10px] font-semibold text-indigo-600">
                        PROTOTYP
                      </span>
                    )}
                    <p className="mt-0.5 text-sm text-zinc-500 truncate">
                      {t.leitfrage}
                    </p>
                  </div>
                  <svg
                    className="h-5 w-5 text-zinc-300 group-hover:text-zinc-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/themen"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
            >
              Zur Themenübersicht →
            </Link>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-2xl bg-zinc-900 p-8 sm:p-12 text-white">
          <h2 className="text-xl font-bold">Über ABU AKO 2030</h2>
          <p className="mt-3 max-w-2xl text-zinc-300 text-sm leading-relaxed">
            Dieses Lehrmittel basiert auf dem Schullehrplan ABU 2030 für
            EFZ-Lernende (3-jährig, Kanton Zürich). Es ist kompetenzorientiert
            aufgebaut und deckt 8 Aspekte ab: Ethik, Identität & Sozialisation,
            Kultur, Ökologie, Politik, Recht, Technologie und Wirtschaft.
          </p>
          <p className="mt-3 max-w-2xl text-zinc-400 text-sm leading-relaxed">
            Dein Lernfortschritt wird anonym im Browser gespeichert — kein Login
            nötig. Du erhältst Lernschrittquittungen als Nachweis deiner Arbeit.
          </p>
        </div>
      </section>
    </div>
  );
}
