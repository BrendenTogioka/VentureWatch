import { Inter } from "next/font/google";
import "./globals.css";
import logo from "@/assets/venturewatch-logo.svg";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VentureWatch",
  description: "Weekly Insights In Regulated Investment Crowdfunding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
