"use client";

import UserProvider from "./UserProvider";
import { ReactNode } from "react";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return <UserProvider>{children}</UserProvider>;
}
