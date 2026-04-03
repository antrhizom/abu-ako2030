import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebase";

// --- User Management ---

const USER_KEY = "ako-user";
const USERS_COLLECTION = "ako-users";
const ACTIVITIES_COLLECTION = "ako-activities";

export interface AkoUser {
  tiername: string;
  createdAt: ReturnType<typeof serverTimestamp>;
}

export function getStoredUser(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(USER_KEY);
}

export function setStoredUser(tiername: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(USER_KEY, tiername);
  }
}

export function clearStoredUser(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(USER_KEY);
  }
}

export async function registerUser(tiername: string): Promise<void> {
  try {
    await setDoc(doc(db, USERS_COLLECTION, tiername), {
      tiername,
      createdAt: serverTimestamp(),
    });
    setStoredUser(tiername);
  } catch (e) {
    console.warn("User-Registrierung fehlgeschlagen:", e);
    setStoredUser(tiername);
  }
}

export async function lookupUser(tiername: string): Promise<boolean> {
  try {
    const snap = await getDoc(doc(db, USERS_COLLECTION, tiername));
    if (snap.exists()) {
      setStoredUser(tiername);
      return true;
    }
    return false;
  } catch (e) {
    console.warn("User-Lookup fehlgeschlagen:", e);
    return false;
  }
}

// --- Activity Tracking ---

export interface AkoActivity {
  userId: string;
  themaId: string;
  stepId: string;
  stepType: "content" | "activity" | "quiz";
  completed: boolean;
  score?: number;
  timestamp: ReturnType<typeof serverTimestamp>;
}

export async function trackStep(
  userId: string,
  themaId: string,
  stepId: string,
  stepType: "content" | "activity" | "quiz",
  completed: boolean,
  score?: number
): Promise<void> {
  try {
    await addDoc(collection(db, ACTIVITIES_COLLECTION), {
      userId,
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

export function subscribeToCompletions(
  userId: string,
  themaId: string,
  callback: (completedIds: Set<string>) => void
): () => void {
  const q = query(
    collection(db, ACTIVITIES_COLLECTION),
    where("userId", "==", userId),
    where("themaId", "==", themaId),
    where("completed", "==", true)
  );
  return onSnapshot(
    q,
    (snap) => {
      const ids = new Set<string>();
      snap.forEach((d) => ids.add(d.data().stepId));
      callback(ids);
    },
    (err) => console.warn("Subscription-Fehler:", err)
  );
}

export async function getCompletedStepIds(
  userId: string,
  themaId: string
): Promise<Set<string>> {
  try {
    const q = query(
      collection(db, ACTIVITIES_COLLECTION),
      where("userId", "==", userId),
      where("themaId", "==", themaId),
      where("completed", "==", true)
    );
    const snap = await getDocs(q);
    const ids = new Set<string>();
    snap.forEach((d) => ids.add(d.data().stepId));
    return ids;
  } catch (e) {
    console.warn("Abfrage fehlgeschlagen:", e);
    return new Set();
  }
}

export async function getAllCompletedSteps(
  userId: string
): Promise<Map<string, Set<string>>> {
  try {
    const q = query(
      collection(db, ACTIVITIES_COLLECTION),
      where("userId", "==", userId),
      where("completed", "==", true)
    );
    const snap = await getDocs(q);
    const map = new Map<string, Set<string>>();
    snap.forEach((d) => {
      const data = d.data();
      if (!map.has(data.themaId)) map.set(data.themaId, new Set());
      map.get(data.themaId)!.add(data.stepId);
    });
    return map;
  } catch (e) {
    console.warn("Abfrage fehlgeschlagen:", e);
    return new Map();
  }
}
