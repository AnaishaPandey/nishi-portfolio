import type { Metadata } from "next";
import { Quicksand, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StarField from "@/components/decorations/StarField";
import { siteConfig } from "@/config/site.config";

const quicksand = Quicksand({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — My Portfolio`,
  description: siteConfig.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${nunito.variable} antialiased min-h-screen`}
      >
        <StarField />
        <Navbar />
        <main className="relative z-10 pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
