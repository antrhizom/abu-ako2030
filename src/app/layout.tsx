import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABU AKO 2030 — Lehrmittel",
  description:
    "Schlankes, kompetenzorientiertes Lehrmittel für den Allgemeinbildenden Unterricht (EFZ)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-50 font-sans text-zinc-900">
        <header className="border-b border-zinc-200 bg-white">
          <div className="mx-auto flex max-w-5xl items-baseline gap-4 px-6 py-4">
            <a href="/" className="text-lg font-bold tracking-tight">
              ABU <span className="text-zinc-400 font-light">AKO 2030</span>
            </a>
            <span className="text-xs text-zinc-400">
              Allgemeinbildung kompetenzorientiert
            </span>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-200 bg-white py-6 text-center text-xs text-zinc-400">
          ABU AKO 2030 — EFZ 3-jahrig — SLP ABU 2030 Kanton Zurich
        </footer>
      </body>
    </html>
  );
}
