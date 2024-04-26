import Link from "next/link";
// import { ISnippet } from "@/shared/interfaces";
import { combineClasses } from "@/utils/utils";
import classes from "../Article/ArticleCards/ArticleCard.module.scss";
import { format } from "date-fns";



interface ISnippet {
  title: string;
  _createdAt: Date;
}

interface SnippetCardProps {
  snippet: ISnippet;
  path: string;
}

const SnippetCard = ({ snippet, path }: SnippetCardProps) => {
  const { _createdAt, title } = snippet;

  // const path: string = "/pages/blog/how-to-use-nextjs-with-tailwindcss";

  return (
    <div
      className={"w-full lg:w-full md:w-full md:px-[15px] px-2 mb-[30px] h-fit"}
    >
      <div
        className={combineClasses(
          classes.article_card,
          "border-b-[5px] border-appBlue-100 dark:border-appBlue-50 dark:bg-slate-800 dark:text-white dark:drop-shadow-lg flex flex-col justify-between pb-5"
        )}
      >
        <div>
          <div className={"d-block px-[15px] py-0"}>
            <p
              className={"font-bold text-xs pt-3 mb-0 md:mb-3 text-appBlue-100 dark:text-appBlue-50"}
            >
              <span className="pr-1">
                {" "}
                {format(new Date(_createdAt), " dd - MM - yyyy")}
              </span>
            </p>
            <Link href={path}>
              <h1
                className={
                  "text-[18px] font-bold cursor-pointer tracking-wide pt-3hover:text-appBlue-100 transition-colors duration-300 md:text-[22px]"
                }
              >
                {title}
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnippetCard;
