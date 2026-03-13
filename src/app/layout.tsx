import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Raffles English Studio | O Levels, A Levels & IELTS",
  description:
    "Singapore's premier English tuition studio. Expert coaching for O Levels, A Levels, and IELTS examinations. Achieve distinction with personalised guidance.",
  keywords: [
    "English tuition Singapore",
    "O Level English",
    "A Level General Paper",
    "IELTS preparation",
    "English studio Singapore",
    "Raffles English Studio",
  ],
  openGraph: {
    title: "The Raffles English Studio",
    description: "Singapore's premier English tuition studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
