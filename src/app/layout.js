import { Inter } from "next/font/google";
import "./globals.css";
import logo from "@/components/venturewatch-logo.svg";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VentureWatch",
  description: "Weekly Insights In Regulated Investment Crowdfunding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900`}>
        <nav className="flex flex-col items-center">
          <div className="w-[160px] sm:w-[260px] mx-auto my-4">
            <Link href="/">
              <Image src={logo} alt="VentureWatch logo" />
            </Link>
          </div>
          <ul className="flex gap-4 text-stone-200 font-medium">
            <li>
              <Link href="/">Course</Link>
            </li>
            <li>
              <Link href="#blog">Blog</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
