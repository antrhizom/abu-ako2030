export type ScaffoldingStufe = {
  titel: string;
  beschreibung: string;
  inhalte: string[];
};

export type Thema = {
  id: string;
  nummer: number;
  titel: string;
  leitfrage: string;
  aspekte: string[];
  kompetenzen: string[];
  grundressourcen: ScaffoldingStufe;
  scaffolding: ScaffoldingStufe;
  kompetenzaufgabe: ScaffoldingStufe;
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
    grundressourcen: {
      titel: "Grundressourcen",
      beschreibung: "Das Basiswissen, das du brauchst — Begriffe, Fakten, Zusammenhänge.",
      inhalte: [
        "Das Schweizer Berufsbildungssystem: duale Bildung, Lernorte, Abschlüsse",
        "Der Lehrvertrag: Aufbau, Inhalt, rechtliche Bedeutung",
        "Rechte und Pflichten von Lernenden (OR Art. 344–346a)",
        "Die Probezeit: Dauer, Kündigung, Verlängerung",
        "Lohnabrechnung: Brutto/Netto, Sozialabzüge (AHV, IV, EO, ALV)",
        "Anlaufstellen: Berufsbildungsamt, Berufsberatung, Gewerkschaften",
      ],
    },
    scaffolding: {
      titel: "Scaffolding",
      beschreibung: "Geleitete Übungen — du wendest das Wissen mit Hilfestellungen an.",
      inhalte: [
        "Lehrvertrag-Analyse: Lies einen Musterlehrvertrag und identifiziere die wichtigsten Punkte",
        "Fallbeispiel Probezeit: Was passiert, wenn Luca seinen Lehrvertrag in der Probezeit kündigen will?",
        "Lohnabrechnung lesen: Ordne die Abzüge den richtigen Sozialversicherungen zu",
        "Rechte-Pflichten-Matrix: Erstelle eine Übersicht deiner Rechte und Pflichten als Lernende/r",
        "Vergleich: Was unterscheidet den Lehrvertrag vom normalen Arbeitsvertrag?",
      ],
    },
    kompetenzaufgabe: {
      titel: "Kompetenzaufgabe",
      beschreibung: "Du löst eine offene, realitätsnahe Aufgabe selbstständig — Transfer!",
      inhalte: [
        "Auftrag: Eine Kollegin hat ihren Lehrvertrag erhalten und ist unsicher, ob alles korrekt ist. Berate sie schriftlich.",
        "Kriterien: Du nutzt die relevanten OR-Artikel, erklärst die Abzüge und weist auf die Probezeit hin.",
        "Format: Beratungsbrief oder kurzes Erklärvideo (2–3 Min.)",
      ],
    },
    fertig: true,
  },
  {
    id: "meinungen",
    nummer: 2,
    titel: "Meinungen bilden und mitgestalten",
    leitfrage: "Wie bilde ich mir eine fundierte Meinung — und wie bringe ich sie ein?",
    aspekte: ["Politik", "Ethik", "Kultur"],
    kompetenzen: ["Standpunkte begründen", "Quellen unterscheiden", "Partizipation"],
    grundressourcen: { titel: "Grundressourcen", beschreibung: "Kommt bald.", inhalte: [] },
    scaffolding: { titel: "Scaffolding", beschreibung: "Kommt bald.", inhalte: [] },
    kompetenzaufgabe: { titel: "Kompetenzaufgabe", beschreibung: "Kommt bald.", inhalte: [] },
    fertig: false,
  },
  {
    id: "konsum",
    nummer: 3,
    titel: "Bewusst konsumieren und handeln",
    leitfrage: "Welche Auswirkungen hat mein Konsum — und wie handle ich verantwortungsvoll?",
    aspekte: ["Wirtschaft", "Ökologie", "Ethik"],
    kompetenzen: ["Nachhaltigkeit", "Verständnis fördern", "Werthaltungen reflektieren"],
    grundressourcen: { titel: "Grundressourcen", beschreibung: "Kommt bald.", inhalte: [] },
    scaffolding: { titel: "Scaffolding", beschreibung: "Kommt bald.", inhalte: [] },
    kompetenzaufgabe: { titel: "Kompetenzaufgabe", beschreibung: "Kommt bald.", inhalte: [] },
    fertig: false,
  },
  {
    id: "verantwortung",
    nummer: 4,
    titel: "Verantwortung für mich und andere übernehmen",
    leitfrage: "Was heisst Verantwortung — für meine Gesundheit, mein Umfeld, meine Zukunft?",
    aspekte: ["Identität & Sozialisation", "Ethik", "Recht"],
    kompetenzen: ["Teamarbeit", "Werthaltungen reflektieren", "Anpassung"],
    grundressourcen: { titel: "Grundressourcen", beschreibung: "Kommt bald.", inhalte: [] },
    scaffolding: { titel: "Scaffolding", beschreibung: "Kommt bald.", inhalte: [] },
    kompetenzaufgabe: { titel: "Kompetenzaufgabe", beschreibung: "Kommt bald.", inhalte: [] },
    fertig: false,
  },
  {
    id: "staat",
    nummer: 5,
    titel: "Mich im Staat orientieren und Gesellschaft mitgestalten",
    leitfrage: "Wie funktioniert die Schweiz politisch — und wo kann ich mitbestimmen?",
    aspekte: ["Politik", "Recht", "Kultur"],
    kompetenzen: ["Partizipation", "Standpunkte begründen", "Quellen unterscheiden"],
    grundressourcen: { titel: "Grundressourcen", beschreibung: "Kommt bald.", inhalte: [] },
    scaffolding: { titel: "Scaffolding", beschreibung: "Kommt bald.", inhalte: [] },
    kompetenzaufgabe: { titel: "Kompetenzaufgabe", beschreibung: "Kommt bald.", inhalte: [] },
    fertig: false,
  },
  {
    id: "zuhause",
    nummer: 6,
    titel: "Mein eigenes Zuhause",
    leitfrage: "Was brauche ich, um selbstständig zu wohnen — finanziell, rechtlich, praktisch?",
    aspekte: ["Wirtschaft", "Recht", "Identität & Sozialisation"],
    kompetenzen: ["Lebensphasen planen", "Ziele setzen und anpassen", "Verständnis fördern"],
    grundressourcen: { titel: "Grundressourcen", beschreibung: "Kommt bald.", inhalte: [] },
    scaffolding: { titel: "Scaffolding", beschreibung: "Kommt bald.", inhalte: [] },
    kompetenzaufgabe: { titel: "Kompetenzaufgabe", beschreibung: "Kommt bald.", inhalte: [] },
    fertig: false,
  },
  {
    id: "zukunft",
    nummer: 7,
    titel: "Arbeiten in der Zukunft",
    leitfrage: "Wie verändert sich die Arbeitswelt — und wie bereite ich mich darauf vor?",
    aspekte: ["Technologie", "Wirtschaft", "Ökologie"],
    kompetenzen: ["Innovation und Problemlösung", "Anpassung", "Mehrdeutigkeit"],
    grundressourcen: { titel: "Grundressourcen", beschreibung: "Kommt bald.", inhalte: [] },
    scaffolding: { titel: "Scaffolding", beschreibung: "Kommt bald.", inhalte: [] },
    kompetenzaufgabe: { titel: "Kompetenzaufgabe", beschreibung: "Kommt bald.", inhalte: [] },
    fertig: false,
  },
];
