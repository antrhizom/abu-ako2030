import Link from "next/link";
import { themen, themenFarben } from "@/lib/themen";

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
            Ressourcen lesen, Sprachmodi üben, Kompetenzen aufbauen.
            7 Themen begleiten dich durch die Allgemeinbildung — schlank,
            klar und auf den Punkt.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/login"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              Einsteigen
            </Link>
            <Link
              href="/themen"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors backdrop-blur"
            >
              Themen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* AKO-Teaser */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border-2 border-indigo-200 bg-white p-8 sm:p-10">
          <div className="flex items-start gap-4 sm:gap-6">
            <span className="text-4xl shrink-0">🔤</span>
            <div>
              <h2 className="text-xl font-bold text-zinc-900">
                Was heisst <span className="text-indigo-600">AKO</span>?
              </h2>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                <strong>AKO</strong> steht für <em>Allgemeinbildung Kompetenzorientiert</em>.
                Der Begriff kommt aus der japanischen Sprache und bedeutet
                «Licht» oder «Leuchten» — ein Bild dafür, dass Bildung
                Zusammenhänge sichtbar macht und den Weg erhellt.
              </p>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                Dieses Lehrmittel macht den Schullehrplan ABU 2030 für
                EFZ-Lernende zugänglich. Es zeigt dir, <strong>worüber</strong> du
                lernst (Aspekte), <strong>wie</strong> du arbeitest (Sprachmodi) und
                <strong> wozu</strong> du lernst (Schlüsselkompetenzen) — alles an
                einem Ort, schlank und interaktiv.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wie navigierst du? */}
      <section className="bg-white border-y border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">So funktioniert es</h2>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border-2 border-zinc-200 p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold">1</span>
                <h3 className="font-semibold text-zinc-900 text-sm">Thema wählen</h3>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Wähle eines der 7 Themen. Hovere über den Titel, um die
                offiziellen Handlungskompetenzen und Lerninhalte zu sehen.
              </p>
            </div>
            <div className="rounded-xl border-2 border-zinc-200 p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold">2</span>
                <h3 className="font-semibold text-zinc-900 text-sm">Kompetenzarten erkunden</h3>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Klicke auf einen Aspekt, Sprachmodus oder eine Schlüsselkompetenz.
                Du siehst sofort die passenden Ressourcen und kannst sie durcharbeiten.
              </p>
            </div>
            <div className="rounded-xl border-2 border-zinc-200 p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold">3</span>
                <h3 className="font-semibold text-zinc-900 text-sm">Fortschritt verfolgen</h3>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Dein Fortschritt wird gespeichert. Bewerte Ressourcen nach
                Lebenswelt-Relevanz, sieh wie andere bewertet haben und
                hol dir deine Lernschrittquittung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Drei Kompetenzarten */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-xl font-bold text-zinc-900 mb-8">
          Drei Kompetenzarten
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-4 w-4 rounded-full bg-green-400" />
              <h3 className="font-semibold text-green-900">Aspekte</h3>
              <span className="text-[10px] text-green-600">Grüntöne</span>
            </div>
            <p className="text-sm text-green-800">
              <em>Worüber</em> du lernst — 8 inhaltliche Perspektiven wie
              Ethik, Recht, Wirtschaft oder Technologie.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-4 w-4 rounded-full bg-amber-400" />
              <h3 className="font-semibold text-amber-900">Sprachmodi</h3>
              <span className="text-[10px] text-amber-600">Gelbtöne</span>
            </div>
            <p className="text-sm text-amber-800">
              <em>Wie</em> du arbeitest — 9 sprachliche Handlungsformen
              wie Lesen, Sprechen, Schreiben und Zusammenarbeiten.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-4 w-4 rounded-full bg-blue-400" />
              <h3 className="font-semibold text-blue-900">Schlüsselkompetenzen</h3>
              <span className="text-[10px] text-blue-600">Blautöne</span>
            </div>
            <p className="text-sm text-blue-800">
              <em>Wozu</em> du lernst — 12 übergreifende Fähigkeiten, die
              spiralförmig über die Lehrjahre aufgebaut werden.
            </p>
          </div>
        </div>
      </section>

      {/* Themen-Vorschau */}
      <section className="bg-white border-y border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-xl font-bold text-zinc-900">7 Themen</h2>
          <p className="mt-2 text-zinc-500 text-sm">
            Vom Berufseinstieg bis zur Zukunft der Arbeit.
          </p>

          <div className="mt-8 space-y-3">
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
                      ? `${themenFarben[t.nummer]?.bg} ${themenFarben[t.nummer]?.text} ${themenFarben[t.nummer]?.border} border-2`
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl bg-zinc-900 p-8 sm:p-10 text-white">
          <h2 className="text-lg font-bold">Über ABU AKO 2030</h2>
          <p className="mt-3 max-w-2xl text-zinc-300 text-sm leading-relaxed">
            Dieses Lehrmittel basiert auf dem Schullehrplan ABU 2030 für
            EFZ-Lernende (3-jährig, Kanton Zürich). Dein Fortschritt wird
            mit einem persönlichen Tiernamen-Code gespeichert — kein
            Login mit E-Mail nötig.
          </p>
        </div>
      </section>
    </div>
  );
}
