import { Text, ContentsTypeTab,ArticleAuthorCard } from "@/components";
import { Metadata } from "next";
import {WEBSITE_NAME} from '@/constants/_APP_SETUP'
import { SanityDocument } from "@sanity/client";
import { getAuthorsQuery} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { IAuthor } from "@/shared/interfaces";
import { Key } from "react";

export const metadata: Metadata = {
  title:'Authors',
  description: `Descubra a expertise coletiva dos autores do ${WEBSITE_NAME}. Explore insights, artigos e perspectivas tecnológicas de nossa equipe diversificada.`,
  keywords: 'autores, expertise coletiva, insights, artigos, perspectivas tecnológicas, equipe diversificada',
};

const Authors = async () => {
  const authors = await sanityFetch<SanityDocument>({
    query: getAuthorsQuery,
  });
  return (
    <section className="container px-3 md:pb-20 md:pt-10 pt-20">
      <div className="mt-19">
        <ContentsTypeTab />

        <Text
          title
          className="mb-5 mt-10 dark:text-appBlue-50 text-appBlue-100"
        >
          Autores 🎨 
        </Text>
        <div className="flex flex-wrap justify-start items-center">
          {/* @ts-ignore */}
          {
            authors?.map((author: IAuthor,index: Key | null | undefined)=> <ArticleAuthorCard
            author={author} key={index}
            />)
          }
         
         
        </div>
      </div>
    </section>
  );
};

export default Authors;
