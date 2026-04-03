export interface KompetenzHilfe {
  kompetenz: string;
  wieHilft: string;
  ressourcenIds: string[];
}

export interface Herausforderung {
  id: string;
  titel: string;
  beschreibung: string;
  kompetenzHilfe: KompetenzHilfe[];
}

export interface ThemaEinleitung {
  themaId: string;
  situationstext: string;
  herausforderungen: Herausforderung[];
}

export const einleitungBerufsleben: ThemaEinleitung = {
  themaId: "berufsleben",
  situationstext:
    "Du hast gerade deine Lehrstelle angetreten oder stehst kurz davor. Alles ist neu: der Betrieb, die Schule, die Abläufe. Du hast einen Vertrag unterschrieben, bekommst zum ersten Mal Lohn und sollst gleichzeitig lernen und arbeiten. Das ist aufregend — aber auch überwältigend. Dieses Thema hilft dir, dich in dieser neuen Welt zurechtzufinden.",
  herausforderungen: [
    {
      id: "h-orientierung",
      titel: "Alles ist neu — wo finde ich mich zurecht?",
      beschreibung:
        "Betrieb, Schule, ÜK — drei Lernorte gleichzeitig. Das duale System ist am Anfang verwirrend.",
      kompetenzHilfe: [
        {
          kompetenz: "Verständnis fördern",
          wieHilft:
            "Du lernst die Struktur des Berufsbildungssystems kennen und verstehst, wie die drei Lernorte zusammenspielen.",
          ressourcenIds: ["gr-berufsbildung"],
        },
      ],
    },
    {
      id: "h-vertrag",
      titel: "Was habe ich eigentlich unterschrieben?",
      beschreibung:
        "Der Lehrvertrag enthält Fachbegriffe und Gesetzesverweise. Was bedeutet das alles — und was passiert bei Problemen?",
      kompetenzHilfe: [
        {
          kompetenz: "Verständnis fördern",
          wieHilft:
            "Du lernst die wichtigsten Punkte des Lehrvertrags zu lesen: Lohn, Probezeit, Pflichten, Kündigung.",
          ressourcenIds: ["gr-lehrvertrag", "gr-probezeit"],
        },
        {
          kompetenz: "Lebensphasen planen",
          wieHilft:
            "Du erkennst den Lehrvertrag als Schritt in deiner Lebensplanung und weisst, was die nächsten 3 Jahre bedeuten.",
          ressourcenIds: ["gr-lehrvertrag"],
        },
      ],
    },
    {
      id: "h-rechte",
      titel: "Was darf ich — und was muss ich?",
      beschreibung:
        "Überstunden, Schulbesuch, Ferienanspruch — die Grenze zwischen Rechten und Pflichten ist oft unklar.",
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
      titel: "Wohin geht mein Lohn?",
      beschreibung:
        "Die erste Lohnabrechnung ist verwirrend: Brutto, Netto, AHV, IV — warum bekommst du weniger als erwartet?",
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
            "Du erkennst, dass Sozialabzüge dich langfristig absichern, und planst dein Budget realistisch.",
          ressourcenIds: ["gr-lohnabrechnung"],
        },
      ],
    },
  ],
};
