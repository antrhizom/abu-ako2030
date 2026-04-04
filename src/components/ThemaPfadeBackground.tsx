"use client";

import { useEffect } from "react";

export default function ThemaPfadeBackground() {
  useEffect(() => {
    document.body.classList.add("thema-pfade");
    return () => {
      document.body.classList.remove("thema-pfade");
    };
  }, []);
  return null;
}
