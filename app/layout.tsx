import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const moreSugar = localFont({
  src: "../public/fonts/More-Sugar.ttf",
  variable: "--font-more-sugar",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kopi Tobi — Satu Cangkir. Seribu Cerita.",
  description:
    "Kopi Tobi bukan sekadar minuman. Ini ritual. Ini ruang. Ini milikmu. Hadir di jantung Sumedang.",
  keywords: ["kopi", "cafe", "sumedang", "kopi tobi", "coffee"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${dmSans.variable} ${moreSugar.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
