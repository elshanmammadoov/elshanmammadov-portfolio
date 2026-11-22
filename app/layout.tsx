import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elshanmammadov.vercel.app"),
  title: "Elshan Mammadov — Security Researcher & Tech Founder",
  description:
    "Security researcher and tech founder in Baku focused on offensive web security, vulnerability research, and scalable, technology-driven ventures.",
  openGraph: {
    title: "Elshan Mammadov — Security Researcher & Tech Founder",
    description:
      "Offensive web security, vulnerability research, and technology-driven ventures in Baku.",
    url: "https://elshanmammadov.vercel.app",
    siteName: "Elshan Mammadov",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
