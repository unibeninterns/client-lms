import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Learning Management System - DRID, University of Benin",
  description: "A Learning Management System for DRID, University of Benin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
