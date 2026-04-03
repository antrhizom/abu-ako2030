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

// Sprachmodi — Gelb/Amber-Töne (SLP Zürich Farbsystem)
export const sprachmodiFarben: Record<string, string> = {
  "Rezeption schriftlich und bildlich":        "bg-amber-100 text-amber-800 border-amber-300",
  "Rezeption mündlich":                        "bg-amber-50 text-amber-700 border-amber-200",
  "Rezeption audiovisuell":                    "bg-yellow-100 text-yellow-800 border-yellow-300",
  "Produktion schriftlich und bildlich":        "bg-amber-200 text-amber-900 border-amber-400",
  "Produktion mündlich":                        "bg-yellow-50 text-yellow-700 border-yellow-200",
  "Produktion multimedial":                     "bg-yellow-200 text-yellow-900 border-yellow-400",
  "Interaktion und Kollaboration mündlich":     "bg-orange-100 text-orange-800 border-orange-300",
  "Interaktion und Kollaboration schriftlich":  "bg-orange-50 text-orange-700 border-orange-200",
  "Interaktion und Kollaboration digital":      "bg-orange-200 text-orange-900 border-orange-400",
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
