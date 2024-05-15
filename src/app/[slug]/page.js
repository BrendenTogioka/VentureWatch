import articles from "@/assets/articles";
import Image from "next/image";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function Article({ params }) {
  const article = articles.find((article) => article.slug === params.slug);
  const filtered = articles.filter((article) => article.slug != params.slug);

  return (
    <div className="mt-20">
      <div>
        <div className="text-center mx-auto md:w-10/12">
          <p className="m-auto my-5 w-10/12 text-xs font-light text-stone-500 dark:text-stone-400 md:text-base">
            {article.publishDate}
          </p>
          <h1
            className="mb-10 mx-5 text-2xl 	sm:text-3xl font-bold text-stone-800 dark:text-white md:text-5xl "
            style={{ lineHeight: 1.5 }}
          >
            {article.title}
          </h1>
          <p className="text-md m-auto w-10/12 max-w-screen-md text-stone-600 dark:text-stone-400 md:text-lg">
            {article.description}
          </p>

          <div className="my-8  flex items-center justify-center gap-2 text-stone-300">
            <div className="bg-stone-600 rounded-full w-10 h-10 "></div> by
            Brenden Togioka
          </div>
        </div>
        <div className="relative m-auto mb-10 h-80 w-full max-w-screen-lg overflow-hidden md:mb-20 md:h-4/6 md:w-5/6 md:rounded-2xl lg:w-2/3">
          <Image
            src={article.featuredImage}
            alt={article.title}
            className="h-full w-full object-cover duration-700 ease-in-out scale-100 blur-0"
          />
        </div>
        <article className="mx-5 mt-10 mb-20 md:mx-auto text-stone-200 max-w-screen-md">
          <p>{article.post}</p>
        </article>
      </div>

      <div className="mx-5 mt-10 mb-20 max-w-screen-xl lg:mx-24 2xl:mx-auto">
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6">More Insights</h2>
        <div className="grid w-full grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  );
}
