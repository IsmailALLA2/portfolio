import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ismail Alla - Ingénieur Full-Stack",
  description:
    "Portfolio de Ismail Alla, ingénieur logiciel full-stack. Je conçois, développe et mets en production des solutions web et mobiles robustes, avec un fort accent sur l'architecture, la qualité du code et la scalabilité.",
  keywords:
    "ingénieur full-stack, Java, Spring Boot, Angular, Flutter, architecture logicielle, portfolio, Ismail Alla",
  authors: [{ name: "Ismail Alla" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
