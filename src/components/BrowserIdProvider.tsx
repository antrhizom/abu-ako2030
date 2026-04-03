"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getBrowserId } from "@/lib/tracking";

const BrowserIdContext = createContext<string>("");

export function useBrowserId() {
  return useContext(BrowserIdContext);
}

export default function BrowserIdProvider({ children }: { children: ReactNode }) {
  const [id, setId] = useState("");

  useEffect(() => {
    setId(getBrowserId());
  }, []);

  return (
    <BrowserIdContext.Provider value={id}>{children}</BrowserIdContext.Provider>
  );
}
