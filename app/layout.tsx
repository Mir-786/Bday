import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Little Birthday Surprise 🎂",
  description: "A tiny corner of the internet made just for you.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}