// ============================================================
// Thema 1: Ins Berufsleben einsteigen — Ressourcen & Anschlüsse
// ============================================================

export interface MiniAktivitaet {
  frage: string;
  optionen: string[];
  korrekt: number;
  erklaerung: string;
}

export interface RessourcenBlockData {
  id: string;
  titel: string;
  zitat: string;
  inhalt: string;
  aspekte: string[];
  sprachmodiAnschluesse: string[];
  kompetenzen: string[];
  miniAktivitaet?: MiniAktivitaet;
  anschluesse: string[];
}

export interface QuittungDef {
  id: string;
  titel: string;
  beschreibung: string;
  erforderlicheSchritte: string[];
  kompetenzen: string[];
}

// --- Ressourcen ---

export const ressourcen: RessourcenBlockData[] = [
  {
    id: "gr-berufsbildung",
    titel: "Das Schweizer Berufsbildungssystem",
    zitat: "Die Schweiz hat ein weltweit einzigartiges System: Du lernst gleichzeitig im Betrieb, in der Schule und in überbetrieblichen Kursen.",
    inhalt: `Der Lehrbetrieb ist dein Arbeitsplatz. Hier lernst du die praktischen Fähigkeiten deines Berufs — 3–4 Tage pro Woche.

Die Berufsfachschule besuchst du 1–2 Tage pro Woche: Fachkunde, Allgemeinbildung (ABU) und Sport.

Überbetriebliche Kurse (ÜK) ergänzen die Ausbildung mit speziellen Techniken.

Am Ende steht das Qualifikationsverfahren (QV). Bei Bestehen erhältst du das EFZ (3–4 Jahre) oder EBA (2 Jahre).`,
    aspekte: ["Wirtschaft", "Identität & Sozialisation"],
    sprachmodiAnschluesse: ["Rezeption schriftlich und bildlich"],
    kompetenzen: ["Verständnis fördern"],
    miniAktivitaet: {
      frage: "An wie vielen Lernorten findet die duale Berufsbildung statt?",
      optionen: ["1 Lernort", "2 Lernorte", "3 Lernorte", "4 Lernorte"],
      korrekt: 2,
      erklaerung: "Betrieb, Berufsfachschule und überbetriebliche Kurse — 3 Lernorte.",
    },
    anschluesse: [
      "Recherchiere auf berufsberatung.ch, welche Lernorte dein Beruf hat",
      "Interviewe eine Person im Betrieb über ihren Ausbildungsweg",
    ],
  },
  {
    id: "gr-lehrvertrag",
    titel: "Der Lehrvertrag",
    zitat: "Der Lehrvertrag ist dein wichtigstes Dokument — er regelt alles zwischen dir, dem Betrieb und dem Kanton.",
    inhalt: `Der Lehrvertrag muss schriftlich sein (OR Art. 344–346a). Unter 18? Dann unterschreiben auch deine Eltern.

Was steht drin: Beruf, Dauer, Lohn pro Lehrjahr, Arbeitszeit, Ferientage (mind. 5 Wochen bis 20), Berufsbildner/in, Probezeit.

Der Vertrag wird vom kantonalen Berufsbildungsamt genehmigt — erst dann ist er gültig. Er schützt dich: Der Betrieb hat die Pflicht, dich fachgerecht auszubilden.`,
    aspekte: ["Recht", "Wirtschaft"],
    sprachmodiAnschluesse: ["Rezeption schriftlich und bildlich", "Interaktion & Kollaboration digital"],
    kompetenzen: ["Verständnis fördern", "Lebensphasen planen"],
    miniAktivitaet: {
      frage: "Muss der Lehrvertrag schriftlich sein?",
      optionen: ["Ja, immer", "Nein, mündlich reicht", "Nur bei Minderjährigen"],
      korrekt: 0,
      erklaerung: "Ja — der Lehrvertrag muss immer schriftlich abgeschlossen werden (OR Art. 344a).",
    },
    anschluesse: [
      "Lies deinen eigenen Lehrvertrag und markiere die 5 wichtigsten Punkte",
      "Vergleiche deinen Vertrag digital mit einem Mustervertrag des SBFI",
    ],
  },
  {
    id: "gr-rechte-pflichten",
    titel: "Rechte und Pflichten",
    zitat: "Du hast das Recht auf eine gute Ausbildung — und die Pflicht, sorgfältig zu lernen und zu arbeiten.",
    inhalt: `Deine Rechte: Fachgerechte Ausbildung, pünktlicher Lohn, Schulbesuch als Arbeitszeit, mind. 5 Wochen Ferien (bis 20), keine gefährlichen Arbeiten ohne Aufsicht.

Deine Pflichten: Sorgfältig arbeiten, regelmässig und pünktlich zur Schule, Betriebsordnung einhalten, Geschäftsgeheimnisse wahren, Lerndokumentation führen.

Bei Problemen: Berufsberatung oder Berufsbildungsamt kontaktieren.`,
    aspekte: ["Recht", "Ethik"],
    sprachmodiAnschluesse: ["Rezeption schriftlich und bildlich", "Rezeption mündlich"],
    kompetenzen: ["Verständnis fördern", "Ziele setzen und anpassen"],
    miniAktivitaet: {
      frage: "Zählt der Berufsfachschulunterricht als Arbeitszeit?",
      optionen: ["Ja, immer", "Nein, nie", "Nur nachmittags"],
      korrekt: 0,
      erklaerung: "Ja — Berufsfachschulunterricht gilt immer als Arbeitszeit.",
    },
    anschluesse: [
      "Diskutiere mit einer Kollegin: Welche Rechte sind euch am wichtigsten?",
      "Höre einen Podcast über Lernende und ihre Erfahrungen im Betrieb",
    ],
  },
  {
    id: "gr-probezeit",
    titel: "Die Probezeit",
    zitat: "Die Probezeit ist für beide Seiten da — du und der Betrieb prüft, ob es passt.",
    inhalt: `Dauer: mindestens 1, höchstens 3 Monate. Meistens 3 Monate.

Kündigung in der Probezeit: 7 Tage Frist, von beiden Seiten möglich.

Verlängerung: Einmal auf max. 6 Monate, mit Zustimmung der Behörde.

Nach der Probezeit kann der Vertrag nur noch aus wichtigen Gründen aufgelöst werden.`,
    aspekte: ["Recht"],
    sprachmodiAnschluesse: ["Rezeption schriftlich und bildlich"],
    kompetenzen: ["Verständnis fördern"],
    miniAktivitaet: {
      frage: "Wie lange ist die Kündigungsfrist in der Probezeit?",
      optionen: ["Sofort", "7 Tage", "1 Monat"],
      korrekt: 1,
      erklaerung: "In der Probezeit beträgt die Kündigungsfrist 7 Tage.",
    },
    anschluesse: [
      "Schreibe auf, was du in deiner Probezeit gut machen möchtest",
    ],
  },
  {
    id: "gr-lohnabrechnung",
    titel: "Die Lohnabrechnung verstehen",
    zitat: "Bruttolohn ist nicht gleich Nettolohn — die Differenz sind deine Sozialversicherungsbeiträge.",
    inhalt: `Vom Bruttolohn werden abgezogen: AHV (5.3% — Altersrente), IV (0.7% — bei Arbeitsunfähigkeit), EO (0.25% — Militär/Zivildienst), ALV (1.1% — bei Arbeitslosigkeit).

Dein Arbeitgeber zahlt die gleichen Beträge nochmals — du zahlst also nur die Hälfte.

Beispiel: Bruttolohn 800 CHF → Abzüge ca. 59 CHF → Nettolohn ca. 741 CHF.`,
    aspekte: ["Wirtschaft"],
    sprachmodiAnschluesse: ["Rezeption schriftlich und bildlich", "Interaktion & Kollaboration digital"],
    kompetenzen: ["Verständnis fördern", "Lebensphasen planen"],
    miniAktivitaet: {
      frage: "Wofür steht AHV?",
      optionen: ["Arbeitslosenversicherung", "Alters- und Hinterlassenenversicherung", "Allgemeine Hilfsversicherung"],
      korrekt: 1,
      erklaerung: "AHV = Alters- und Hinterlassenenversicherung. Sie sichert deine Rente im Alter.",
    },
    anschluesse: [
      "Schau dir deine eigene Lohnabrechnung an und ordne die Abzüge zu",
      "Berechne online mit einem Lohnrechner deinen Nettolohn",
    ],
  },
  {
    id: "gr-anlaufstellen",
    titel: "Anlaufstellen bei Problemen",
    zitat: "Es ist keine Schwäche, Hilfe zu suchen — es ist klug.",
    inhalt: `Im Betrieb: Zuerst Berufsbildner/in, dann HR oder Geschäftsleitung.

In der Schule: ABU-Lehrperson, Schulleitung oder Schulsozialarbeit.

Extern: Berufsbildungsamt (vermittelt bei Konflikten), BIZ (Neuorientierung), Gewerkschaften (kostenlose Rechtsberatung für Lernende).`,
    aspekte: ["Identität & Sozialisation"],
    sprachmodiAnschluesse: ["Rezeption mündlich", "Interaktion & Kollaboration digital"],
    kompetenzen: ["Ziele setzen und anpassen"],
    anschluesse: [
      "Finde heraus, wer an deiner Schule Ansprechperson für Lernende ist",
      "Besuche die Website deines kantonalen Berufsbildungsamts",
    ],
  },
];

// --- Quittungen ---

export const quittungen: QuittungDef[] = [
  {
    id: "quittung-ressourcen",
    titel: "Ressourcen erarbeitet",
    beschreibung:
      "Du hast alle Grundlagen zum Berufseinstieg gelesen und die Verständnisfragen beantwortet.",
    erforderlicheSchritte: ressourcen.map((r) => r.id),
    kompetenzen: ["Verständnis fördern", "Lebensphasen planen", "Ziele setzen und anpassen"],
  },
];
