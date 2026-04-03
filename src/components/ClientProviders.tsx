"use client";

import BrowserIdProvider from "./BrowserIdProvider";
import { ReactNode } from "react";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return <BrowserIdProvider>{children}</BrowserIdProvider>;
}
