// ============================================================
// Thema 1: Ins Berufsleben einsteigen — Fachinhalte & Aktivitäten
// ============================================================

// --- Types ---

export interface InhaltBlock {
  id: string;
  stufe: "grundressourcen" | "scaffolding" | "kompetenzaufgabe";
  titel: string;
  inhalt: string; // Markdown-ähnlich, Absätze via \n\n
  schluesselwoerter: string[];
  aspekte: string[];
}

export interface MCFrage {
  frage: string;
  optionen: string[];
  korrekt: number; // Index
  erklaerung: string;
}

export interface DragDropPaar {
  item: string;
  ziel: string;
}

export interface TrueFalseKarte {
  aussage: string;
  korrekt: boolean;
  erklaerung: string;
}

export interface LueckenAbschnitt {
  text: string; // {{1}}, {{2}} etc. als Platzhalter
  luecken: { id: string; antwort: string }[];
}

export type AktivitaetDaten =
  | { typ: "multiple-choice"; fragen: MCFrage[] }
  | { typ: "drag-drop"; paare: DragDropPaar[]; instruktion: string }
  | { typ: "true-false"; karten: TrueFalseKarte[] }
  | { typ: "fill-blank"; abschnitt: LueckenAbschnitt };

export interface Aktivitaet {
  id: string;
  titel: string;
  beschreibung: string;
  bezugInhalt: string; // verweist auf InhaltBlock.id
  kompetenzen: string[];
  daten: AktivitaetDaten;
}

export interface QuittungDef {
  id: string;
  stufe: "grundressourcen" | "scaffolding" | "kompetenzaufgabe";
  titel: string;
  beschreibung: string;
  erforderlicheSchritte: string[]; // InhaltBlock.id + Aktivitaet.id
  hko: string[];
  kompetenzen: string[];
}

// --- Fachinhalte ---

export const inhalte: InhaltBlock[] = [
  {
    id: "gr-berufsbildung",
    stufe: "grundressourcen",
    titel: "Das Schweizer Berufsbildungssystem",
    inhalt: `Die Schweiz hat ein besonderes Ausbildungssystem: die duale Berufsbildung. Das bedeutet, du lernst an zwei (oder drei) Orten gleichzeitig.

Der Lehrbetrieb ist dein Arbeitsplatz. Hier lernst du die praktischen Fähigkeiten deines Berufs. Du arbeitest 3–4 Tage pro Woche im Betrieb.

Die Berufsfachschule besuchst du 1–2 Tage pro Woche. Hier lernst du die Theorie: Fachkunde, Allgemeinbildung (ABU) und Sport.

Überbetriebliche Kurse (ÜK) ergänzen die Ausbildung. In mehrtägigen Kursen lernst du spezielle Techniken, die nicht jeder Betrieb vermitteln kann.

Am Ende deiner Lehre machst du das Qualifikationsverfahren (QV). Wenn du bestehst, erhältst du das Eidgenössische Fähigkeitszeugnis (EFZ) — bei einer 3- oder 4-jährigen Lehre. Bei einer 2-jährigen Lehre gibt es das Eidgenössische Berufsattest (EBA).`,
    schluesselwoerter: ["duale Bildung", "Lehrbetrieb", "Berufsfachschule", "ÜK", "EFZ", "EBA", "QV"],
    aspekte: ["Wirtschaft", "Identität & Sozialisation"],
  },
  {
    id: "gr-lehrvertrag",
    stufe: "grundressourcen",
    titel: "Der Lehrvertrag",
    inhalt: `Der Lehrvertrag ist dein wichtigstes Dokument in der Lehre. Er ist ein spezieller Arbeitsvertrag, geregelt im Obligationenrecht (OR Art. 344–346a).

Der Lehrvertrag muss schriftlich sein. Er wird unterschrieben von dir, deinem Lehrbetrieb und — wenn du unter 18 bist — auch von deinen Eltern oder deiner gesetzlichen Vertretung.

Was steht im Lehrvertrag?
- Dein Beruf und die Dauer der Lehre
- Dein Lohn für jedes Lehrjahr
- Die Arbeitszeit pro Woche
- Die Ferientage pro Jahr (mindestens 5 Wochen bis 20 Jahre)
- Die Person, die dich ausbildet (Berufsbildner/in)
- Die Probezeit

Der Vertrag muss vom kantonalen Berufsbildungsamt genehmigt werden. Erst dann ist er gültig. Der Vertrag schützt dich: Dein Lehrbetrieb hat die Pflicht, dich gut auszubilden.`,
    schluesselwoerter: ["Lehrvertrag", "OR 344–346a", "Berufsbildungsamt", "schriftlich", "Unterschrift"],
    aspekte: ["Recht", "Wirtschaft"],
  },
  {
    id: "gr-rechte-pflichten",
    stufe: "grundressourcen",
    titel: "Rechte und Pflichten als Lernende/r",
    inhalt: `Als Lernende oder Lernender hast du Rechte — aber auch Pflichten.

Deine Rechte:
- Du wirst fachgerecht ausgebildet, nicht als billige Arbeitskraft eingesetzt
- Du erhältst den vereinbarten Lohn pünktlich
- Du darfst die Berufsfachschule und ÜK besuchen — das ist Arbeitszeit
- Du hast Anspruch auf mindestens 5 Wochen Ferien pro Jahr (bis 20 Jahre)
- Du darfst keine gefährlichen Arbeiten ohne Aufsicht machen

Deine Pflichten:
- Du arbeitest sorgfältig und gewissenhaft
- Du besuchst den Unterricht regelmässig und pünktlich
- Du hältst dich an die Betriebsordnung und an Weisungen
- Du behandelst Geschäftsgeheimnisse vertraulich
- Du führst die Lerndokumentation sorgfältig

Wichtig: Wenn deine Rechte verletzt werden, kannst du dich an die Berufsberatung oder das Berufsbildungsamt wenden.`,
    schluesselwoerter: ["Rechte", "Pflichten", "Ferien", "Lohn", "Lerndokumentation"],
    aspekte: ["Recht", "Ethik"],
  },
  {
    id: "gr-probezeit",
    stufe: "grundressourcen",
    titel: "Die Probezeit",
    inhalt: `Jeder Lehrvertrag beginnt mit einer Probezeit. In dieser Zeit können beide Seiten prüfen, ob es passt.

Die Probezeit dauert mindestens 1 Monat und höchstens 3 Monate. Meistens sind es 3 Monate. Wenn nichts im Vertrag steht, gilt automatisch 3 Monate.

Während der Probezeit kann der Vertrag von beiden Seiten mit 7 Tagen Frist gekündigt werden. Das bedeutet: Wenn du am Montag kündigst, endet der Vertrag am folgenden Montag.

Die Probezeit kann einmal verlängert werden — auf maximal 6 Monate. Dafür braucht es die Zustimmung der kantonalen Behörde.

Tipps für die Probezeit:
- Sei pünktlich und zuverlässig — der erste Eindruck zählt
- Frag nach, wenn du etwas nicht verstehst
- Zeig Interesse und Initiative
- Sprich Probleme früh an, nicht erst am letzten Tag

Nach der Probezeit kann der Vertrag nur noch aus wichtigen Gründen aufgelöst werden.`,
    schluesselwoerter: ["Probezeit", "1–3 Monate", "7 Tage Frist", "Kündigung", "Verlängerung"],
    aspekte: ["Recht"],
  },
  {
    id: "gr-lohnabrechnung",
    stufe: "grundressourcen",
    titel: "Die Lohnabrechnung verstehen",
    inhalt: `Jeden Monat erhältst du eine Lohnabrechnung. Der Betrag, der auf deinem Konto landet, ist kleiner als dein Bruttolohn. Warum?

Bruttolohn: Das ist dein vereinbarter Monatslohn — der volle Betrag.

Vom Bruttolohn werden Sozialabzüge abgezogen:
- AHV (Alters- und Hinterlassenenversicherung): Sichert deine Rente im Alter. Abzug: 5.3% deines Lohns.
- IV (Invalidenversicherung): Hilft bei Krankheit oder Unfall, die dich arbeitsunfähig machen. Abzug: 0.7%.
- EO (Erwerbsersatzordnung): Zahlt dir Geld, wenn du Militär- oder Zivildienst leistest. Abzug: 0.25%.
- ALV (Arbeitslosenversicherung): Sichert dich ab, falls du arbeitslos wirst. Abzug: 1.1%.

Diese Abzüge zahlt dein Arbeitgeber zur Hälfte mit — du zahlst also nur die Hälfte.

Nettolohn = Bruttolohn minus alle Abzüge. Das ist der Betrag, den du tatsächlich bekommst.

Beispiel: Bruttolohn 800 CHF → Abzüge ca. 59 CHF → Nettolohn ca. 741 CHF.`,
    schluesselwoerter: ["Bruttolohn", "Nettolohn", "AHV", "IV", "EO", "ALV", "Sozialabzüge"],
    aspekte: ["Wirtschaft"],
  },
  {
    id: "gr-anlaufstellen",
    stufe: "grundressourcen",
    titel: "Anlaufstellen bei Problemen",
    inhalt: `Nicht alles in der Lehre läuft immer rund. Es ist wichtig zu wissen, wo du Hilfe findest.

Im Betrieb: Sprich zuerst mit deiner Berufsbildnerin oder deinem Berufsbildner. Wenn das nicht hilft, wende dich an die HR-Abteilung oder die Geschäftsleitung.

In der Schule: Deine ABU-Lehrperson oder die Schulleitung können vermitteln. Viele Schulen haben auch eine Schulsozialarbeit.

Berufsbildungsamt: Das kantonale Amt ist zuständig für alle Fragen rund um die Lehre. Es kann vermitteln, wenn es Konflikte gibt, und prüft auch, ob dein Betrieb die Ausbildungspflichten erfüllt.

Berufsberatung (BIZ): Wenn du merkst, dass der Beruf nicht zu dir passt, hilft das BIZ bei einer Neuorientierung.

Gewerkschaften: Organisationen wie Unia oder der KV Schweiz beraten Lernende kostenlos bei rechtlichen Fragen.

Lehrlingsbetreuung / Jugendberatung: Viele Kantone bieten kostenlose Beratung bei persönlichen oder schulischen Schwierigkeiten.

Merke: Es ist keine Schwäche, Hilfe zu suchen — es ist klug.`,
    schluesselwoerter: ["Berufsbildungsamt", "BIZ", "Gewerkschaft", "Schulsozialarbeit"],
    aspekte: ["Identität & Sozialisation"],
  },
];

// --- Aktivitäten ---

export const aktivitaeten: Aktivitaet[] = [
  {
    id: "quiz-probezeit",
    titel: "Quiz: Die Probezeit",
    beschreibung: "Teste dein Wissen zur Probezeit mit 4 Fragen.",
    bezugInhalt: "gr-probezeit",
    kompetenzen: ["Verständnis fördern"],
    daten: {
      typ: "multiple-choice",
      fragen: [
        {
          frage: "Wie lange dauert die Probezeit normalerweise?",
          optionen: ["1 Woche", "1 Monat", "3 Monate", "6 Monate"],
          korrekt: 2,
          erklaerung: "Die Probezeit dauert in der Regel 3 Monate (1–3 Monate laut OR).",
        },
        {
          frage: "Mit welcher Frist kann man in der Probezeit kündigen?",
          optionen: ["Sofort", "7 Tage", "14 Tage", "1 Monat"],
          korrekt: 1,
          erklaerung: "Während der Probezeit beträgt die Kündigungsfrist 7 Tage.",
        },
        {
          frage: "Wer kann den Lehrvertrag in der Probezeit kündigen?",
          optionen: [
            "Nur der Lehrbetrieb",
            "Nur die lernende Person",
            "Beide Seiten",
            "Nur das Berufsbildungsamt",
          ],
          korrekt: 2,
          erklaerung: "Beide Seiten — Lehrbetrieb und Lernende — können in der Probezeit kündigen.",
        },
        {
          frage: "Auf wie viele Monate kann die Probezeit maximal verlängert werden?",
          optionen: ["3 Monate", "6 Monate", "9 Monate", "12 Monate"],
          korrekt: 1,
          erklaerung: "Die Probezeit kann mit Zustimmung der Behörde auf maximal 6 Monate verlängert werden.",
        },
      ],
    },
  },
  {
    id: "quiz-rechte",
    titel: "Quiz: Rechte & Pflichten",
    beschreibung: "Kennst du deine Rechte und Pflichten als Lernende/r?",
    bezugInhalt: "gr-rechte-pflichten",
    kompetenzen: ["Verständnis fördern", "Standpunkte begründen"],
    daten: {
      typ: "multiple-choice",
      fragen: [
        {
          frage: "Wie viele Wochen Ferien hast du mindestens pro Jahr (unter 20 Jahre)?",
          optionen: ["3 Wochen", "4 Wochen", "5 Wochen", "6 Wochen"],
          korrekt: 2,
          erklaerung: "Bis zum 20. Geburtstag hast du Anspruch auf mindestens 5 Wochen Ferien.",
        },
        {
          frage: "Was gehört NICHT zu deinen Pflichten als Lernende/r?",
          optionen: [
            "Sorgfältig arbeiten",
            "Überstunden ohne Lohn machen",
            "Unterricht besuchen",
            "Geschäftsgeheimnisse wahren",
          ],
          korrekt: 1,
          erklaerung: "Überstunden ohne Lohn sind keine Pflicht. Überzeit muss kompensiert oder bezahlt werden.",
        },
        {
          frage: "Zählt der Berufsschulunterricht als Arbeitszeit?",
          optionen: ["Ja, immer", "Nein, nie", "Nur wenn der Chef es erlaubt", "Nur der Nachmittag"],
          korrekt: 0,
          erklaerung: "Der Berufsfachschulunterricht gilt als Arbeitszeit und wird vom Lohn abgedeckt.",
        },
        {
          frage: "An wen wendest du dich bei Problemen im Lehrbetrieb?",
          optionen: [
            "Polizei",
            "Berufsbildungsamt oder Berufsberatung",
            "Krankenkasse",
            "Vermieter",
          ],
          korrekt: 1,
          erklaerung: "Das kantonale Berufsbildungsamt und die Berufsberatung (BIZ) helfen bei Lehrproblemen.",
        },
      ],
    },
  },
  {
    id: "dragdrop-sozialabzuege",
    titel: "Zuordnung: Sozialabzüge",
    beschreibung: "Ordne die Sozialversicherungen ihrem Zweck zu.",
    bezugInhalt: "gr-lohnabrechnung",
    kompetenzen: ["Verständnis fördern"],
    daten: {
      typ: "drag-drop",
      instruktion: "Ziehe jede Abkürzung auf die passende Beschreibung.",
      paare: [
        { item: "AHV", ziel: "Sichert die Rente im Alter" },
        { item: "IV", ziel: "Hilft bei dauerhafter Arbeitsunfähigkeit" },
        { item: "EO", ziel: "Ersatz bei Militär- oder Zivildienst" },
        { item: "ALV", ziel: "Absicherung bei Arbeitslosigkeit" },
      ],
    },
  },
  {
    id: "truefalse-lehrvertrag",
    titel: "Wahr oder Falsch: Der Lehrvertrag",
    beschreibung: "Stimmen diese Aussagen zum Lehrvertrag?",
    bezugInhalt: "gr-lehrvertrag",
    kompetenzen: ["Verständnis fördern", "Standpunkte begründen"],
    daten: {
      typ: "true-false",
      karten: [
        {
          aussage: "Der Lehrvertrag kann auch mündlich abgeschlossen werden.",
          korrekt: false,
          erklaerung: "Falsch. Der Lehrvertrag muss immer schriftlich sein (OR Art. 344a).",
        },
        {
          aussage: "Wenn du unter 18 bist, müssen deine Eltern den Vertrag mitunterschreiben.",
          korrekt: true,
          erklaerung: "Richtig. Die gesetzliche Vertretung muss bei Minderjährigen unterschreiben.",
        },
        {
          aussage: "Der Lehrvertrag muss vom Berufsbildungsamt genehmigt werden.",
          korrekt: true,
          erklaerung: "Richtig. Ohne Genehmigung des kantonalen Amts ist der Vertrag nicht gültig.",
        },
        {
          aussage: "Im Lehrvertrag steht nur der Lohn, sonst nichts.",
          korrekt: false,
          erklaerung: "Falsch. Im Vertrag stehen auch Beruf, Dauer, Arbeitszeit, Ferien und die Berufsbildnerin.",
        },
        {
          aussage: "Der Lehrbetrieb hat die Pflicht, dich gut auszubilden.",
          korrekt: true,
          erklaerung: "Richtig. Das ist die Hauptpflicht des Lehrbetriebs laut Gesetz.",
        },
      ],
    },
  },
  {
    id: "fillblank-lohnabrechnung",
    titel: "Lückentext: Lohnabrechnung",
    beschreibung: "Fülle die Lücken in dieser vereinfachten Lohnabrechnung aus.",
    bezugInhalt: "gr-lohnabrechnung",
    kompetenzen: ["Verständnis fördern", "Lebensphasen planen"],
    daten: {
      typ: "fill-blank",
      abschnitt: {
        text: "Mein Bruttolohn beträgt 800 CHF. Davon werden Sozialabzüge abgezogen: Die {{1}} sichert meine Rente und kostet 5.3%. Die {{2}} hilft bei Arbeitsunfähigkeit. Die {{3}} zahlt bei Arbeitslosigkeit. Nach allen Abzügen bleibt mein {{4}}, das ist der Betrag auf meinem Konto.",
        luecken: [
          { id: "1", antwort: "AHV" },
          { id: "2", antwort: "IV" },
          { id: "3", antwort: "ALV" },
          { id: "4", antwort: "Nettolohn" },
        ],
      },
    },
  },
];

// --- Quittungen ---

export const quittungen: QuittungDef[] = [
  {
    id: "quittung-grundressourcen",
    stufe: "grundressourcen",
    titel: "Grundressourcen abgeschlossen",
    beschreibung:
      "Du hast die Grundlagen zum Berufseinstieg erarbeitet: Berufsbildungssystem, Lehrvertrag, Rechte, Probezeit, Lohnabrechnung und Anlaufstellen.",
    erforderlicheSchritte: [
      "gr-berufsbildung",
      "gr-lehrvertrag",
      "gr-rechte-pflichten",
      "gr-probezeit",
      "gr-lohnabrechnung",
      "gr-anlaufstellen",
    ],
    hko: [
      "Berufliche Handlungssituationen einordnen",
      "Rechtsgrundlagen im Arbeitskontext verstehen",
    ],
    kompetenzen: ["Verständnis fördern", "Lebensphasen planen"],
  },
  {
    id: "quittung-scaffolding",
    stufe: "scaffolding",
    titel: "Übungen abgeschlossen",
    beschreibung:
      "Du hast dein Wissen in geleiteten Übungen angewendet: Quiz, Zuordnungen und Lückentexte zu Probezeit, Rechten, Lehrvertrag und Lohnabrechnung.",
    erforderlicheSchritte: [
      "quiz-probezeit",
      "quiz-rechte",
      "dragdrop-sozialabzuege",
      "truefalse-lehrvertrag",
      "fillblank-lohnabrechnung",
    ],
    hko: [
      "Fachbegriffe korrekt verwenden",
      "Rechtliche Situationen beurteilen",
    ],
    kompetenzen: ["Verständnis fördern", "Standpunkte begründen"],
  },
  {
    id: "quittung-kompetenzaufgabe",
    stufe: "kompetenzaufgabe",
    titel: "Kompetenzaufgabe bereit",
    beschreibung:
      "Du hast Grundressourcen und Übungen abgeschlossen. Du bist bereit für die offene Kompetenzaufgabe: Eine Kollegin zu ihrem Lehrvertrag beraten.",
    erforderlicheSchritte: [
      "gr-berufsbildung",
      "gr-lehrvertrag",
      "gr-rechte-pflichten",
      "gr-probezeit",
      "gr-lohnabrechnung",
      "gr-anlaufstellen",
      "quiz-probezeit",
      "quiz-rechte",
      "dragdrop-sozialabzuege",
      "truefalse-lehrvertrag",
      "fillblank-lohnabrechnung",
    ],
    hko: [
      "Andere Personen in beruflichen Situationen beraten",
      "Fachwissen transferfähig einsetzen",
    ],
    kompetenzen: ["Ziele setzen und anpassen", "Verständnis fördern", "Lebensphasen planen"],
  },
];
