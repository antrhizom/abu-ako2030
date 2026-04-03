// Lebensbezüge und Anwendungskompetenzen pro Kompetenzart für Thema 1

export interface Lebensbezug {
  kompetenzart: "aspekt" | "sprachmodus" | "kompetenz";
  wert: string;
  lebensbezug: string;       // Wie betrifft das MEIN Leben?
  anwendung: string;          // Wo kann ich das konkret anwenden?
}

export const lebensbezuegeBerufsleben: Lebensbezug[] = [
  // Aspekte
  {
    kompetenzart: "aspekt",
    wert: "Identität & Sozialisation",
    lebensbezug: "Du findest dich in einer neuen Rolle als Lernende/r — zwischen Schule, Betrieb und eigenem Erwachsenwerden.",
    anwendung: "Reflektiere, wie sich dein Alltag verändert hat und welche neuen Verantwortungen du trägst.",
  },
  {
    kompetenzart: "aspekt",
    wert: "Wirtschaft",
    lebensbezug: "Du verdienst zum ersten Mal Geld und musst mit Lohn, Abzügen und Budget umgehen.",
    anwendung: "Erstelle ein einfaches Monatsbudget und verstehe deine Lohnabrechnung.",
  },
  {
    kompetenzart: "aspekt",
    wert: "Recht",
    lebensbezug: "Du bist Teil eines Vertrags mit Rechten und Pflichten — zum ersten Mal in deinem Leben.",
    anwendung: "Lies deinen eigenen Lehrvertrag und kenne deine Kündigungsfristen.",
  },
  // Sprachmodi
  {
    kompetenzart: "sprachmodus",
    wert: "Rezeption schriftlich und bildlich",
    lebensbezug: "Im Betrieb und in der Schule musst du ständig Texte, Formulare und Anleitungen lesen und verstehen.",
    anwendung: "Übe das Lesen von Gesetzestexten (OR) und offiziellen Dokumenten wie dem Lehrvertrag.",
  },
  {
    kompetenzart: "sprachmodus",
    wert: "Interaktion und Kollaboration mündlich",
    lebensbezug: "Du musst dich im Betrieb mit Vorgesetzten, Kolleg/innen und Kund/innen verständigen.",
    anwendung: "Übe ein Gespräch mit deiner Berufsbildnerin über ein Problem in der Probezeit.",
  },
  {
    kompetenzart: "sprachmodus",
    wert: "Interaktion und Kollaboration digital",
    lebensbezug: "Vieles läuft heute über E-Mail, Chat und digitale Tools — auch im Betrieb.",
    anwendung: "Schreibe eine professionelle E-Mail an das Berufsbildungsamt mit einer Frage.",
  },
  // Schlüsselkompetenzen
  {
    kompetenzart: "kompetenz",
    wert: "Verständnis fördern",
    lebensbezug: "Du stehst vor vielen neuen Begriffen und Zusammenhängen — das System verstehen ist der erste Schritt.",
    anwendung: "Erkläre einer Kollegin den Unterschied zwischen Brutto- und Nettolohn.",
  },
  {
    kompetenzart: "kompetenz",
    wert: "Ziele setzen und anpassen",
    lebensbezug: "Die Lehre ist ein Ziel — aber auf dem Weg braucht es Anpassungen und aktives Handeln.",
    anwendung: "Setze dir ein Ziel für die Probezeit und überprüfe es nach einem Monat.",
  },
  {
    kompetenzart: "kompetenz",
    wert: "Lebensphasen planen",
    lebensbezug: "Die Lehre ist eine wichtige Lebensphase — sie bestimmt die nächsten 3 Jahre und darüber hinaus.",
    anwendung: "Überlege, wo du in 3 Jahren stehen möchtest und was du dafür brauchst.",
  },
];
