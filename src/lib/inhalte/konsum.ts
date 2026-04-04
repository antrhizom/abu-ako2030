// ============================================================
// Thema 3: Konsum und Wirtschaft — Ressourcen & Anschlüsse
// ============================================================

import type { RessourcenBlockData, QuittungDef, MiniAktivitaet } from "./berufsleben";
import type { ThemaEinleitung } from "./herausforderungen";
import type { ThemaHandlungskompetenzen } from "./lebensbezuege";

// --- Ressourcen ---

export const ressourcen: RessourcenBlockData[] = [
  {
    id: "ko-beduerfnisse",
    titel: "Bedürfnisse und Konsum",
    zitat: "Wir kaufen nicht nur, was wir brauchen — sondern oft das, was uns die Werbung einredet.",
    inhalt: `Jeder Mensch hat Bedürfnisse. Grundbedürfnisse wie Essen, Trinken und Wohnen müssen erfüllt sein, damit wir leben können. Darüber hinaus gibt es Wahlbedürfnisse: ein neues Handy, Markenkleidung, Ferien. Die Grenze zwischen Brauchen und Wollen ist oft unscharf.

Unsere Konsumentscheidungen werden stark beeinflusst. Werbung zeigt uns ständig, was wir angeblich brauchen. Social Media verstärkt diesen Effekt: Influencer präsentieren Produkte und Lebensstile, die attraktiv wirken. Auch Freunde, Familie und gesellschaftliche Erwartungen beeinflussen, was wir kaufen.

Es gibt verschiedene Arten von Bedürfnissen. Die Bedürfnispyramide von Maslow zeigt: Zuerst kommen Grundbedürfnisse (Essen, Sicherheit), dann soziale Bedürfnisse (Zugehörigkeit, Anerkennung) und schliesslich Selbstverwirklichung. Viele Produkte sprechen nicht unsere Grundbedürfnisse an, sondern das Bedürfnis nach Anerkennung oder Zugehörigkeit.

Wenn du bewusster konsumieren möchtest, frage dich vor dem Kauf: Brauche ich das wirklich? Oder will ich es nur, weil andere es haben? Kann ich mir das leisten? Gibt es eine günstigere oder nachhaltigere Alternative?`,
    aspekte: ["Wirtschaft", "Identität & Sozialisation"],
    sprachmodiAnschluesse: ["Rezeption audiovisuell"],
    kompetenzen: ["Bedürfnisse erkennen", "Konsumverhalten reflektieren"],
    miniAktivitaet: {
      frage: "Welches ist ein Grundbedürfnis nach Maslow?",
      optionen: [
        "Ein neues Smartphone",
        "Nahrung und Sicherheit",
        "Markenkleidung",
        "Ein eigenes Auto",
      ],
      korrekt: 1,
      erklaerung:
        "Nahrung und Sicherheit sind Grundbedürfnisse. Smartphones und Markenkleidung gehören zu den Wahlbedürfnissen.",
    },
    anschluesse: [],
  },
  {
    id: "ko-budget",
    titel: "Budget planen",
    zitat: "Wer weiss, wohin sein Geld fliesst, behält die Kontrolle über seine Finanzen.",
    inhalt: `Ein Budget ist ein Plan für dein Geld. Es zeigt, wie viel du einnimmst und wie viel du ausgibst. Als Lernende/r hast du vielleicht zum ersten Mal einen regelmässigen Lohn — und damit die Verantwortung, dein Geld sinnvoll einzuteilen.

So erstellst du ein Budget: Liste zuerst deine Einnahmen auf (Lohn, Taschengeld, Kinderzulagen). Dann deine festen Ausgaben (Krankenkasse, ÖV-Abo, Handy, Verpflegung). Die Differenz ist dein frei verfügbares Geld für Freizeit, Kleidung und Sparen.

Wichtig ist, dass du auch unerwartete Ausgaben einplanst. Zahnarztrechnung, Laptop-Reparatur oder ein Geschenk — solche Kosten kommen immer. Lege jeden Monat einen kleinen Betrag zur Seite, damit du auf solche Überraschungen vorbereitet bist.

Risiken für dein Budget: Abonnements, die du vergisst (Streaming, Fitness), Spontankäufe und Ratenzahlungen. Überprüfe regelmässig dein Budget und passe es an, wenn sich etwas ändert — zum Beispiel wenn dein Lohn im nächsten Lehrjahr steigt.`,
    aspekte: ["Wirtschaft"],
    sprachmodiAnschluesse: ["Rezeption audiovisuell"],
    kompetenzen: ["Budget erstellen", "Finanzplanung verstehen"],
    miniAktivitaet: {
      frage: "Was solltest du bei der Budgetplanung zuerst auflisten?",
      optionen: [
        "Wünsche für Ferien",
        "Einnahmen und feste Ausgaben",
        "Nur die Ausgaben für Freizeit",
        "Die Preise im Lieblings-Onlineshop",
      ],
      korrekt: 1,
      erklaerung:
        "Zuerst listest du Einnahmen und feste Ausgaben auf. Die Differenz zeigt, wie viel Geld dir frei zur Verfügung steht.",
    },
    anschluesse: [],
  },
  {
    id: "ko-schulden",
    titel: "Schulden vermeiden",
    zitat: "Schulden entstehen oft leise — ein Abo hier, eine Ratenzahlung dort, und plötzlich reicht das Geld nicht mehr.",
    inhalt: `Verschuldung bei jungen Menschen ist ein wachsendes Problem in der Schweiz. Die häufigsten Gründe: Handyverträge mit teuren Geräten, Online-Shopping auf Rechnung, Ratenzahlungen und Kleinkredite. Viele unterschätzen, wie schnell sich kleine Beträge summieren.

Was ist der Unterschied zwischen Schulden und Verschuldung? Schulden bedeutet, dass du jemandem Geld schuldest — zum Beispiel eine offene Rechnung. Verschuldung bedeutet, dass du dauerhaft mehr ausgibst, als du einnimmst, und deine Schulden nicht mehr bezahlen kannst.

Warnzeichen für Verschuldung: Du bezahlst Rechnungen immer zu spät. Du brauchst einen neuen Kredit, um alte Schulden zu bezahlen. Du versteckst deine finanzielle Situation vor anderen. In solchen Fällen solltest du Hilfe suchen — zum Beispiel bei einer Budgetberatung.

Tipps, um Schulden zu vermeiden: Kaufe nur, was du dir leisten kannst. Bezahle Rechnungen sofort. Vermeide Ratenzahlungen und Kleinkredite. Kaufe auf Rechnung nur, wenn du das Geld bereits hast. Wenn du Hilfe brauchst, gibt es in jedem Kanton kostenlose Schuldenberatungsstellen.`,
    aspekte: ["Wirtschaft", "Ethik"],
    sprachmodiAnschluesse: ["Rezeption audiovisuell"],
    kompetenzen: ["Schuldenrisiken erkennen", "Konsumverhalten reflektieren"],
    miniAktivitaet: {
      frage: "Was ist ein typisches Warnzeichen für Verschuldung?",
      optionen: [
        "Du sparst jeden Monat etwas Geld",
        "Du bezahlst Rechnungen immer pünktlich",
        "Du brauchst einen neuen Kredit, um alte Schulden zu bezahlen",
        "Du vergleichst Preise vor dem Kauf",
      ],
      korrekt: 2,
      erklaerung:
        "Wenn du neue Kredite brauchst, um alte Schulden zu bezahlen, ist das ein ernstes Warnzeichen für Überschuldung.",
    },
    anschluesse: [],
  },
  {
    id: "ko-nachhaltigkeit",
    titel: "Nachhaltiger Konsum",
    zitat: "Jeder Kauf ist eine Entscheidung — für oder gegen die Umwelt, die Gesellschaft und die Zukunft.",
    inhalt: `Nachhaltigkeit hat drei Dimensionen: Ökologie (Umwelt), Wirtschaft und Soziales. Nachhaltiger Konsum bedeutet, so einzukaufen, dass die Umwelt geschont, Arbeitende fair behandelt und Ressourcen nicht verschwendet werden.

Unser Konsum hat grosse Auswirkungen auf die Umwelt. Die Produktion von Kleidung, Elektronik und Lebensmitteln verbraucht Wasser, Energie und Rohstoffe. Transport über weite Strecken verursacht CO₂-Emissionen. Verpackungen erzeugen Abfall. All das trägt zum Klimawandel bei.

Was kannst du tun? Kaufe regional und saisonal ein. Repariere Dinge, statt sie wegzuwerfen. Nutze Second-Hand-Angebote. Achte auf Labels wie Fairtrade, Bio oder FSC. Überlege vor dem Kauf: Brauche ich das wirklich? Kann ich es leihen statt kaufen?

Nachhaltiger Konsum ist nicht immer einfach. Nachhaltige Produkte sind oft teurer. Nicht jeder kann sich das leisten. Aber auch kleine Schritte zählen: Weniger Fleisch essen, weniger Fast Fashion kaufen oder eine wiederverwendbare Trinkflasche nutzen.`,
    aspekte: ["Ökologie", "Wirtschaft", "Identität & Sozialisation"],
    sprachmodiAnschluesse: ["Produktion multimedial"],
    kompetenzen: ["Nachhaltigkeit verstehen", "Konsumgewohnheiten reflektieren"],
    miniAktivitaet: {
      frage: "Was sind die drei Dimensionen der Nachhaltigkeit?",
      optionen: [
        "Preis, Qualität, Marke",
        "Ökologie, Wirtschaft, Soziales",
        "Produktion, Transport, Verkauf",
        "Wasser, Luft, Erde",
      ],
      korrekt: 1,
      erklaerung:
        "Nachhaltigkeit umfasst drei Dimensionen: Ökologie (Umwelt), Wirtschaft (ökonomisch tragbar) und Soziales (fair für alle Beteiligten).",
    },
    anschluesse: [],
  },
  {
    id: "ko-rohstoff-preis",
    titel: "Vom Rohstoff zum Preis",
    zitat: "Der Preis eines Produkts erzählt eine Geschichte — von Rohstoffen, Arbeit, Transport und Gewinn.",
    inhalt: `Hast du dich schon gefragt, warum ein T-Shirt bei einer Marke 10 Franken kostet und bei einer anderen 80 Franken? Der Preis eines Produkts setzt sich aus vielen Teilen zusammen: Rohstoffe, Produktion, Transport, Marketing, Gewinn des Händlers und Steuern.

Die Herstellung beginnt beim Rohstoff. Baumwolle für Kleidung, Metalle für Elektronik, Kakao für Schokolade — diese Rohstoffe werden oft in Ländern des globalen Südens abgebaut oder angebaut. Die Arbeitsbedingungen dort sind häufig schlecht und die Löhne tief.

Angebot und Nachfrage bestimmen den Preis auf dem Markt. Wenn viele Menschen ein Produkt wollen (hohe Nachfrage) und es wenig davon gibt (geringes Angebot), steigt der Preis. Wenn es viel von einem Produkt gibt, aber wenige es kaufen, sinkt der Preis. Dieses Prinzip nennt man Marktmechanismus.

Auch andere Faktoren beeinflussen den Preis: Transportkosten (je weiter, desto teurer), Zölle und Steuern, Markenimage und Werbung. Ein günstiger Preis bedeutet oft, dass jemand anderes dafür zahlt — die Umwelt oder die Menschen, die das Produkt herstellen.`,
    aspekte: ["Wirtschaft", "Ökologie"],
    sprachmodiAnschluesse: ["Interaktion und Kollaboration schriftlich"],
    kompetenzen: ["Wirtschaftliche Zusammenhänge verstehen", "Preisbildung kennen"],
    miniAktivitaet: {
      frage: "Was passiert laut dem Marktmechanismus, wenn die Nachfrage steigt und das Angebot gleich bleibt?",
      optionen: [
        "Der Preis sinkt",
        "Der Preis bleibt gleich",
        "Der Preis steigt",
        "Das Produkt wird verboten",
      ],
      korrekt: 2,
      erklaerung:
        "Wenn die Nachfrage steigt und das Angebot gleich bleibt, steigt der Preis — das ist das Grundprinzip von Angebot und Nachfrage.",
    },
    anschluesse: [],
  },
  {
    id: "ko-kaufvertrag",
    titel: "Kaufvertrag und Reklamation",
    zitat: "Beim Einkaufen schliesst du einen Vertrag — auch wenn du nichts unterschreibst.",
    inhalt: `Jeder Kauf ist ein Kaufvertrag. Er entsteht, wenn Käufer und Verkäufer sich über Ware und Preis einig sind. Das gilt im Laden, online und auch auf dem Markt. Der Vertrag kommt durch Angebot und Annahme zustande — auch mündlich oder durch Klicken auf «Jetzt kaufen».

Was sind deine Rechte als Käufer? Der Verkäufer muss dir die Ware in der vereinbarten Qualität und zum vereinbarten Preis liefern. Wenn die Ware mangelhaft ist (Defekt, falsche Ware), hast du das Recht auf Gewährleistung. Das bedeutet: Du kannst Reparatur, Umtausch oder eine Preisminderung verlangen.

Wichtig: In der Schweiz gibt es kein generelles Umtauschrecht. Wenn ein Produkt einwandfrei ist, muss der Laden es nicht zurücknehmen — ausser er hat es versprochen (z. B. 30 Tage Rückgaberecht). Online-Käufe haben in der Schweiz ebenfalls kein gesetzliches Widerrufsrecht, anders als in der EU.

Wenn du reklamieren musst: Melde den Mangel sofort beim Verkäufer. Beschreibe das Problem klar und sachlich. Bewahre die Quittung auf. Wenn der Verkäufer nicht reagiert, kannst du dich an eine Konsumentenschutzorganisation wenden — zum Beispiel den Konsumentenschutz oder die Stiftung für Konsumentenschutz (SKS).`,
    aspekte: ["Recht", "Wirtschaft"],
    sprachmodiAnschluesse: ["Interaktion und Kollaboration mündlich", "Interaktion und Kollaboration schriftlich"],
    kompetenzen: ["Kaufrecht kennen", "Rechte einfordern"],
    miniAktivitaet: {
      frage: "Gibt es in der Schweiz ein generelles Umtauschrecht für einwandfreie Produkte?",
      optionen: [
        "Ja, immer innerhalb von 14 Tagen",
        "Ja, aber nur bei Barzahlung",
        "Nein, nur wenn der Verkäufer es anbietet",
        "Nein, aber online immer",
      ],
      korrekt: 2,
      erklaerung:
        "In der Schweiz gibt es kein generelles Umtauschrecht. Der Verkäufer muss einwandfreie Ware nur zurücknehmen, wenn er es versprochen hat.",
    },
    anschluesse: [],
  },
];

// --- Quittungen ---

export const quittungen: QuittungDef[] = [
  {
    id: "quittung-konsum-ressourcen",
    titel: "Ressourcen erarbeitet",
    beschreibung:
      "Du hast alle Grundlagen zum Thema Konsum und Wirtschaft gelesen und die Verständnisfragen beantwortet.",
    erforderlicheSchritte: ressourcen.map((r) => r.id),
    kompetenzen: [
      "Bedürfnisse erkennen",
      "Budget erstellen",
      "Schuldenrisiken erkennen",
      "Nachhaltigkeit verstehen",
      "Wirtschaftliche Zusammenhänge verstehen",
      "Kaufrecht kennen",
    ],
  },
];

// --- Einleitung ---

export const einleitungKonsum: ThemaEinleitung = {
  themaId: "konsum",
  situationstext:
    "Du verdienst deinen eigenen Lohn und triffst täglich Konsumentscheidungen — beim Einkaufen, online oder in der Freizeit. Gleichzeitig hörst du von Klimawandel, unfairen Arbeitsbedingungen und Verschuldung bei jungen Menschen. Dieses Thema hilft dir, überlegte Konsumentscheidungen zu treffen, dein Geld sinnvoll einzuteilen und deine Rechte als Käufer zu kennen.",
  herausforderungen: [
    {
      id: "h-geld-einteilen",
      titel: "Wie teile ich mein Geld ein?",
      beschreibung:
        "Der erste eigene Lohn ist aufregend — aber am Ende des Monats ist oft nichts mehr übrig. Wie planst du ein realistisches Budget?",
      kompetenzHilfe: [
        {
          kompetenz: "Budget erstellen",
          wieHilft:
            "Du lernst, Einnahmen und Ausgaben aufzulisten, ein Budget zu erstellen und unerwartete Kosten einzuplanen.",
          ressourcenIds: ["ko-budget"],
        },
        {
          kompetenz: "Schuldenrisiken erkennen",
          wieHilft:
            "Du erkennst Warnsignale für Verschuldung und weisst, wie du Schulden vermeiden kannst.",
          ressourcenIds: ["ko-schulden"],
        },
      ],
    },
    {
      id: "h-nachhaltigkeit",
      titel: "Ist mein Konsum nachhaltig?",
      beschreibung:
        "Fast Fashion, Fleisch, Flugreisen — unser Konsum belastet die Umwelt. Aber was kannst du als Einzelperson tun?",
      kompetenzHilfe: [
        {
          kompetenz: "Nachhaltigkeit verstehen",
          wieHilft:
            "Du verstehst die drei Dimensionen der Nachhaltigkeit und findest konkrete Möglichkeiten für nachhaltigeren Konsum.",
          ressourcenIds: ["ko-nachhaltigkeit", "ko-rohstoff-preis"],
        },
      ],
    },
    {
      id: "h-rechte-kaeufer",
      titel: "Was tun, wenn etwas nicht stimmt?",
      beschreibung:
        "Das neue Gerät ist kaputt, die Lieferung kam nicht — aber du weisst nicht, welche Rechte du hast.",
      kompetenzHilfe: [
        {
          kompetenz: "Kaufrecht kennen",
          wieHilft:
            "Du kennst deine Rechte und Pflichten beim Einkauf und weisst, wie du bei Problemen richtig reklamierst.",
          ressourcenIds: ["ko-kaufvertrag"],
        },
      ],
    },
  ],
};

// --- Handlungskompetenzen (SLP-Daten) ---

export const handlungskompetenzenKonsum: ThemaHandlungskompetenzen = {
  themaId: "konsum",
  lebensbezuege: [
    {
      nr: "3.1",
      kurz: "Konsumentscheidungen",
      text: "Ich treffe überlegte Konsumentscheidungen, die zu mir und meiner Lebenssituation passen.",
      lektionen: 9,
      lerninhalte: [
        {
          nr: "3.1.1",
          kurz: "Bed�rfnisse erkennen",
          text: "Ich kann verschiedene Bedürfnisse unterscheiden und den Einfluss von sozialer Umgebung und Werbung auf mein Konsumverhalten analysieren.",
          gesellschaftlicheInhalte: [
            "Wirtschaft: Bedürfnisarten, Konsumverhalten, Werbung und deren Einfluss",
            "Identität und Sozialisation: Soziale Prägung von Konsumentscheidungen, Gruppendruck",
          ],
          sprachmodi: [
            "Rezeption audiovisuell: Werbebeiträge analysieren und deren Strategien erkennen",
          ],
        },
        {
          nr: "3.1.2",
          kurz: "Budget planen",
          text: "Ich kann ein persönliches Budget erstellen, Abweichungen erkennen und meine Finanzplanung anpassen.",
          gesellschaftlicheInhalte: [
            "Wirtschaft: Budgetplanung, Einnahmen und Ausgaben, fixe und variable Kosten, Sparen",
          ],
          sprachmodi: [
            "Rezeption audiovisuell: Informationen aus Grafiken und Tabellen zu Finanzthemen entnehmen",
          ],
        },
        {
          nr: "3.1.3",
          kurz: "Schulden vermeiden",
          text: "Ich kann Ursachen und Folgen von Verschuldung bei jungen Menschen erkennen und Strategien zur Schuldenvermeidung beschreiben.",
          gesellschaftlicheInhalte: [
            "Wirtschaft: Verschuldung, Konsumkredite, Ratenzahlungen, Betreibung",
            "Ethik: Verantwortung im Umgang mit Geld, gesellschaftliche Folgen von Verschuldung",
          ],
          sprachmodi: [
            "Rezeption audiovisuell: Dokumentarische Beiträge zum Thema Verschuldung verstehen und zentrale Aussagen zusammenfassen",
          ],
        },
      ],
    },
    {
      nr: "3.2",
      kurz: "Nachhaltiger Konsum",
      text: "Ich analysiere Konsumgewohnheiten unserer Gesellschaft nach nachhaltigen Kriterien.",
      lektionen: 18,
      lerninhalte: [
        {
          nr: "3.2.1",
          kurz: "Konsumgewohnheiten",
          text: "Ich kann eigene und gesellschaftliche Konsumgewohnheiten anhand der drei Dimensionen der Nachhaltigkeit reflektieren und Möglichkeiten für nachhaltigeren Konsum aufzeigen.",
          gesellschaftlicheInhalte: [
            "Ökologie: Umweltbelastung durch Konsum, Klimawandel, CO₂-Emissionen, Ressourcenverschleiss",
            "Wirtschaft: Kosten nachhaltiger Produkte, wirtschaftliche Nachhaltigkeit",
            "Identität und Sozialisation: Eigene Konsumgewohnheiten reflektieren, Verantwortung als Konsument/in",
          ],
          sprachmodi: [
            "Produktion multimedial: Eigene Konsumgewohnheiten in einem multimedialen Beitrag dokumentieren und Nachhaltigkeitskriterien anwenden",
          ],
        },
        {
          nr: "3.2.2",
          kurz: "Wert eines Produkts",
          text: "Ich kann den Wert eines Produkts anhand seiner Herstellung, seines Transports und der Marktmechanismen von Angebot und Nachfrage erklären.",
          gesellschaftlicheInhalte: [
            "Wirtschaft: Wertschöpfungskette, Rohstoffe, Produktion, Transport, Handel, Angebot und Nachfrage, Preisbildung, Marktmechanismen, globale Handelsbeziehungen",
          ],
          sprachmodi: [
            "Interaktion und Kollaboration schriftlich: In einem kollaborativen Text die Wertschöpfungskette eines Produkts beschreiben und analysieren",
          ],
        },
      ],
    },
    {
      nr: "3.3",
      kurz: "Rechte beim Einkauf",
      text: "Ich kenne meine Rechte und Pflichten beim Einkaufen und fordere diese ein.",
      lektionen: 6,
      lerninhalte: [
        {
          nr: "3.3.1",
          kurz: "Kaufvertrag",
          text: "Ich kann einen Kaufvertrag in seinen wesentlichen Bestandteilen erkennen und rechtlich beurteilen.",
          gesellschaftlicheInhalte: [
            "Recht: Kaufvertrag, Vertragsbestandteile, Zustandekommen, Rechte und Pflichten, Gewährleistung, Umtausch",
          ],
          sprachmodi: [
            "Rezeption schriftlich und bildlich: Vertragstexte und AGB lesen, verstehen und wesentliche Punkte identifizieren",
          ],
        },
        {
          nr: "3.3.2",
          kurz: "Reklamation",
          text: "Ich kann bei Problemen mit einem Kauf meine Rechte einfordern und eine begründete Forderung formulieren.",
          gesellschaftlicheInhalte: [
            "Recht: Reklamation, Mängelrüge, Konsumentenschutz, Schlichtungsstellen",
          ],
          sprachmodi: [
            "Interaktion und Kollaboration mündlich: Ein Reklamationsgespräch sachlich und zielorientiert führen",
            "Interaktion und Kollaboration schriftlich: Eine schriftliche Reklamation verfassen mit klarer Forderung und Begründung",
          ],
        },
      ],
    },
  ],
};
