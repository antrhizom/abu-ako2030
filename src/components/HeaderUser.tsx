"use client";

import { useUser } from "./UserProvider";
import { clearStoredUser } from "@/lib/tracking";

export default function HeaderUser() {
  const { userId, isLoggedIn } = useUser();

  if (!isLoggedIn) return null;

  return (
    <div className="flex items-center gap-2">
      <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
        {userId}
      </span>
      <button
        onClick={() => {
          clearStoredUser();
          window.location.href = "/login";
        }}
        className="text-xs text-zinc-400 hover:text-zinc-600"
      >
        Abmelden
      </button>
    </div>
  );
}
