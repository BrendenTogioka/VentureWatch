import Image from "next/image";
import ctaBanner from "@/assets/cta.webp";

export default function CTASection() {
  return (
    <div id="cta">
      <div className="relative m-auto mb-10 h-[400px] w-full max-w-screen-xl overflow-hidden md:mb-20 md:h-4/6 md:w-5/6 md:rounded-2xl lg:w-4/6">
        <Image
          src={ctaBanner}
          alt="cta banner"
          className="h-full w-full z-0 object-cover duration-700 ease-in-out scale-100 blur-0"
        />
        <div className="absolute z-10 left-8 top-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Ready to lift off?
          </h2>
          <p className="text-md sm:text-lg mb-4 w-1/2">
            Take your marketing efforts to the new heights with our blueprints
            to crowdfunding success.
          </p>
          <form action="" className="w-1/2 flex flex-col gap-2">
            <input
              type="text"
              className="rounded-lg text-sm px-3 py-2.5 text-stone-900"
            />
            <button className="text-white bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-blue-500 hover:to-cyan-600 focus:ring-4 focus:ring-blue-500 font-semibold rounded-lg text-lg px-10 py-2.5 focus:outline-none">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
