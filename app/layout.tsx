import type { Metadata } from "next";
import { MedievalSharp, Geist_Mono } from "next/font/google";
import "./globals.css";

const medievalSharp = MedievalSharp({
  weight: "400",
  variable: "--font-medieval-sharp",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medieval UI",
  description: "Medieval ui components based on shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${medievalSharp.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
