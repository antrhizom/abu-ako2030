"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getStoredUser } from "@/lib/tracking";

interface UserContextType {
  userId: string;
  isLoggedIn: boolean;
}

const UserContext = createContext<UserContextType>({ userId: "", isLoggedIn: false });

export function useUser() {
  return useContext(UserContext);
}

export default function UserProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const stored = getStoredUser();
    if (stored) {
      setUserId(stored);
      setIsLoggedIn(true);
    }

    // Listen for login events
    const handler = () => {
      const u = getStoredUser();
      if (u) {
        setUserId(u);
        setIsLoggedIn(true);
      }
    };
    window.addEventListener("ako-login", handler);
    return () => window.removeEventListener("ako-login", handler);
  }, []);

  return (
    <UserContext.Provider value={{ userId, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
}
