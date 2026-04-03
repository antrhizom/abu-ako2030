import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";
import HeaderUser from "@/components/HeaderUser";

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
        <ClientProviders>
          <header className="border-b border-zinc-200 bg-white">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
              <div className="flex items-baseline gap-4">
                <a href="/" className="text-lg font-bold tracking-tight">
                  ABU <span className="text-zinc-400 font-light">AKO 2030</span>
                </a>
                <nav className="hidden sm:flex gap-5 text-sm">
                  <a
                    href="/"
                    className="text-zinc-500 hover:text-zinc-900 transition-colors"
                  >
                    Start
                  </a>
                  <a
                    href="/themen"
                    className="text-zinc-500 hover:text-zinc-900 transition-colors"
                  >
                    Themen
                  </a>
                </nav>
              </div>
              <HeaderUser />
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-zinc-200 bg-white py-6 text-center text-xs text-zinc-400">
            ABU AKO 2030 — EFZ 3-jährig — SLP ABU 2030 Kanton Zürich
          </footer>
        </ClientProviders>
      </body>
    </html>
  );
}
