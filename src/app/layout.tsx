import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "QuantumLab - Webflow Template",
  description: "Minimal, clean, and designed for creative professionals. QuantumLab Webflow Template with 16+ pages, 34+ components, and 25+ CMS collections.",
  keywords: ["QuantumLab", "Webflow", "Template", "Design", "Creative"],
  authors: [{ name: "QuantumLab" }],
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
