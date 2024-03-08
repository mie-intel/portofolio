import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manifesting HumPubIT 2024",
  description: "Portofolio",
};

import { Sofia_Sans } from "next/font/google";

const sofia = Sofia_Sans({
  subsets: ["latin"],
  variable: "--font-sofia",
});

import Link from "next/link";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sofia.variable} ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
