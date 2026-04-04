// SLP ABU 2030 — Thema 1: Offizielle Handlungskompetenzen
// Struktur: Lebensbezug (1.1, 1.2) → Lerninhalte (1.1.1, 1.1.2 etc.)

export interface Lerninhalt {
  nr: string;           // z.B. "1.1.1"
  kurz: string;         // Kurzbezeichnung (1-3 Wörter)
  text: string;         // Ich-kann-Formulierung
  gesellschaftlicheInhalte: string[];
  sprachmodi: string[];
}

export interface Lebensbezug {
  nr: string;           // z.B. "1.1"
  kurz: string;         // Kurzbezeichnung
  text: string;         // Ich-Formulierung
  lektionen: number;
  lerninhalte: Lerninhalt[];
}

export interface ThemaHandlungskompetenzen {
  themaId: string;
  lebensbezuege: Lebensbezug[];
}

export const handlungskompetenzenBerufsleben: ThemaHandlungskompetenzen = {
  themaId: "berufsleben",
  lebensbezuege: [
    {
      nr: "1.1",
      kurz: "Ausbildung & Kommunikation",
      text: "Ich finde mich in meiner Ausbildung zurecht und kommuniziere auf konstruktive Art und Weise.",
      lektionen: 15,
      lerninhalte: [
        {
          nr: "1.1.1",
          kurz: "Informationen nutzen",
          text: "Ich kann Informationen zu meiner Ausbildung aus analogen und digitalen Quellen entnehmen, gezielt nutzen und in Konfliktsituationen angemessen kommunizieren.",
          gesellschaftlicheInhalte: [
            "Recht: Lehrvertragsrecht, sozial akzeptable Lösungen",
            "Ethik: Perspektivenübernahme, gegenseitiger Respekt in Konflikten",
            "Identität und Sozialisation: Rolle in der Gesellschaft und in der Arbeitswelt",
          ],
          sprachmodi: [
            "Rezeption schriftlich und bildlich: Zentrale Aussagen aus Texten entnehmen mithilfe von Markierhilfe und Lesestrategien",
            "Interaktion und Kollaboration mündlich: Aktiv zuhören und nach Rollen-Konventionen an Gesprächen teilnehmen",
          ],
        },
        {
          nr: "1.1.2",
          kurz: "Digitale Werkzeuge",
          text: "Ich kann die ausbildungsrelevanten IT-Infrastrukturen und digitalen Werkzeuge einrichten und sicher nutzen.",
          gesellschaftlicheInhalte: [
            "Technologische und digitale Transformation: Schutz- und Sicherheitsaspekte, arbeitserleichternde Nutzung",
          ],
          sprachmodi: [
            "Rezeption schriftlich und bildlich: Zentrale Aussagen aus Texten entnehmen mithilfe von Markierhilfe und Lesestrategien sowie Orientierungs- und Suchmöglichkeiten auf Websites",
          ],
        },
        {
          nr: "1.1.3",
          kurz: "Kommunikationstools",
          text: "Ich kann Kommunikationstechnologien verantwortungsvoll und zielgruppengerecht einsetzen.",
          gesellschaftlicheInhalte: [
            "Technologische und digitale Transformation: Situative und zweckmässige Nutzung digitaler Kommunikationsregeln der verschiedenen Tools",
          ],
          sprachmodi: [
            "Interaktion und Kollaboration schriftlich: nach Konventionen kommunizieren",
          ],
        },
      ],
    },
    {
      nr: "1.2",
      kurz: "Effektiv lernen",
      text: "Ich lerne effektiv und setze meine Ressourcen effizient ein.",
      lektionen: 6,
      lerninhalte: [
        {
          nr: "1.2.1",
          kurz: "Zeitplanung",
          text: "Ich kann meine Lern- und Arbeitszeit in Hinblick auf meine neue Lebenssituation strukturiert planen und meine Planung bei Bedarf anpassen.",
          gesellschaftlicheInhalte: [
            "Technologische und digitale Transformation: arbeitserleichternde Nutzung",
          ],
          sprachmodi: [
            "Interaktion und Kollaboration mündlich: an Gesprächen teilnehmen, Rückmeldung geben und annehmen",
          ],
        },
        {
          nr: "1.2.2",
          kurz: "Prüfungsvorbereitung",
          text: "Ich kann mich auf den nächsten Kompetenznachweis zielgerichtet und effektiv vorbereiten.",
          gesellschaftlicheInhalte: [
            "Technologische und digitale Transformation: sinnvolle Anwendung von Tools der künstlichen Intelligenz, zielgerichtetes Prompten",
            "Identität und Sozialisation: Lernstrategien als persönliche Entscheidung, Selbstwirksamkeitsförderung",
          ],
          sprachmodi: [
            "Rezeption schriftlich und bildlich: Zentrale Aussagen aus Texten entnehmen mithilfe von Markierhilfe und Lesestrategien",
            "Interaktion und Kollaboration digital: mit Tools der künstlichen Intelligenz interagieren",
          ],
        },
      ],
    },
  ],
};
