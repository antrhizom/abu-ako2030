import { ScaffoldingStufe as StufeType } from "@/lib/themen";

const icons: Record<string, string> = {
  Grundressourcen: "📚",
  Scaffolding: "🔧",
  Kompetenzaufgabe: "🎯",
};

const ringColors: Record<string, string> = {
  Grundressourcen: "border-emerald-400 bg-emerald-50",
  Scaffolding: "border-amber-400 bg-amber-50",
  Kompetenzaufgabe: "border-violet-400 bg-violet-50",
};

export default function ScaffoldingStufe({
  stufe,
  stufenName,
}: {
  stufe: StufeType;
  stufenName: string;
}) {
  const hasContent = stufe.inhalte.length > 0;

  return (
    <section
      className={`rounded-2xl border-2 p-6 ${
        ringColors[stufenName] ?? "border-zinc-200 bg-zinc-50"
      }`}
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="text-2xl">{icons[stufenName] ?? "📄"}</span>
        <div>
          <h3 className="text-lg font-semibold text-zinc-900">
            {stufe.titel}
          </h3>
          <p className="text-sm text-zinc-500">{stufe.beschreibung}</p>
        </div>
      </div>

      {hasContent ? (
        <ul className="mt-4 space-y-2">
          {stufe.inhalte.map((inhalt, i) => (
            <li
              key={i}
              className="flex gap-2 rounded-lg bg-white/70 px-4 py-3 text-sm text-zinc-700"
            >
              <span className="mt-0.5 text-zinc-400">
                {stufenName === "Kompetenzaufgabe" ? "→" : "•"}
              </span>
              <span>{inhalt}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm italic text-zinc-400">
          Inhalte werden noch erarbeitet.
        </p>
      )}
    </section>
  );
}
