"use client";

import articles from "@/assets/articles";

import Lottie from "lottie-react";
import ArticleCard from "@/components/ArticleCard";
import mainAnimation from "@/assets/mainAnimation.json";
import CTASection from "@/components/CTASection";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="bg-black ">
      <div className=" text-center sm:text-left bg-gradient-to-b from-slate-900 to-black text-white ">
        <div className="max-w-screen-lg mx-auto px-5 pt-10 md:pb-20 md:px-16 lg:px-24 2xl:px-auto sm:flex  sm:items-center ">
          <div className="sm:w-1/2">
            <h1 className="text-6xl lg:text-7xl font-bold mb-4">
              Marketing
              <br />
              Your Raise
            </h1>
            <p className="text-lg mb-4">
              Weekly Insights In Regulated
              <br />
              Investment Crowdfunding
            </p>
            <a
              href="#cta"
              className="text-white bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-blue-500 hover:to-cyan-600 focus:ring-4 focus:ring-blue-500 font-semibold rounded-lg text-lg px-10 py-2.5 focus:outline-none "
            >
              Sign Up
            </a>
          </div>
          <div className="sm:w-1/2">
            <Lottie animationData={mainAnimation} loop={true} />
          </div>
        </div>
      </div>

      <div id="stats">
        <div className="grid gap-10 sm:grid-cols-3 mx-auto mt-10 mb-20 max-w-screen-xl sm:mx-auto md:mb-20 md:w-5/6 lg:w-4/6">
          <div className="flex flex-col justify-center text-center">
            <h3 className="text-3xl sm:text-2xl  font-black uppercase text-cyan-400">
              $10M+ Raised
            </h3>
            <p>For Clients</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <h3 className="text-3xl sm:text-2xl  font-black uppercase text-cyan-400">
              60+ Sections
            </h3>
            <p>With Tips & Tricks</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <h3 className="text-3xl sm:text-2xl  font-black uppercase text-cyan-400">
              20+ Hours
            </h3>
            <p>Of Video Content</p>
          </div>
        </div>
      </div>

      <div
        id="blog"
        className="mx-5 mt-10 mb-20 max-w-screen-xl lg:mx-24 2xl:mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Marketing Insights
        </h2>
        <div className="grid w-full grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>

      <About />

      <CTASection />
    </div>
  );
}
