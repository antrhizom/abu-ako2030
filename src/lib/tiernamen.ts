const TIERE = [
  "Luchs", "Adler", "Fuchs", "Dachs", "Biber", "Steinbock",
  "Murmeltier", "Eule", "Falke", "Wolf", "Hirsch", "Gemse",
  "Marder", "Otter", "Rabe", "Sperber", "Habicht", "Milan",
  "Salamander", "Hermelin", "Alpendohle", "Bartgeier", "Eisvogel",
  "Forelle", "Gämse", "Kolkrabe", "Schneehase", "Turmfalke",
  "Waldkauz", "Zauneidechse",
];

export function generateTiername(): string {
  const tier = TIERE[Math.floor(Math.random() * TIERE.length)];
  const code = String(Math.floor(1000 + Math.random() * 9000));
  return `${tier}-${code}`;
}

export function isValidTiername(name: string): boolean {
  return /^[A-Za-zÄÖÜäöü]+-\d{4}$/.test(name);
}
