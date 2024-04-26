import { Text, ContentsTypeTab } from "@/components";
import { HomeArticles } from "@/containers";
import { WEBSITE_NAME } from "@/constants/_APP_SETUP";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getSeriesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
    title: "Séries",
    description: `Acompanhe nossas explorações detalhadas sobre terapia infantil, desenvolvimento emocional e muito mais.`,
    keywords: "séries de terapia infantil amorosa, terapia infantil, desenvolvimento emocional, exploração detalhada",
};

const Series = async () => {
    const articles = await sanityFetch<SanityDocument>({
        query: getSeriesQuery,
    });
    return (
        <section className='container px-3 pt-20 md:pb-20 md:pt-10'>
            <div className='mt-19'>
                <ContentsTypeTab />

                <Text
                    title
                    className='mb-5 mt-10 text-appBlue-100 dark:text-appBlue-50'
                >
                    Séries
                </Text>
                <div className={"flex flex-col flex-wrap"}>
                {
            articles?.length > 0 ? (
                <HomeArticles
                isArchive={false}
                noOfArticle={6}
                articles={articles}
                isSeries={true}
                isExternal={false}
            />
            ) : <p>Nenhuma série encontrada</p>
          }
                    
                </div>
            </div>
        </section>
    );
};

export default Series;
