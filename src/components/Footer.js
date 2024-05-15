import Image from "next/image";
import Link from "next/link";
import logo from "@/components/venturewatch-logo.svg";

export default function Footer() {
  return (
    <footer className="border-t border-stone-800">
      <div className="flex flex-col  sm:justify-between mx-5 mt-10 mb-20 max-w-screen-xl lg:mx-24 2xl:mx-auto">
        <div className="w-[160px] sm:w-[220px] my-10 mx-auto">
          <Link href="/">
            <Image src={logo} alt="VentureWatch logo" />
          </Link>
        </div>
        <div className="mx-auto text-center">
          <h3 className="text-lg md:text-xl font-bold mb-6">Navigation</h3>
          <ul className="text-stone-400 flex flex-col gap-3">
            <li>
              <a href="">Course</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
