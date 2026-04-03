import type { Sprachmodus } from "./sprachmodi";

export type Thema = {
  id: string;
  nummer: number;
  titel: string;
  leitfrage: string;
  aspekte: string[];
  kompetenzen: string[];
  sprachmodi: Sprachmodus[];
  fertig: boolean;
};

export const aspekteFarben: Record<string, string> = {
  "Ethik": "bg-violet-100 text-violet-800",
  "Identität & Sozialisation": "bg-amber-100 text-amber-800",
  "Kultur": "bg-rose-100 text-rose-800",
  "Ökologie": "bg-emerald-100 text-emerald-800",
  "Politik": "bg-blue-100 text-blue-800",
  "Recht": "bg-red-100 text-red-800",
  "Technologie": "bg-cyan-100 text-cyan-800",
  "Wirtschaft": "bg-orange-100 text-orange-800",
};

export const themen: Thema[] = [
  {
    id: "berufsleben",
    nummer: 1,
    titel: "Ins Berufsleben einsteigen",
    leitfrage: "Was bedeutet es, eine Berufslehre zu beginnen — und welche Rechte und Pflichten habe ich?",
    aspekte: ["Identität & Sozialisation", "Wirtschaft", "Recht"],
    kompetenzen: [
      "Ziele setzen und anpassen",
      "Verständnis fördern",
      "Lebensphasen planen",
    ],
    sprachmodi: [
      "Rezeption schriftlich und bildlich",
      "Rezeption mündlich",
      "Interaktion & Kollaboration digital",
    ],
    fertig: true,
  },
  {
    id: "meinungen",
    nummer: 2,
    titel: "Meinungen bilden und mitgestalten",
    leitfrage: "Wie bilde ich mir eine fundierte Meinung — und wie bringe ich sie ein?",
    aspekte: ["Politik", "Ethik", "Kultur"],
    kompetenzen: ["Standpunkte begründen", "Quellen unterscheiden", "Partizipation"],
    sprachmodi: [
      "Rezeption mündlich",
      "Produktion mündlich",
      "Produktion schriftlich und bildlich",
    ],
    fertig: false,
  },
  {
    id: "konsum",
    nummer: 3,
    titel: "Bewusst konsumieren und handeln",
    leitfrage: "Welche Auswirkungen hat mein Konsum — und wie handle ich verantwortungsvoll?",
    aspekte: ["Wirtschaft", "Ökologie", "Ethik"],
    kompetenzen: ["Nachhaltigkeit", "Verständnis fördern", "Werthaltungen reflektieren"],
    sprachmodi: [
      "Rezeption schriftlich und bildlich",
      "Produktion schriftlich und bildlich",
      "Interaktion & Kollaboration mündlich",
    ],
    fertig: false,
  },
  {
    id: "verantwortung",
    nummer: 4,
    titel: "Verantwortung für mich und andere übernehmen",
    leitfrage: "Was heisst Verantwortung — für meine Gesundheit, mein Umfeld, meine Zukunft?",
    aspekte: ["Identität & Sozialisation", "Ethik", "Recht"],
    kompetenzen: ["Teamarbeit", "Werthaltungen reflektieren", "Anpassung"],
    sprachmodi: [
      "Produktion mündlich",
      "Interaktion & Kollaboration mündlich",
      "Rezeption audiovisuell",
    ],
    fertig: false,
  },
  {
    id: "staat",
    nummer: 5,
    titel: "Mich im Staat orientieren und Gesellschaft mitgestalten",
    leitfrage: "Wie funktioniert die Schweiz politisch — und wo kann ich mitbestimmen?",
    aspekte: ["Politik", "Recht", "Kultur"],
    kompetenzen: ["Partizipation", "Standpunkte begründen", "Quellen unterscheiden"],
    sprachmodi: [
      "Rezeption schriftlich und bildlich",
      "Produktion schriftlich und bildlich",
      "Interaktion & Kollaboration digital",
    ],
    fertig: false,
  },
  {
    id: "zuhause",
    nummer: 6,
    titel: "Mein eigenes Zuhause",
    leitfrage: "Was brauche ich, um selbstständig zu wohnen — finanziell, rechtlich, praktisch?",
    aspekte: ["Wirtschaft", "Recht", "Identität & Sozialisation"],
    kompetenzen: ["Lebensphasen planen", "Ziele setzen und anpassen", "Verständnis fördern"],
    sprachmodi: [
      "Rezeption schriftlich und bildlich",
      "Produktion schriftlich und bildlich",
      "Interaktion & Kollaboration schriftlich",
    ],
    fertig: false,
  },
  {
    id: "zukunft",
    nummer: 7,
    titel: "Arbeiten in der Zukunft",
    leitfrage: "Wie verändert sich die Arbeitswelt — und wie bereite ich mich darauf vor?",
    aspekte: ["Technologie", "Wirtschaft", "Ökologie"],
    kompetenzen: ["Innovation und Problemlösung", "Anpassung", "Mehrdeutigkeit"],
    sprachmodi: [
      "Rezeption audiovisuell",
      "Produktion multimedial",
      "Interaktion & Kollaboration digital",
    ],
    fertig: false,
  },
];
