// Zentraler Import für alle Themen-Daten
import { ressourcen as ressBerufsleben, quittungen as quitBerufsleben } from "./berufsleben";
import { einleitungBerufsleben } from "../inhalte/herausforderungen";
import { handlungskompetenzenBerufsleben } from "../inhalte/lebensbezuege";
import type { RessourcenBlockData, QuittungDef } from "./berufsleben";
import type { ThemaEinleitung } from "../inhalte/herausforderungen";
import type { ThemaHandlungskompetenzen } from "../inhalte/lebensbezuege";

export interface ThemaDaten {
  ressourcen: RessourcenBlockData[];
  quittungen: QuittungDef[];
  einleitung: ThemaEinleitung;
  handlungskompetenzen: ThemaHandlungskompetenzen;
}

// Wird dynamisch erweitert wenn Thema 2+3 Daten fertig sind
const datenMap: Record<string, () => ThemaDaten> = {
  berufsleben: () => ({
    ressourcen: ressBerufsleben,
    quittungen: quitBerufsleben,
    einleitung: einleitungBerufsleben,
    handlungskompetenzen: handlungskompetenzenBerufsleben,
  }),
};

// Lazy-load Thema 2 und 3 wenn vorhanden
try {
  const m = require("./meinungen");
  datenMap.meinungen = () => ({
    ressourcen: m.ressourcen,
    quittungen: m.quittungen,
    einleitung: m.einleitungMeinungen,
    handlungskompetenzen: m.handlungskompetenzenMeinungen,
  });
} catch { /* not yet */ }

try {
  const k = require("./konsum");
  datenMap.konsum = () => ({
    ressourcen: k.ressourcen,
    quittungen: k.quittungen,
    einleitung: k.einleitungKonsum,
    handlungskompetenzen: k.handlungskompetenzenKonsum,
  });
} catch { /* not yet */ }

export function getThemaDaten(themaId: string): ThemaDaten | null {
  const factory = datenMap[themaId];
  return factory ? factory() : null;
}
