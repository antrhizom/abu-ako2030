// Herausforderungen aus Sicht der Lernenden + wie Kompetenzen helfen

export interface Herausforderung {
  id: string;
  titel: string;
  beschreibung: string; // Aus Sicht der Lernenden: Wo stehe ich? Wo stosse ich an?
  kompetenzHilfe: {
    kompetenz: string;
    wieHilft: string;
    ressourcenIds: string[]; // Welche Ressourcen helfen hier
  }[];
}

export const herausforderungenBerufsleben: Herausforderung[] = [
  {
    id: "h-orientierung",
    titel: "Ich bin neu und weiss nicht, wie das System funktioniert",
    beschreibung:
      "Du startest in eine völlig neue Welt: Betrieb, Schule, ÜK — alles gleichzeitig. Das duale System ist komplex und am Anfang überwältigend.",
    kompetenzHilfe: [
      {
        kompetenz: "Verständnis fördern",
        wieHilft:
          "Du lernst die Struktur des Berufsbildungssystems kennen — die drei Lernorte, die Abschlüsse, den Aufbau deiner Lehre.",
        ressourcenIds: ["gr-berufsbildung"],
      },
    ],
  },
  {
    id: "h-vertrag",
    titel: "Ich habe einen Vertrag unterschrieben, den ich nicht ganz verstehe",
    beschreibung:
      "Der Lehrvertrag enthält Fachbegriffe und Gesetzesverweise. Was genau habe ich da eigentlich unterschrieben? Was passiert, wenn etwas schiefgeht?",
    kompetenzHilfe: [
      {
        kompetenz: "Verständnis fördern",
        wieHilft:
          "Du lernst die wichtigsten Punkte des Lehrvertrags zu lesen und zu verstehen — Lohn, Probezeit, Pflichten.",
        ressourcenIds: ["gr-lehrvertrag", "gr-probezeit"],
      },
      {
        kompetenz: "Lebensphasen planen",
        wieHilft:
          "Du erkennst, dass der Lehrvertrag ein Schritt in deiner Lebensplanung ist und lernst, was er für deine nächsten 3 Jahre bedeutet.",
        ressourcenIds: ["gr-lehrvertrag"],
      },
    ],
  },
  {
    id: "h-rechte",
    titel: "Ich bin unsicher, was ich darf und was ich muss",
    beschreibung:
      "Darfst du Nein sagen zu Überstunden? Musst du wirklich jeden Tag in die Schule? Was, wenn der Chef unfair ist? Die Grenze zwischen Rechten und Pflichten ist unklar.",
    kompetenzHilfe: [
      {
        kompetenz: "Ziele setzen und anpassen",
        wieHilft:
          "Du lernst, deine Situation einzuschätzen und gezielt Hilfe zu suchen, wenn deine Rechte verletzt werden.",
        ressourcenIds: ["gr-rechte-pflichten", "gr-anlaufstellen"],
      },
    ],
  },
  {
    id: "h-geld",
    titel: "Ich bekomme zum ersten Mal Lohn — aber wohin geht das Geld?",
    beschreibung:
      "Die erste Lohnabrechnung ist verwirrend: Brutto, Netto, AHV, IV — warum bekommst du weniger als vereinbart? Und wofür zahlst du eigentlich?",
    kompetenzHilfe: [
      {
        kompetenz: "Verständnis fördern",
        wieHilft:
          "Du verstehst die Sozialversicherungen und kannst eine Lohnabrechnung lesen und erklären.",
        ressourcenIds: ["gr-lohnabrechnung"],
      },
      {
        kompetenz: "Lebensphasen planen",
        wieHilft:
          "Du erkennst, dass Sozialabzüge dich langfristig absichern und planst dein Budget realistisch.",
        ressourcenIds: ["gr-lohnabrechnung"],
      },
    ],
  },
];
