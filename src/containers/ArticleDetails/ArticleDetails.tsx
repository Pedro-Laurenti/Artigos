"use client"
import React, { RefObject } from "react";
import Link from "next/link";
import classes from "./ArticleDetails.module.scss";
import { combineClasses } from "@/utils/utils";
import {
  Seperator,
  ArticleHeader,
  ArticleContent,
  ArticelFooter,
  ReadingProgressLine,

} from "@/components";
import { AiOutlineArrowUp } from "react-icons/ai";

const Blog = ({ post, relatedPosts, isSnippet, isSeries, isAbout }: any) => {
  const target: RefObject<HTMLDivElement> = React.createRef();
  const authorInfo=post.author
  const isBrowser = () => typeof window !== 'undefined';

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <ReadingProgressLine target={target} />
      <section
        className={combineClasses(
          classes.centered_article_wrapper,
          "dark:bg-slate-900 dark:text-white"
        )}
      >
        <div className="flex flex-row-reverse">
          <div className="container px-0 md:px-[15px] pt-[50px] pb-[50px]">
            <article
              className={combineClasses(
                classes.article_content,
                "px-3  dark:text-white pt-10 md:pt-0 mx-auto font-regular text-lg leading-relaxed post"
              )}
              ref={target}
            >
              <ArticleHeader
                ARTICLE_DETAILS={post}
                isSnippet={isSnippet}
                isAbout={isAbout}
              />
              <div>
                <ArticleContent ARTICLE_CONTENT={post.body} />
              </div>
            </article>
            <Seperator />
            <p className="my-8 text-lg text-center">
              Gostou? <br /> Saiba como ter o seu artigo publicado:
            </p>
            <div className="w-full flex items-center">
              <Link
                href={"/sobre"}
                className="w-auto h-auto text-sm py-3 px-10 text-center dark:bg-slate-800 bg-appBlue-100 rounded-full mx-auto text-white font-bold hover:!text-white dark:hover:!text-slate-400 transition-all transform hover:scale-105"
              >
                Sobre
              </Link>
            </div>
            <Seperator />
            
            <div className={combineClasses(classes.author_and_more, "mx-auto")}>
              
              <ArticelFooter
                isSnippet={isSnippet}
                authorInfo={authorInfo}
                relatedPosts={relatedPosts}
                isSeries={isSeries}
                isAbout={isAbout}
              />
            </div>
          </div>

          <div className="fixed right-6 bottom-1 p-2">
            <button className="m-2 p-2 rounded-full border-2 opacity-75 hover:opacity-100 dark:bg-transparent " onClick={scrollToTop}>
              <AiOutlineArrowUp className="text-[25px] dark:text-white" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
