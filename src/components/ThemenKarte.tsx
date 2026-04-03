import Link from "next/link";
import { Thema, aspekteFarben } from "@/lib/themen";
import { sprachmodiFarben } from "@/lib/sprachmodi";

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

      {/* Sprachmodi */}
      <div className="mt-3 flex flex-wrap gap-1">
        {thema.sprachmodi.map((sm) => (
          <span
            key={sm}
            className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${
              sprachmodiFarben[sm] ?? "bg-zinc-100 text-zinc-500 border-zinc-200"
            }`}
          >
            {sm}
          </span>
        ))}
      </div>

      {!thema.fertig && (
        <p className="mt-4 text-xs italic text-zinc-400">Kommt bald</p>
      )}
    </Link>
  );
}
