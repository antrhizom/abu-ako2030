export const SPRACHMODI = [
  "Rezeption schriftlich und bildlich",
  "Rezeption mündlich",
  "Rezeption audiovisuell",
  "Produktion schriftlich und bildlich",
  "Produktion mündlich",
  "Produktion multimedial",
  "Interaktion und Kollaboration mündlich",
  "Interaktion und Kollaboration schriftlich",
  "Interaktion und Kollaboration digital",
] as const;

export type Sprachmodus = (typeof SPRACHMODI)[number];

export const sprachmodiFarben: Record<string, string> = {
  "Rezeption schriftlich und bildlich": "bg-sky-100 text-sky-800 border-sky-300",
  "Rezeption mündlich": "bg-sky-50 text-sky-700 border-sky-200",
  "Rezeption audiovisuell": "bg-sky-50 text-sky-600 border-sky-200",
  "Produktion schriftlich und bildlich": "bg-teal-100 text-teal-800 border-teal-300",
  "Produktion mündlich": "bg-teal-50 text-teal-700 border-teal-200",
  "Produktion multimedial": "bg-teal-50 text-teal-600 border-teal-200",
  "Interaktion und Kollaboration mündlich": "bg-purple-100 text-purple-800 border-purple-300",
  "Interaktion und Kollaboration schriftlich": "bg-purple-50 text-purple-700 border-purple-200",
  "Interaktion und Kollaboration digital": "bg-purple-50 text-purple-600 border-purple-200",
};

export const sprachmodiKurz: Record<string, string> = {
  "Rezeption schriftlich und bildlich": "Lesen & Bilder",
  "Rezeption mündlich": "Zuhören",
  "Rezeption audiovisuell": "Videos & Medien",
  "Produktion schriftlich und bildlich": "Schreiben & Gestalten",
  "Produktion mündlich": "Sprechen",
  "Produktion multimedial": "Medien erstellen",
  "Interaktion und Kollaboration mündlich": "Gespräch & Austausch",
  "Interaktion und Kollaboration schriftlich": "Schriftlicher Austausch",
  "Interaktion und Kollaboration digital": "Digitale Zusammenarbeit",
};
