import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import {Inter as FontSans} from 'next/font/google';

const fontSans = FontSans({ 
  subsets: ["latin"],
  variable: "--font-sans",
 });

export const metadata: Metadata = {
  title: "Co-Edit",
  description: "Collaborative Code Editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(`min-h-screen font-sans antialiased`, fontSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
