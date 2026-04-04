// ============================================================
// Thema 2: Meinungen bilden und mitgestalten — Ressourcen & Anschlüsse
// ============================================================

import type { RessourcenBlockData, QuittungDef, MiniAktivitaet } from "./berufsleben";
import type { ThemaEinleitung } from "./herausforderungen";
import type { ThemaHandlungskompetenzen } from "./lebensbezuege";

// --- Ressourcen ---

export const ressourcen: RessourcenBlockData[] = [
  {
    id: "me-informationsquellen",
    titel: "Informationsquellen kritisch prüfen",
    zitat: "Nicht alles, was im Internet steht, ist wahr — und nicht alles, was dir angezeigt wird, ist Zufall.",
    inhalt: `Jeden Tag siehst du Hunderte von Nachrichten, Posts und Videos. Aber woher kommen diese Inhalte? Algorithmen auf Social Media entscheiden, was du siehst. Sie zeigen dir vor allem das, was dich interessiert — oder aufregt. So entsteht eine Filterblase: Du bekommst immer ähnliche Meinungen angezeigt und denkst, alle denken so.

Fake News sind falsche oder verzerrte Nachrichten, die absichtlich verbreitet werden. Sie sehen oft aus wie echte Nachrichten. Sie nutzen starke Emotionen wie Angst oder Wut, um geteilt zu werden. Je öfter du etwas siehst, desto eher glaubst du es — auch wenn es nicht stimmt.

Wie prüfst du Informationen? Frage dich: Wer hat das geschrieben? Gibt es andere Quellen, die das bestätigen? Ist die Quelle bekannt und seriös? Nutze Faktencheck-Seiten wie correctiv.org oder srgssr.ch. Vergleiche immer mehrere Quellen, bevor du etwas glaubst oder teilst.

In der Schweiz sind Medien wie SRF, NZZ oder 20 Minuten an journalistische Standards gebunden. Aber auch sie haben eine Perspektive. Wer mehrere Quellen liest, bekommt ein besseres Bild der Realität.`,
    aspekte: ["Technologie", "Politik"],
    sprachmodiAnschluesse: ["Rezeption mündlich", "Rezeption audiovisuell"],
    kompetenzen: ["Informationen kritisch prüfen", "Medienkompetenz entwickeln"],
    miniAktivitaet: {
      frage: "Was ist eine Filterblase?",
      optionen: [
        "Ein Schutz gegen Viren im Internet",
        "Wenn Algorithmen dir nur ähnliche Inhalte zeigen",
        "Ein Filter für sauberes Trinkwasser",
        "Eine Einstellung im Browser",
      ],
      korrekt: 1,
      erklaerung:
        "Eine Filterblase entsteht, wenn Algorithmen dir immer ähnliche Inhalte zeigen — du bekommst nur einen kleinen Ausschnitt der Realität mit.",
    },
    anschluesse: [],
  },
  {
    id: "me-meinungsfreiheit",
    titel: "Meinungsfreiheit und ihre Grenzen",
    zitat: "Jeder darf seine Meinung sagen — aber nicht jede Aussage ist von der Meinungsfreiheit geschützt.",
    inhalt: `Die Meinungsfreiheit ist ein Menschenrecht. Sie steht in der Schweizer Bundesverfassung (Art. 16) und in der Europäischen Menschenrechtskonvention. Sie bedeutet: Du darfst deine Meinung frei äussern, ohne vom Staat bestraft zu werden.

Aber die Meinungsfreiheit hat Grenzen. Rassismus, Aufrufe zu Gewalt und Verleumdung sind verboten. Die Anti-Rassismus-Strafnorm (Art. 261bis StGB) verbietet zum Beispiel Hassrede gegen Gruppen wegen ihrer Rasse, Ethnie, Religion oder sexuellen Orientierung. Diese Grenzen schützen die Würde anderer Menschen.

Diskriminierung bedeutet, dass Menschen wegen bestimmter Merkmale ungleich behandelt werden — zum Beispiel wegen Herkunft, Geschlecht oder Religion. In der Schule, am Arbeitsplatz oder online kann Diskriminierung grosse Auswirkungen haben. Die Meinungsfreiheit schützt nicht das Recht, andere zu verletzen oder auszugrenzen.

Demokratische Werte wie Gleichheit, Respekt und Toleranz bilden die Grundlage für ein friedliches Zusammenleben. Wenn wir unsere Meinung äussern, tragen wir eine Verantwortung: Wir sollen respektvoll bleiben und die Würde aller Menschen achten.`,
    aspekte: ["Politik", "Ethik"],
    sprachmodiAnschluesse: ["Rezeption mündlich", "Rezeption audiovisuell"],
    kompetenzen: ["Menschenrechte verstehen", "Demokratische Werte kennen"],
    miniAktivitaet: {
      frage: "Was verbietet die Anti-Rassismus-Strafnorm (Art. 261bis StGB)?",
      optionen: [
        "Jede Kritik an der Regierung",
        "Hassrede gegen Gruppen wegen Rasse, Ethnie, Religion oder sexueller Orientierung",
        "Alle politischen Äusserungen im Internet",
        "Kritik an Unternehmen",
      ],
      korrekt: 1,
      erklaerung:
        "Die Anti-Rassismus-Strafnorm verbietet Hassrede und Diskriminierung gegen Gruppen wegen bestimmter Merkmale.",
    },
    anschluesse: [],
  },
  {
    id: "me-standpunkt",
    titel: "Einen eigenen Standpunkt entwickeln",
    zitat: "Eine gute Meinung entsteht nicht aus dem Bauch — sie braucht Argumente, Fakten und den Blick auf andere Perspektiven.",
    inhalt: `Einen eigenen Standpunkt zu haben bedeutet: Du weisst, was du denkst und warum. Das klingt einfach, aber es braucht Übung. Viele Menschen übernehmen Meinungen von Freunden, Familie oder Social Media, ohne selbst nachzudenken.

Um einen Standpunkt zu entwickeln, brauchst du eine Argumentationsstruktur. Ein gutes Argument hat drei Teile: Behauptung (Was meinst du?), Begründung (Warum meinst du das?) und Beispiel (Wie zeigt sich das in der Realität?). Wenn du so argumentierst, können andere deine Meinung nachvollziehen.

Es ist wichtig, verschiedene Perspektiven zu kennen. Bevor du dir eine Meinung bildest, frage dich: Wie sehen andere das? Welche Argumente haben sie? Warum denken sie anders? Perspektivenwechsel hilft dir, eine durchdachte Position zu finden — auch wenn du am Ende bei deiner Meinung bleibst.

In der Schule und im Beruf ist es wichtig, Meinungen klar auszudrücken. Ob in einem Kommentar, einer Präsentation oder einem Gespräch — wer klar argumentiert, wird ernst genommen und kann andere überzeugen.`,
    aspekte: ["Ethik", "Politik"],
    sprachmodiAnschluesse: ["Produktion mündlich", "Produktion schriftlich und bildlich"],
    kompetenzen: ["Argumentieren lernen", "Perspektiven einnehmen"],
    miniAktivitaet: {
      frage: "Was sind die drei Teile eines guten Arguments?",
      optionen: [
        "Einleitung, Hauptteil, Schluss",
        "Behauptung, Begründung, Beispiel",
        "These, Antithese, Synthese",
        "Frage, Antwort, Zusammenfassung",
      ],
      korrekt: 1,
      erklaerung:
        "Ein gutes Argument besteht aus Behauptung (Was meinst du?), Begründung (Warum?) und Beispiel (Wie zeigt sich das?).",
    },
    anschluesse: [],
  },
  {
    id: "me-kunst",
    titel: "Kunst und Meinung",
    zitat: "Kunst zeigt, was Worte manchmal nicht sagen können — sie macht Meinungen sichtbar und fühlbar.",
    inhalt: `Kunst ist mehr als Dekoration. Seit Jahrhunderten nutzen Menschen Kunst, um ihre Meinung auszudrücken: Bilder, Musik, Theater, Street Art, Filme oder Slam Poetry. Künstlerische Ausdrucksformen können politisch sein, ohne direkt zu argumentieren.

Ein Graffiti an einer Hauswand, ein Protestsong oder ein Dokumentarfilm — all das sind Formen, wie Menschen ihre Haltung zeigen. Kunst kann provozieren, zum Nachdenken anregen oder Emotionen auslösen. Sie spricht nicht nur den Verstand an, sondern auch das Gefühl.

Jede Kunstform ist von ihrer Zeit geprägt. Ein Protestlied aus den 1960er-Jahren hat einen anderen Hintergrund als ein heutiger Rap-Song über soziale Ungerechtigkeit. Wenn du Kunst betrachtest, frage dich: Was will die Künstlerin oder der Künstler sagen? In welcher Zeit ist das Werk entstanden? Welche Wirkung hat es auf mich?

Du kannst auch selbst künstlerisch aktiv werden. Schreibe einen Text, gestalte ein Plakat oder nimm ein kurzes Video auf. Kunst ist eine Möglichkeit, deine Meinung auszudrücken — auch wenn du nicht gerne vor anderen sprichst.`,
    aspekte: ["Kultur", "Ethik"],
    sprachmodiAnschluesse: ["Produktion schriftlich und bildlich"],
    kompetenzen: ["Künstlerische Ausdrucksformen verstehen", "Wirkung einschätzen"],
    miniAktivitaet: {
      frage: "Warum ist es wichtig, bei Kunst auch die Entstehungszeit zu beachten?",
      optionen: [
        "Weil alte Kunst nichts mehr wert ist",
        "Weil die Zeit die Bedeutung und den Hintergrund eines Werks beeinflusst",
        "Weil nur moderne Kunst politisch ist",
        "Weil Kunst nur im Museum wichtig ist",
      ],
      korrekt: 1,
      erklaerung:
        "Jede Kunstform ist von ihrer Zeit geprägt. Der historische Hintergrund hilft, die Aussage und Wirkung besser zu verstehen.",
    },
    anschluesse: [],
  },
  {
    id: "me-mitwirken",
    titel: "Politisch mitwirken",
    zitat: "Demokratie lebt davon, dass Menschen sich einmischen — auch junge Menschen.",
    inhalt: `In der Schweiz hast du viele Möglichkeiten, politisch mitzuwirken. Ab 18 kannst du abstimmen und wählen. Aber auch vorher kannst du aktiv werden: in der Schule, im Lehrbetrieb, in deiner Gemeinde oder online.

Es gibt verschiedene Wege, sich politisch einzusetzen. Du kannst eine Petition unterschreiben, an einer Demonstration teilnehmen, dich in einem Jugendparlament engagieren oder einen Leserbrief schreiben. Auch Social Media ist ein Werkzeug: Du kannst Informationen teilen, Diskussionen starten oder auf Missstände aufmerksam machen.

Um politisch wirksam zu sein, musst du dein Anliegen klar formulieren können. Was genau stört dich? Was soll sich ändern? Wer kann etwas tun? Je klarer du dein Anliegen formulierst, desto eher wirst du gehört. Ein Flyer, ein Factsheet oder ein kurzes Video können helfen, deine Botschaft zu verbreiten.

Durchsetzungsstrategien sind Wege, wie du deine Interessen vertreten kannst. Dazu gehören: Informieren und Überzeugen, Verbündete suchen, Kompromisse eingehen oder öffentlichen Druck aufbauen. Wichtig ist, dass du respektvoll bleibst und die demokratischen Spielregeln einhältst.`,
    aspekte: ["Politik", "Ethik"],
    sprachmodiAnschluesse: ["Produktion schriftlich und bildlich", "Interaktion und Kollaboration mündlich"],
    kompetenzen: ["Politische Mitwirkung kennen", "Anliegen formulieren"],
    miniAktivitaet: {
      frage: "Welches ist KEINE Form politischer Mitwirkung in der Schweiz?",
      optionen: [
        "Eine Petition unterschreiben",
        "An einer Abstimmung teilnehmen",
        "Einen Leserbrief schreiben",
        "Das Wahlresultat ignorieren",
      ],
      korrekt: 3,
      erklaerung:
        "Petitionen, Abstimmungen und Leserbriefe sind Formen politischer Mitwirkung. Das Ignorieren von Ergebnissen ist keine aktive Mitwirkung.",
    },
    anschluesse: [],
  },
  {
    id: "me-diskussionen",
    titel: "Diskussionen führen — respektvoll und klar",
    zitat: "In einer guten Diskussion gewinnt nicht der Lauteste, sondern die beste Argumentation.",
    inhalt: `Diskutieren ist eine wichtige Fähigkeit — in der Schule, im Betrieb und im Alltag. Eine gute Diskussion bedeutet nicht, dass alle am Ende gleicher Meinung sind. Es bedeutet, dass alle ihre Argumente einbringen und die anderen Meinungen respektieren.

Regeln für eine gute Diskussion: Lass andere ausreden. Höre aktiv zu — versuche zu verstehen, was die andere Person meint. Greife Argumente an, nicht Personen. Bleibe beim Thema. Wenn du merkst, dass du emotional wirst, mache eine kurze Pause.

In einer Gruppendiskussion geht es oft darum, gemeinsam eine Entscheidung zu treffen. Dafür braucht es Aushandlung: Jeder bringt seine Position ein, man sucht Gemeinsamkeiten und Kompromisse. Manchmal muss man die eigene Position anpassen, um eine Lösung zu finden, die für alle funktioniert.

Übung macht den Meister. Je öfter du in Diskussionen deine Meinung vertrittst, desto sicherer wirst du. Beginne in kleinen Gruppen oder zu Themen, die dich interessieren. Mit der Zeit wirst du merken: Wer gut argumentiert, wird ernst genommen — auch wenn andere anderer Meinung sind.`,
    aspekte: ["Ethik", "Politik"],
    sprachmodiAnschluesse: ["Interaktion und Kollaboration mündlich", "Produktion mündlich"],
    kompetenzen: ["Diskutieren lernen", "Aushandeln üben"],
    miniAktivitaet: {
      frage: "Was ist bei einer Diskussion am wichtigsten?",
      optionen: [
        "Immer das letzte Wort haben",
        "Argumente sachlich vorbringen und zuhören",
        "Möglichst laut sprechen",
        "Die eigene Meinung nie ändern",
      ],
      korrekt: 1,
      erklaerung:
        "In einer guten Diskussion bringt man sachliche Argumente vor und hört den anderen aktiv zu.",
    },
    anschluesse: [],
  },
];

// --- Quittungen ---

export const quittungen: QuittungDef[] = [
  {
    id: "quittung-meinungen-ressourcen",
    titel: "Ressourcen erarbeitet",
    beschreibung:
      "Du hast alle Grundlagen zum Thema Meinungen bilden und mitgestalten gelesen und die Verständnisfragen beantwortet.",
    erforderlicheSchritte: ressourcen.map((r) => r.id),
    kompetenzen: [
      "Informationen kritisch prüfen",
      "Medienkompetenz entwickeln",
      "Menschenrechte verstehen",
      "Argumentieren lernen",
      "Politische Mitwirkung kennen",
      "Diskutieren lernen",
    ],
  },
];

// --- Einleitung ---

export const einleitungMeinungen: ThemaEinleitung = {
  themaId: "meinungen",
  situationstext:
    "Du bist täglich mit einer Flut von Informationen konfrontiert — auf Social Media, in Nachrichten, in Gesprächen. Manchmal weisst du nicht, was stimmt und was nicht. Gleichzeitig erlebst du Diskussionen über Ungleichbehandlung, Ausgrenzung und politische Themen. Du möchtest mitreden, aber weisst nicht immer, wie du deine Meinung gut formulieren kannst. Dieses Thema hilft dir, Informationen kritisch zu prüfen, einen eigenen Standpunkt zu entwickeln und dich politisch einzubringen.",
  herausforderungen: [
    {
      id: "h-informationsflut",
      titel: "Was stimmt — und was ist Fake?",
      beschreibung:
        "Algorithmen bestimmen, was du siehst. Fake News sehen oft aus wie echte Nachrichten. Wie erkennst du, was vertrauenswürdig ist?",
      kompetenzHilfe: [
        {
          kompetenz: "Informationen kritisch prüfen",
          wieHilft:
            "Du lernst, Informationsquellen zu bewerten, Filterblasen zu erkennen und Fake News von seriösen Nachrichten zu unterscheiden.",
          ressourcenIds: ["me-informationsquellen"],
        },
      ],
    },
    {
      id: "h-grenzen",
      titel: "Was darf man sagen — und was nicht?",
      beschreibung:
        "Die Grenze zwischen Meinungsfreiheit und Diskriminierung ist oft unklar. Wie verhältst du dich in Diskussionen über Ausgrenzung?",
      kompetenzHilfe: [
        {
          kompetenz: "Menschenrechte verstehen",
          wieHilft:
            "Du verstehst die Grundlage der Meinungsfreiheit und erkennst, wo sie endet — zum Schutz der Würde anderer Menschen.",
          ressourcenIds: ["me-meinungsfreiheit"],
        },
      ],
    },
    {
      id: "h-standpunkt",
      titel: "Wie sage ich, was ich denke?",
      beschreibung:
        "Du hast eine Meinung, aber es fällt dir schwer, sie klar zu formulieren und überzeugend zu vertreten.",
      kompetenzHilfe: [
        {
          kompetenz: "Argumentieren lernen",
          wieHilft:
            "Du lernst, mit der Struktur Behauptung–Begründung–Beispiel zu argumentieren und verschiedene Perspektiven einzubeziehen.",
          ressourcenIds: ["me-standpunkt", "me-diskussionen"],
        },
      ],
    },
    {
      id: "h-mitwirkung",
      titel: "Wie kann ich etwas verändern?",
      beschreibung:
        "Du möchtest mitreden und mitgestalten, weisst aber nicht, wie du politisch aktiv werden kannst.",
      kompetenzHilfe: [
        {
          kompetenz: "Politische Mitwirkung kennen",
          wieHilft:
            "Du kennst verschiedene Wege der politischen Mitwirkung und kannst dein Anliegen klar formulieren.",
          ressourcenIds: ["me-mitwirken"],
        },
      ],
    },
  ],
};

// --- Handlungskompetenzen (SLP-Daten) ---

export const handlungskompetenzenMeinungen: ThemaHandlungskompetenzen = {
  themaId: "meinungen",
  lebensbezuege: [
    {
      nr: "2.1",
      text: "Ich bin täglich mit Informationen aus verschiedenen Quellen konfrontiert und merke, dass ich oft nicht weiss, was stimmt und was nicht und warum mir gerade diese Inhalte angezeigt werden.",
      lektionen: 9,
      lerninhalte: [
        {
          nr: "2.1.1",
          text: "Ich kann mündliche Beiträge zu aktuellen politischen Themen verstehen und die Interessen und Werte der betroffenen Personen identifizieren.",
          gesellschaftlicheInhalte: [
            "Politik: Aktuelle politische Themen, Interessengruppen, politische Grundhaltungen",
          ],
          sprachmodi: [
            "Rezeption mündlich: Zentrale Aussagen aus Gesprächen oder Audioquellen mithilfe von Hörhilfen verstehen und erkennen",
            "Rezeption audiovisuell: Zentrale Aussagen aus audiovisuellen Medien entnehmen",
          ],
        },
        {
          nr: "2.1.2",
          text: "Ich kann grundlegende Merkmale von Manipulation und Desinformation anhand von Medienbeiträgen erkennen und meinen Umgang mit digitalen Kommunikationsräumen reflektieren.",
          gesellschaftlicheInhalte: [
            "Technologische und digitale Transformation: Chancen und Risiken aktueller Technologien, algorithmische Steuerung von Inhalten, Filterblasen, Desinformation (Fake News)",
            "Politik: Beeinflussung und Manipulationsmöglichkeiten, Informations- und Meinungsfreiheit",
          ],
          sprachmodi: [
            "Rezeption schriftlich und bildlich: Grafiken mithilfe einer Lesestruktur lesen und verstehen",
            "Produktion schriftlich und bildlich: Eigene Mediennutzung dokumentieren und zwischen fakten- und meinungsbasierten Inhalten unterscheiden",
          ],
        },
      ],
    },
    {
      nr: "2.2",
      text: "Ich erlebe Diskussionen über Ungleichbehandlung und Ausgrenzung und frage mich, was gesagt werden darf und wie ich mich dabei verhalte.",
      lektionen: 12,
      lerninhalte: [
        {
          nr: "2.2.1",
          text: "Ich kann Beispiele von Ausgrenzung und Diskriminierung in Gesprächen und Medienbeiträgen analysieren und erklären, inwiefern sie die Meinungsfreiheit beeinflussen oder einschränken.",
          gesellschaftlicheInhalte: [
            "Ethik: Würde des Menschen, moralische Prinzipien",
            "Politik: Menschenrechte, demokratische Werte, Meinungsfreiheit",
          ],
          sprachmodi: [
            "Rezeption mündlich: Zentrale Aussagen von mündlichen Beiträgen anhand von Hörhilfen erkennen",
            "Rezeption audiovisuell: digitale Medieninhalte zu menschenrechtlichen Themen recherchieren und kritisch prüfen",
          ],
        },
        {
          nr: "2.2.2",
          text: "Ich kann aus Gesprächen und Medienbeiträgen unterschiedliche (politische) Perspektiven nachvollziehen, daraus eigene Standpunkte entwickeln und diese sprachlich klar und nachvollziehbar ausdrücken.",
          gesellschaftlicheInhalte: [
            "Ethik: Aushandlung von moralischen Entscheidungen, faire Vertretung von moralischen Überzeugungen",
            "Politik: Wahrnehmung eigener und fremder Interessen",
          ],
          sprachmodi: [
            "Produktion mündlich: In Gesprächen meinungsorientiert mithilfe einer Argumentationsstruktur kommunizieren",
            "Produktion schriftlich und bildlich: Meinungsorientierten Text verfassen (Kommentar)",
          ],
        },
        {
          nr: "2.2.3",
          text: "Ich kann Meinungen und Haltungen in künstlerischen Beiträgen erkennen und beschreiben und deren Wirkung auf mich einschätzen.",
          gesellschaftlicheInhalte: [
            "Kultur: künstlerische Ausdrucksformen und deren Wirkung, zeitliche Prägung",
          ],
          sprachmodi: [
            "Produktion schriftlich und bildlich: Künstlerische Ausdrucksformen beschreiben und kommentieren",
          ],
        },
      ],
    },
    {
      nr: "2.3",
      text: "Ich möchte mitreden, mitgestalten und ernst genommen werden bei Themen, die mich direkt oder indirekt betreffen.",
      lektionen: 9,
      lerninhalte: [
        {
          nr: "2.3.1",
          text: "Ich kann persönliche politische Anliegen formulieren und Möglichkeiten zur Mitwirkung aufzeigen.",
          gesellschaftlicheInhalte: [
            "Politik: Durchsetzungsstrategien eigener Interessen",
          ],
          sprachmodi: [
            "Produktion schriftlich und bildlich: Eigene Anliegen in einem digitalen Produkt (Flyer, Factsheet, Flugblatt) begründet festhalten",
          ],
        },
        {
          nr: "2.3.2",
          text: "Ich kann eine begründete Meinung zu einem aktuellen gesellschaftlichen Thema entwickeln und diese in Diskussionen nachvollziehbar und respektvoll vertreten.",
          gesellschaftlicheInhalte: [
            "Ethik: Aktive Aushandlung von moralischen und politischen Entscheidungen, Auseinandersetzung mit anderen Überzeugungen",
          ],
          sprachmodi: [
            "Interaktion und Kollaboration mündlich: In Gruppendiskussion politische Anliegen präsentieren, aushandeln und Gruppenentscheidungen mitentwickeln",
          ],
        },
      ],
    },
  ],
};
