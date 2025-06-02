import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ismail Alla - Développeur Mobile",
  description:
    "Portfolio de Ismail Alla, développeur mobile expérimenté spécialisé en Flutter, Spring Boot, et développement d'applications performantes.",
  keywords:
    "développeur mobile, Flutter, Spring Boot, Android, portfolio, Ismail Alla",
  authors: [{ name: "Ismail Alla" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
