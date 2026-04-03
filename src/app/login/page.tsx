"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { generateTiername, isValidTiername } from "@/lib/tiernamen";
import { registerUser, lookupUser } from "@/lib/tracking";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"choose" | "new" | "existing">("choose");
  const [generatedName, setGeneratedName] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleNew() {
    const name = generateTiername();
    setGeneratedName(name);
    setMode("new");
  }

  async function handleConfirmNew() {
    setLoading(true);
    await registerUser(generatedName);
    window.dispatchEvent(new Event("ako-login"));
    router.push("/");
  }

  async function handleLogin() {
    setError("");
    const code = inputCode.trim();
    if (!isValidTiername(code)) {
      setError("Format: Tiername-0000 (z.B. Luchs-7284)");
      return;
    }
    setLoading(true);
    const found = await lookupUser(code);
    if (found) {
      window.dispatchEvent(new Event("ako-login"));
      router.push("/");
    } else {
      setError("Dieser Zugang wurde nicht gefunden. Prüfe die Schreibweise.");
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-md px-6 py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-zinc-900">Willkommen</h1>
        <p className="mt-2 text-zinc-500">
          Dein Lernzugang für die Allgemeinbildung
        </p>
      </div>

      {mode === "choose" && (
        <div className="space-y-4">
          <button
            onClick={handleNew}
            className="w-full rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6 text-left hover:border-indigo-400 transition-colors"
          >
            <span className="text-lg font-semibold text-indigo-900">
              Neuer Zugang
            </span>
            <p className="mt-1 text-sm text-indigo-600">
              Du bekommst einen zufälligen Tiernamen als deinen persönlichen Code.
            </p>
          </button>

          <button
            onClick={() => setMode("existing")}
            className="w-full rounded-xl border-2 border-zinc-200 bg-white p-6 text-left hover:border-zinc-400 transition-colors"
          >
            <span className="text-lg font-semibold text-zinc-900">
              Bestehender Zugang
            </span>
            <p className="mt-1 text-sm text-zinc-500">
              Gib deinen Tiernamen-Code ein, um weiterzumachen.
            </p>
          </button>
        </div>
      )}

      {mode === "new" && (
        <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-8 text-center">
          <p className="text-sm text-indigo-600 mb-2">Dein Zugang</p>
          <div className="text-3xl font-bold text-indigo-900 mb-4">
            {generatedName}
          </div>
          <p className="text-sm text-zinc-600 mb-6">
            Merke dir diesen Namen — damit kannst du jederzeit weitermachen.
          </p>
          <button
            onClick={handleConfirmNew}
            disabled={loading}
            className="rounded-xl bg-indigo-600 px-8 py-3 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 transition-colors"
          >
            {loading ? "Wird erstellt..." : "Los geht's"}
          </button>
          <button
            onClick={() => setMode("choose")}
            className="mt-3 block w-full text-sm text-zinc-400 hover:text-zinc-600"
          >
            Zurück
          </button>
        </div>
      )}

      {mode === "existing" && (
        <div className="rounded-2xl border-2 border-zinc-200 bg-white p-8">
          <label className="block text-sm font-medium text-zinc-700 mb-2">
            Dein Tiername-Code
          </label>
          <input
            type="text"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            placeholder="z.B. Luchs-7284"
            className="w-full rounded-lg border-2 border-zinc-200 px-4 py-3 text-lg font-medium text-center focus:border-indigo-400 focus:outline-none"
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          />
          {error && (
            <p className="mt-2 text-sm text-red-500">{error}</p>
          )}
          <button
            onClick={handleLogin}
            disabled={loading || !inputCode.trim()}
            className="mt-4 w-full rounded-xl bg-zinc-900 px-8 py-3 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-50 transition-colors"
          >
            {loading ? "Wird gesucht..." : "Weiter"}
          </button>
          <button
            onClick={() => { setMode("choose"); setError(""); }}
            className="mt-3 block w-full text-sm text-zinc-400 hover:text-zinc-600"
          >
            Zurück
          </button>
        </div>
      )}
    </div>
  );
}
