import { combineClasses } from "@/utils/utils";
import Link from "next/link";

const ArticleTags = ({
  tags = [], // Torna o atributo tags opcional e define um valor padrão como um array vazio
  center = false,
  isLight = false,
}: {
  tags?: string[]; // Define tags como um array de strings opcional
  center?: boolean;
  isLight?: boolean;
}) => {
  const conditionalClass = !isLight
    ? "bg-gray-200 text-black dark:bg-slate-900 dark:text-white"
    : "bg-slate-900 text-white dark:bg-gray-200 dark:text-black ";

  return (
    <div
      className={combineClasses(
        "mt-2 mb-4 flex flex-wrap",
        center && "justify-center"
      )}
    >
      {tags.map((each: any, i) => (
        <Link
          href={`/tags/${each?.slug?.current}`} 
          key={i}
          className={`text-[10px]  mr-2 mb-1 inline-block bg-gray-200 text-black uppercase px-2.5 py-1.5 font-bold ${conditionalClass} md:text-[12px]`}
        >
          #{each.title}
        </Link>
      ))}
    </div>
  );
};

export default ArticleTags;