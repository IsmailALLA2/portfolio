import type { Metadata, Viewport } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ismail ALLA — Full-Stack & Mobile Engineer",
  description:
    "Full-stack & mobile engineer based in Rabat, Morocco. Building scalable apps with Flutter, Spring Boot, and Angular. Author of AjiApp & Medzair.",
  keywords:
    "Ismail ALLA, full-stack engineer, mobile developer, Flutter, Spring Boot, Angular, GCP, AjiApp, Medzair, Rabat, Morocco",
  authors: [{ name: "Ismail ALLA" }],
  openGraph: {
    title: "Ismail ALLA — Full-Stack & Mobile Engineer",
    description:
      "Building scalable web & mobile products. Flutter · Spring Boot · GCP.",
    type: "website",
  },
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
    <html
      lang="en"
      className={`scroll-smooth ${syne.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-[#080B12] text-[#F0EDE8] font-inter antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
