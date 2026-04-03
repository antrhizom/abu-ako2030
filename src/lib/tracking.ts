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

// --- Ratings ---

const RATINGS_COLLECTION = "ako-ratings";

export interface AkoRating {
  userId: string;
  themaId: string;
  ressourceId: string;
  sterne: number; // 1-5
  timestamp: ReturnType<typeof serverTimestamp>;
}

export async function saveRating(
  userId: string,
  themaId: string,
  ressourceId: string,
  sterne: number
): Promise<void> {
  try {
    // Upsert: erst prüfen ob schon vorhanden
    const q = query(
      collection(db, RATINGS_COLLECTION),
      where("userId", "==", userId),
      where("themaId", "==", themaId),
      where("ressourceId", "==", ressourceId)
    );
    const snap = await getDocs(q);
    if (snap.empty) {
      await addDoc(collection(db, RATINGS_COLLECTION), {
        userId,
        themaId,
        ressourceId,
        sterne,
        timestamp: serverTimestamp(),
      });
    } else {
      // Update existing
      const { updateDoc } = await import("firebase/firestore");
      await updateDoc(snap.docs[0].ref, { sterne, timestamp: serverTimestamp() });
    }
  } catch (e) {
    console.warn("Rating fehlgeschlagen:", e);
  }
}

export async function getMyRatings(
  userId: string,
  themaId: string
): Promise<Map<string, number>> {
  try {
    const q = query(
      collection(db, RATINGS_COLLECTION),
      where("userId", "==", userId),
      where("themaId", "==", themaId)
    );
    const snap = await getDocs(q);
    const map = new Map<string, number>();
    snap.forEach((d) => {
      const data = d.data();
      map.set(data.ressourceId, data.sterne);
    });
    return map;
  } catch (e) {
    console.warn("Rating-Abfrage fehlgeschlagen:", e);
    return new Map();
  }
}

export async function getCommunityRatings(
  themaId: string
): Promise<Map<string, { avg: number; count: number }>> {
  try {
    const q = query(
      collection(db, RATINGS_COLLECTION),
      where("themaId", "==", themaId)
    );
    const snap = await getDocs(q);
    const agg = new Map<string, { total: number; count: number }>();
    snap.forEach((d) => {
      const data = d.data();
      const prev = agg.get(data.ressourceId) ?? { total: 0, count: 0 };
      agg.set(data.ressourceId, { total: prev.total + data.sterne, count: prev.count + 1 });
    });
    const result = new Map<string, { avg: number; count: number }>();
    agg.forEach((v, k) => result.set(k, { avg: Math.round((v.total / v.count) * 10) / 10, count: v.count }));
    return result;
  } catch (e) {
    console.warn("Community-Rating fehlgeschlagen:", e);
    return new Map();
  }
}

export function subscribeToMyRatings(
  userId: string,
  themaId: string,
  callback: (ratings: Map<string, number>) => void
): () => void {
  const q = query(
    collection(db, RATINGS_COLLECTION),
    where("userId", "==", userId),
    where("themaId", "==", themaId)
  );
  return onSnapshot(
    q,
    (snap) => {
      const map = new Map<string, number>();
      snap.forEach((d) => {
        const data = d.data();
        map.set(data.ressourceId, data.sterne);
      });
      callback(map);
    },
    (err) => console.warn("Rating-Subscription-Fehler:", err)
  );
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
