import Image from "next/image";
import aboutImage from "@/assets/about.webp";
import atombeam from "@/assets/atombeam.png";
import boxabl from "@/assets/boxabl.png";
import avadain from "@/assets/avadain.png";

export default function About() {
  return (
    <div id="about">
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 md:gap-8 sm:items-center mx-5 my-40 max-w-screen-xl lg:mx-24 2xl:mx-auto ">
        <div className="mb-10 sm:mb-0 h-full">
          <Image src={aboutImage} alt="about image" className="" />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Battle tested investment crowdfunding experts
          </h2>
          <p className="mb-6">
            After working on top campaigns in the industry, we decided that it
            was time to shares the real world tactics that got our clients to
            their goals.
          </p>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center">
              <svg
                class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              200+ equity crowdfunding campaigns experience
            </li>
            <li className="flex items-center">
              <svg
                class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              $10M+ raised with clients
            </li>
            <li className="flex items-center">
              <svg
                class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Worked on 5 of the top 10 raises
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-4 md:gap-10 mx-5 my-40 max-w-screen-xl lg:mx-24 2xl:mx-auto">
        <div className="md:w-[300px]">
          <Image src={atombeam} alt="atombeam logo" />
        </div>
        <div className="md:w-[300px]">
          <Image src={boxabl} alt="boxabl logo" />
        </div>
        <div className="md:w-[300px]">
          <Image src={avadain} alt="avadain logo" />
        </div>
      </div>
    </div>
  );
}
