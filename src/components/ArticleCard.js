import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article }) {
  return (
    <Link href={`/${article.slug}`} key={article.id}>
      <div className="rounded-md overflow-hidden border-slate-700 border">
        <Image src={article.featuredImage} alt="postimg" />
        <div className="p-4">
          <h3 className="font-semibold text-xl tracking-wide dark:text-white">
            {article.title}
          </h3>
          <p className="text-md my-2 truncate italic text-stone-600 dark:text-stone-400">
            {article.description}
          </p>
          <p className="my-2 text-sm text-stone-600 dark:text-stone-400">
            Published {article.publishDate}
          </p>
        </div>
      </div>
    </Link>
  );
}
