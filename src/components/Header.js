import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/venturewatch-logo.svg";

export default function Header() {
  return (
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
  );
}
