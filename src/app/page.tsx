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

      {/* Konzept */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-2xl font-bold text-zinc-900">
          Wie es funktioniert
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-500">
          Jedes Thema bietet dir Ressourcen als Wissensgrundlage, zeigt dir
          welche Sprachmodi du übst und baut Schlüsselkompetenzen auf.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white text-lg">
              📚
            </div>
            <h3 className="font-semibold text-zinc-900">Ressourcen</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Klar aufbereitete Fakten, Begriffe und Zusammenhänge —
              das Wissen, das du brauchst.
            </p>
          </div>
          <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white text-lg">
              💬
            </div>
            <h3 className="font-semibold text-zinc-900">Sprachmodi</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Lesen, Sprechen, Schreiben, Zusammenarbeiten — jedes Thema
              trainiert bestimmte Sprachkompetenzen.
            </p>
          </div>
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-white text-lg">
              🎯
            </div>
            <h3 className="font-semibold text-zinc-900">Kompetenzen</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Schlüsselkompetenzen wie Verständnis, Partizipation
              oder Problemlösung — sichtbar und nachvollziehbar.
            </p>
          </div>
        </div>
      </section>

      {/* Themen-Vorschau */}
      <section className="bg-white border-y border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-bold text-zinc-900">7 Themen</h2>
          <p className="mt-2 text-zinc-500">
            Vom Berufseinstieg bis zur Zukunft der Arbeit.
          </p>

          <div className="mt-10 space-y-4">
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-2xl bg-zinc-900 p-8 sm:p-12 text-white">
          <h2 className="text-xl font-bold">Über ABU AKO 2030</h2>
          <p className="mt-3 max-w-2xl text-zinc-300 text-sm leading-relaxed">
            Dieses Lehrmittel basiert auf dem Schullehrplan ABU 2030 für
            EFZ-Lernende (3-jährig, Kanton Zürich). Es integriert 9 Sprachmodi,
            12 Schlüsselkompetenzen und 8 Aspekte in ein schlankes Lernerlebnis.
          </p>
          <p className="mt-3 max-w-2xl text-zinc-400 text-sm leading-relaxed">
            Dein Lernfortschritt wird mit einem persönlichen Tiernamen-Code
            gespeichert — kein Login mit E-Mail nötig.
          </p>
        </div>
      </section>
    </div>
  );
}
