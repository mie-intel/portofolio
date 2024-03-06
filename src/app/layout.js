import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Polikarpus",
  description: "Portofolio",
};

import { Sofia_Sans } from "next/font/google";

const sofia = Sofia_Sans({
  subsets: ["latin"],
  variable: "--font-sofia",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sofia.variable} ${inter.className}`}>{children}</body>
    </html>
  );
}
