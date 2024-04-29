import { Text, ContentsTypeTab } from "@/components";
import { HomeArticles } from "@/containers";
import { Metadata } from "next";
import { WEBSITE_NAME, META_SEO_KEYWORDS } from "@/constants/_APP_SETUP";
import { SanityDocument } from "@sanity/client";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
    title: "Artigos",
    description: `Explore os artigos científicos da ${WEBSITE_NAME}.`,
    keywords: META_SEO_KEYWORDS,
};

const Article = async () => {
    const articles = await sanityFetch<SanityDocument>({
        query: postsQuery,
    });

    return (
        <section className='container px-3 pt-20 md:pb-20 md:pt-10'>
            <div className='mt-19'>
                <ContentsTypeTab />

                <Text
                    title
                    className='mb-5 mt-10 text-appBlue-100 dark:text-appBlue-50'
                >
                    Artigos
                </Text>
                <div className={"flex flex-col flex-wrap"}>
                    {articles?.length > 0 ? (
                        <HomeArticles
                            isArchive={false}
                            noOfArticle={6}
                            articles={articles}
                            isSeries={false}
                            isExternal={false}
                        />
                    ) : (
                        <p>Nenhum artigo encontrado</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Article;
