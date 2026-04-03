import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  onSnapshot,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebase";

export interface AkoActivity {
  browserId: string;
  themaId: string;
  stepId: string;
  stepType: "content" | "activity" | "quiz";
  completed: boolean;
  score?: number;
  timestamp: ReturnType<typeof serverTimestamp>;
}

const COLLECTION = "ako-activities";
const BROWSER_ID_KEY = "ako-browser-id";

export function getBrowserId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem(BROWSER_ID_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(BROWSER_ID_KEY, id);
  }
  return id;
}

export async function trackStep(
  browserId: string,
  themaId: string,
  stepId: string,
  stepType: "content" | "activity" | "quiz",
  completed: boolean,
  score?: number
): Promise<void> {
  try {
    await addDoc(collection(db, COLLECTION), {
      browserId,
      themaId,
      stepId,
      stepType,
      completed,
      ...(score !== undefined && { score }),
      timestamp: serverTimestamp(),
    });
  } catch (e) {
    console.warn("Tracking fehlgeschlagen:", e);
  }
}

export async function getCompletedStepIds(
  browserId: string,
  themaId: string
): Promise<Set<string>> {
  try {
    const q = query(
      collection(db, COLLECTION),
      where("browserId", "==", browserId),
      where("themaId", "==", themaId),
      where("completed", "==", true)
    );
    const snap = await getDocs(q);
    const ids = new Set<string>();
    snap.forEach((doc) => ids.add(doc.data().stepId));
    return ids;
  } catch (e) {
    console.warn("Abfrage fehlgeschlagen:", e);
    return new Set();
  }
}

export function subscribeToCompletions(
  browserId: string,
  themaId: string,
  callback: (completedIds: Set<string>) => void
): () => void {
  const q = query(
    collection(db, COLLECTION),
    where("browserId", "==", browserId),
    where("themaId", "==", themaId),
    where("completed", "==", true)
  );
  return onSnapshot(
    q,
    (snap) => {
      const ids = new Set<string>();
      snap.forEach((doc) => ids.add(doc.data().stepId));
      callback(ids);
    },
    (err) => console.warn("Subscription-Fehler:", err)
  );
}

export async function getStepScores(
  browserId: string,
  themaId: string
): Promise<Map<string, number>> {
  try {
    const q = query(
      collection(db, COLLECTION),
      where("browserId", "==", browserId),
      where("themaId", "==", themaId),
      where("completed", "==", true),
      orderBy("timestamp", "desc")
    );
    const snap = await getDocs(q);
    const scores = new Map<string, number>();
    snap.forEach((doc) => {
      const d = doc.data();
      if (d.score !== undefined && !scores.has(d.stepId)) {
        scores.set(d.stepId, d.score);
      }
    });
    return scores;
  } catch (e) {
    console.warn("Score-Abfrage fehlgeschlagen:", e);
    return new Map();
  }
}
