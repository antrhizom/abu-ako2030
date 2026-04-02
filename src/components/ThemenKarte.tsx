import Link from "next/link";
import { Thema, aspekteFarben } from "@/lib/themen";

export default function ThemenKarte({ thema }: { thema: Thema }) {
  return (
    <Link
      href={thema.fertig ? `/thema/${thema.id}` : "#"}
      className={`group block rounded-2xl border p-6 transition-all ${
        thema.fertig
          ? "border-zinc-200 bg-white hover:border-zinc-400 hover:shadow-lg"
          : "border-dashed border-zinc-300 bg-zinc-50 opacity-60 cursor-default"
      }`}
    >
      <div className="mb-3 flex items-baseline gap-3">
        <span className="text-3xl font-light text-zinc-300">
          {String(thema.nummer).padStart(2, "0")}
        </span>
        <h2 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-700">
          {thema.titel}
        </h2>
      </div>

      <p className="mb-4 text-sm text-zinc-500">{thema.leitfrage}</p>

      <div className="flex flex-wrap gap-1.5">
        {thema.aspekte.map((a) => (
          <span
            key={a}
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
              aspekteFarben[a] ?? "bg-zinc-100 text-zinc-600"
            }`}
          >
            {a}
          </span>
        ))}
      </div>

      {!thema.fertig && (
        <p className="mt-4 text-xs italic text-zinc-400">Kommt bald</p>
      )}

      {thema.fertig && (
        <div className="mt-4 flex gap-1">
          {["Grundressourcen", "Scaffolding", "Kompetenzaufgabe"].map((s) => (
            <span
              key={s}
              className="rounded bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-500"
            >
              {s}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
