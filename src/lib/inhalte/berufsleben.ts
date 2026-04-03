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
    sprachmodiAnschluesse: ["Rezeption schriftlich und bildlich", "Interaktion und Kollaboration digital"],
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
    sprachmodiAnschluesse: ["Rezeption schriftlich und bildlich", "Interaktion und Kollaboration digital"],
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
    id: "gr-digitale-werkzeuge",
    titel: "Digitale Werkzeuge sicher nutzen",
    zitat: "OneDrive, Teams, E-Mail — deine digitalen Arbeitsplätze wollen eingerichtet und geschützt sein.",
    inhalt: `Im Betrieb und in der Schule arbeitest du mit digitalen Werkzeugen: Cloud-Speicher (OneDrive, Google Drive), Kommunikationstools (Teams, Outlook), Lernplattformen (Moodle, OpenOlat).

Wichtig ist, dass du deine Daten sicher speicherst. Nutze Cloud-Dienste wie OneDrive, damit deine Dokumente nicht verloren gehen. Erstelle Ordnerstrukturen für Schule und Betrieb.

Passwörter: Nutze für jeden Dienst ein anderes, starkes Passwort. Ein Passwort-Manager hilft dir dabei. Aktiviere die Zwei-Faktor-Authentifizierung wo möglich.

Datenschutz: Teile keine persönlichen Daten oder Geschäftsgeheimnisse über unsichere Kanäle. Prüfe, ob Links und Anhänge vertrauenswürdig sind.`,
    aspekte: ["Technologie"],
    sprachmodiAnschluesse: ["Rezeption schriftlich und bildlich"],
    kompetenzen: ["Verständnis fördern"],
    miniAktivitaet: {
      frage: "Was ist der sicherste Weg, wichtige Schuldokumente zu speichern?",
      optionen: ["Nur auf dem USB-Stick", "In der Cloud (z.B. OneDrive)", "Nur auf dem Handy"],
      korrekt: 1,
      erklaerung: "Cloud-Speicher wie OneDrive sichert deine Daten automatisch und du kannst von überall darauf zugreifen.",
    },
    anschluesse: [],
  },
  {
    id: "gr-kommunikation-digital",
    titel: "Digital kommunizieren — professionell und zielgruppengerecht",
    zitat: "Eine E-Mail an den Chef ist nicht dasselbe wie eine Nachricht an Kolleg/innen — der Ton macht die Musik.",
    inhalt: `Im Berufsalltag nutzt du verschiedene digitale Kommunikationskanäle: E-Mail für formelle Anfragen, Chat (Teams, WhatsApp) für kurze Absprachen, Videokonferenzen für Besprechungen.

Regeln für professionelle E-Mails: Betreffzeile klar formulieren, Anrede und Grussformel, kurze Absätze, keine Emojis in formellen Mails, Anhänge benennen.

Chat im Betrieb: Kurz und höflich. Keine Sprachnachrichten ohne Absprache. Arbeitszeiten respektieren.

Wichtig: Was du digital schreibst, bleibt bestehen. Überlege vor dem Senden, ob du den Text auch laut vorlesen würdest.`,
    aspekte: ["Technologie"],
    sprachmodiAnschluesse: ["Interaktion und Kollaboration schriftlich", "Interaktion und Kollaboration digital"],
    kompetenzen: ["Verständnis fördern"],
    miniAktivitaet: {
      frage: "Was gehört in eine professionelle E-Mail an das Berufsbildungsamt?",
      optionen: ["Nur 'Hi, habe eine Frage'", "Betreff, Anrede, Anliegen, Gruss", "Ein Emoji und ein Stichwort"],
      korrekt: 1,
      erklaerung: "Eine professionelle E-Mail hat: klaren Betreff, Anrede, dein Anliegen in kurzen Sätzen und eine Grussformel.",
    },
    anschluesse: [],
  },
  {
    id: "gr-lernplanung",
    titel: "Lern- und Arbeitszeit planen",
    zitat: "Wer seinen Tag plant, hat weniger Stress — und mehr Freizeit.",
    inhalt: `Als Lernende/r musst du Betrieb, Schule, ÜK und Freizeit unter einen Hut bringen. Eine gute Planung hilft.

Wochenplan: Trage feste Termine ein (Schule, Betrieb, ÜK, Sport). Plane Lernzeiten für Prüfungen und Hausaufgaben ein. Halte dir auch freie Zeiten offen.

Digitale Tools: Nutze einen Kalender (Outlook, Google Calendar) oder eine Aufgaben-App (Microsoft To Do, Todoist). Setze Erinnerungen für Abgabetermine.

Tipps: Beginne mit den schwierigen Aufgaben, wenn du am fittesten bist. Lerne in kurzen Blöcken (25 Minuten) mit Pausen (Pomodoro-Technik). Frage bei Schwierigkeiten frühzeitig nach.`,
    aspekte: ["Technologie", "Identität & Sozialisation"],
    sprachmodiAnschluesse: ["Interaktion und Kollaboration mündlich"],
    kompetenzen: ["Ziele setzen und anpassen", "Lebensphasen planen"],
    miniAktivitaet: {
      frage: "Was ist die Pomodoro-Technik?",
      optionen: ["Eine Kochtechnik", "25 Minuten lernen, dann Pause", "Ein Computerprogramm"],
      korrekt: 1,
      erklaerung: "Pomodoro: 25 Minuten fokussiert arbeiten, dann 5 Minuten Pause. Nach 4 Runden eine längere Pause.",
    },
    anschluesse: [],
  },
  {
    id: "gr-ki-tools",
    titel: "KI-Tools sinnvoll einsetzen",
    zitat: "KI kann dir helfen — aber du musst wissen, wie du fragst und was du prüfst.",
    inhalt: `Künstliche Intelligenz (KI) wie ChatGPT, Copilot oder Gemini kann dir beim Lernen helfen: Texte zusammenfassen, Fragen beantworten, Ideen entwickeln, Gespräche vorbereiten.

Zielgerichtetes Prompten: Formuliere klare, spezifische Fragen. Gib Kontext: «Ich bin Lernende/r im 1. Lehrjahr und muss...». Je präziser dein Prompt, desto besser die Antwort.

Wichtig — KI-Antworten prüfen: KI kann Fehler machen. Überprüfe Fakten immer mit offiziellen Quellen (Gesetze, Lehrmittel, Lehrperson). KI ist ein Werkzeug, kein Ersatz für eigenes Denken.

Erlaubt und sinnvoll: Texte umformulieren lassen, Zusammenfassungen erstellen, Prüfungsvorbereitung üben. Nicht erlaubt: Abgaben direkt kopieren ohne eigene Arbeit.`,
    aspekte: ["Technologie"],
    sprachmodiAnschluesse: ["Interaktion und Kollaboration digital", "Rezeption schriftlich und bildlich"],
    kompetenzen: ["Verständnis fördern", "Ziele setzen und anpassen"],
    miniAktivitaet: {
      frage: "Was ist beim Einsatz von KI-Tools am wichtigsten?",
      optionen: ["Alles 1:1 kopieren", "Antworten immer prüfen und eigenes Denken einsetzen", "Möglichst viel auf einmal fragen"],
      korrekt: 1,
      erklaerung: "KI-Antworten müssen immer geprüft werden. KI ist ein Hilfsmittel, kein Ersatz für eigenes Denken.",
    },
    anschluesse: [],
  },
  {
    id: "gr-anlaufstellen",
    titel: "Anlaufstellen bei Problemen",
    zitat: "Es ist keine Schwäche, Hilfe zu suchen — es ist klug.",
    inhalt: `Im Betrieb: Zuerst Berufsbildner/in, dann HR oder Geschäftsleitung.

In der Schule: ABU-Lehrperson, Schulleitung oder Schulsozialarbeit.

Extern: Berufsbildungsamt (vermittelt bei Konflikten), BIZ (Neuorientierung), Gewerkschaften (kostenlose Rechtsberatung für Lernende).`,
    aspekte: ["Identität & Sozialisation"],
    sprachmodiAnschluesse: ["Rezeption mündlich", "Interaktion und Kollaboration digital"],
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
