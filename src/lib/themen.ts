import type { Sprachmodus } from "./sprachmodi";

export type Thema = {
  id: string;
  nummer: number;
  titel: string;
  leitfrage: string;
  aspekte: string[];
  kompetenzen: string[];
  sprachmodi: Sprachmodus[];
  farbe: string; // SLP-Farbe als Tailwind-Klasse (bg + text)
  fertig: boolean;
};

// === FARBSYSTEM gemäss SLP Zürich ===
// Aspekte:              Grüntöne
// Sprachmodi:           Gelb/Amber-Töne  (→ siehe sprachmodi.ts)
// Schlüsselkompetenzen: Blautöne

// Schlüsselkompetenzen — Blautöne (hell → dunkel Abstufungen)
export const kompetenzFarben: Record<string, { bg: string; text: string; border: string; ring: string }> = {
  "Ziele setzen und anpassen":     { bg: "bg-blue-50",    text: "text-blue-800",    border: "border-blue-300",    ring: "ring-blue-300" },
  "Verständnis fördern":           { bg: "bg-blue-50",    text: "text-blue-700",    border: "border-blue-200",    ring: "ring-blue-200" },
  "Anpassung":                     { bg: "bg-sky-50",     text: "text-sky-800",     border: "border-sky-300",     ring: "ring-sky-300" },
  "Nachhaltigkeit":                { bg: "bg-sky-50",     text: "text-sky-700",     border: "border-sky-200",     ring: "ring-sky-200" },
  "Innovation und Problemlösung":  { bg: "bg-indigo-50",  text: "text-indigo-800",  border: "border-indigo-300",  ring: "ring-indigo-300" },
  "Quellen unterscheiden":         { bg: "bg-indigo-50",  text: "text-indigo-700",  border: "border-indigo-200",  ring: "ring-indigo-200" },
  "Standpunkte begründen":         { bg: "bg-blue-50",    text: "text-blue-900",    border: "border-blue-400",    ring: "ring-blue-400" },
  "Partizipation":                 { bg: "bg-sky-50",     text: "text-sky-900",     border: "border-sky-400",     ring: "ring-sky-400" },
  "Werthaltungen reflektieren":    { bg: "bg-indigo-50",  text: "text-indigo-900",  border: "border-indigo-400",  ring: "ring-indigo-400" },
  "Teamarbeit":                    { bg: "bg-blue-100",   text: "text-blue-800",    border: "border-blue-300",    ring: "ring-blue-300" },
  "Lebensphasen planen":           { bg: "bg-sky-100",    text: "text-sky-800",     border: "border-sky-300",     ring: "ring-sky-300" },
  "Mehrdeutigkeit":                { bg: "bg-indigo-100", text: "text-indigo-800",  border: "border-indigo-300",  ring: "ring-indigo-300" },
};

// Aspekte — Grüntöne (Abstufungen von emerald/green/teal)
export const aspekteFarben: Record<string, string> = {
  "Ethik":                       "bg-emerald-100 text-emerald-800",
  "Identität & Sozialisation":   "bg-green-100 text-green-800",
  "Kultur":                      "bg-teal-100 text-teal-800",
  "Ökologie":                    "bg-emerald-200 text-emerald-900",
  "Politik":                     "bg-green-200 text-green-900",
  "Recht":                       "bg-teal-200 text-teal-900",
  "Technologie":                 "bg-emerald-50 text-emerald-700",
  "Wirtschaft":                  "bg-green-50 text-green-700",
};

// Aspekte als Record mit border (für ThemaExplorer)
export const aspekteFarbenFull: Record<string, { bg: string; text: string; border: string }> = {
  "Ethik":                       { bg: "bg-emerald-100", text: "text-emerald-800", border: "border-emerald-300" },
  "Identität & Sozialisation":   { bg: "bg-green-100",  text: "text-green-800",  border: "border-green-300" },
  "Kultur":                      { bg: "bg-teal-100",   text: "text-teal-800",   border: "border-teal-300" },
  "Ökologie":                    { bg: "bg-emerald-200",text: "text-emerald-900",border: "border-emerald-400" },
  "Politik":                     { bg: "bg-green-200",  text: "text-green-900",  border: "border-green-400" },
  "Recht":                       { bg: "bg-teal-200",   text: "text-teal-900",   border: "border-teal-400" },
  "Technologie":                 { bg: "bg-emerald-50", text: "text-emerald-700",border: "border-emerald-200" },
  "Wirtschaft":                  { bg: "bg-green-50",   text: "text-green-700",  border: "border-green-200" },
};

// SLP-Farben pro Thema (aus agencyabu2030)
export const themenFarben: Record<number, { bg: string; text: string; border: string; nummer: string }> = {
  1: { bg: "bg-amber-50",   text: "text-amber-700",   border: "border-amber-300",   nummer: "text-amber-500" },
  2: { bg: "bg-sky-50",     text: "text-sky-700",     border: "border-sky-300",     nummer: "text-sky-500" },
  3: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-300", nummer: "text-emerald-500" },
  4: { bg: "bg-violet-50",  text: "text-violet-700",  border: "border-violet-300",  nummer: "text-violet-500" },
  5: { bg: "bg-rose-50",    text: "text-rose-700",    border: "border-rose-300",    nummer: "text-rose-500" },
  6: { bg: "bg-teal-50",    text: "text-teal-700",    border: "border-teal-300",    nummer: "text-teal-500" },
  7: { bg: "bg-fuchsia-50", text: "text-fuchsia-700", border: "border-fuchsia-300", nummer: "text-fuchsia-500" },
};

export const themen: Thema[] = [
  {
    id: "berufsleben",
    nummer: 1,
    titel: "Ins Berufsleben einsteigen",
    leitfrage: "Was bedeutet es, eine Berufslehre zu beginnen — und welche Rechte und Pflichten habe ich?",
    aspekte: ["Identität & Sozialisation", "Wirtschaft", "Recht", "Technologie"],
    kompetenzen: ["Ziele setzen und anpassen", "Verständnis fördern", "Lebensphasen planen", "Teamarbeit"],
    sprachmodi: [
      "Rezeption schriftlich und bildlich",
      "Interaktion und Kollaboration mündlich",
      "Interaktion und Kollaboration digital",
    ],
    farbe: "from-amber-400 to-orange-500",
    fertig: true,
  },
  {
    id: "meinungen",
    nummer: 2,
    titel: "Meinungen bilden und mitgestalten",
    leitfrage: "Wie bilde ich mir eine fundierte Meinung — und wie bringe ich sie ein?",
    aspekte: ["Politik", "Ethik", "Kultur", "Technologie"],
    kompetenzen: ["Quellen unterscheiden", "Werthaltungen reflektieren", "Standpunkte begründen", "Verständnis fördern", "Partizipation"],
    sprachmodi: [
      "Rezeption mündlich",
      "Rezeption audiovisuell",
      "Produktion mündlich",
      "Produktion schriftlich und bildlich",
    ],
    farbe: "from-sky-400 to-blue-500",
    fertig: true,
  },
  {
    id: "konsum",
    nummer: 3,
    titel: "Bewusst konsumieren und handeln",
    leitfrage: "Welche Auswirkungen hat mein Konsum — und wie handle ich verantwortungsvoll?",
    aspekte: ["Wirtschaft", "Ökologie", "Ethik", "Identität & Sozialisation", "Recht"],
    kompetenzen: ["Quellen unterscheiden", "Innovation und Problemlösung", "Werthaltungen reflektieren", "Nachhaltigkeit"],
    sprachmodi: [
      "Rezeption audiovisuell",
      "Produktion multimedial",
      "Interaktion und Kollaboration schriftlich",
      "Interaktion und Kollaboration mündlich",
    ],
    farbe: "from-emerald-400 to-green-500",
    fertig: true,
  },
  {
    id: "verantwortung",
    nummer: 4,
    titel: "Verantwortung für mich und andere übernehmen",
    leitfrage: "Was heisst Verantwortung — für meine Gesundheit, mein Umfeld, meine Zukunft?",
    aspekte: ["Identität & Sozialisation", "Ethik", "Kultur", "Recht"],
    kompetenzen: ["Werthaltungen reflektieren", "Verständnis fördern", "Teamarbeit"],
    sprachmodi: ["Produktion multimedial"],
    farbe: "from-violet-400 to-purple-500",
    fertig: false,
  },
  {
    id: "staat",
    nummer: 5,
    titel: "Mich im Staat orientieren und Gesellschaft mitgestalten",
    leitfrage: "Wie funktioniert die Schweiz politisch — und wo kann ich mitbestimmen?",
    aspekte: ["Ökologie", "Politik", "Recht", "Wirtschaft"],
    kompetenzen: ["Partizipation", "Ziele setzen und anpassen", "Nachhaltigkeit", "Standpunkte begründen"],
    sprachmodi: [
      "Rezeption mündlich",
      "Rezeption audiovisuell",
      "Rezeption schriftlich und bildlich",
      "Produktion mündlich",
      "Produktion schriftlich und bildlich",
      "Interaktion und Kollaboration mündlich",
      "Interaktion und Kollaboration schriftlich",
    ],
    farbe: "from-rose-400 to-red-500",
    fertig: false,
  },
  {
    id: "zuhause",
    nummer: 6,
    titel: "Mein eigenes Zuhause",
    leitfrage: "Was brauche ich, um selbstständig zu wohnen — finanziell, rechtlich, praktisch?",
    aspekte: ["Identität & Sozialisation", "Ökologie", "Recht", "Wirtschaft"],
    kompetenzen: ["Innovation und Problemlösung", "Teamarbeit", "Lebensphasen planen", "Nachhaltigkeit"],
    sprachmodi: [
      "Produktion multimedial",
      "Interaktion und Kollaboration digital",
      "Interaktion und Kollaboration schriftlich",
    ],
    farbe: "from-teal-400 to-cyan-500",
    fertig: false,
  },
  {
    id: "zukunft",
    nummer: 7,
    titel: "Arbeiten in der Zukunft",
    leitfrage: "Wie verändert sich die Arbeitswelt — und wie bereite ich mich darauf vor?",
    aspekte: ["Identität & Sozialisation", "Recht", "Technologie", "Wirtschaft"],
    kompetenzen: ["Anpassung", "Mehrdeutigkeit", "Lebensphasen planen", "Innovation und Problemlösung"],
    sprachmodi: [
      "Rezeption schriftlich und bildlich",
      "Produktion multimedial",
      "Interaktion und Kollaboration schriftlich",
    ],
    farbe: "from-fuchsia-400 to-pink-500",
    fertig: false,
  },
];
