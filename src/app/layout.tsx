import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "Sarthak Gupta | Full-Stack Developer with Product Exposure",
description: "Portfolio of Sarthak Gupta, a full-stack developer building scalable web applications with a strong understanding of product requirements and user experience.",
keywords: [
  "full-stack developer",
  "software engineer",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "REST APIs",
  "product thinking",
  "technical product"
],

  authors: [{ name: "Sarthak Gupta" }],
  openGraph: {
    title: "Sarthak Gupta - Portfolio",
    description: "Full-Stack Developer with Product Exposure portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarthak Gupta - Portfolio",
    description: "Full-Stack Developer with Product Exposure portfolio",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
