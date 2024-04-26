import { Text, Breadcrumbs } from "@/components";
import { HomeArticles } from "@/containers";
import { slugToTitle } from "@/utils/utils";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getCategoryRelatedPostQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await sanityFetch<SanityDocument>({
        query: getCategoryRelatedPostQuery,
        params,
    });
    if (!post)
        return {
            title: "Not Found",
            description: "The page is not found",
        };

    return {
        title: slugToTitle(params.slug),
        description: post?.meta_description,
    };
}

const CategoryDetail = async ({ params }: { params: { slug: string } }) => {
    const articles = await sanityFetch<SanityDocument>({
        query: getCategoryRelatedPostQuery,
        params,
    });
    const title = slugToTitle(params.slug);
    return (
        <section className='container px-3 pt-20 md:pb-20 md:pt-10'>
            <div className='mt-19'>
                <Breadcrumbs
                    pageName='Categories'
                    pageSlug={title}
                    pageLink='/categories'
                />
                <Text
                    title
                    className='mb-8 mt-10 capitalize text-appPurple-100 
          dark:text-appBlue-50'
                >
                    {title}
                </Text>
                <div className={"flex flex-col flex-wrap"}>
                    {articles?.length > 0 ? (
                        <HomeArticles
                            isArchive={false}
                            noOfArticle={9}
                            articles={articles}
                            isSeries={false}
                            isExternal={false}
                        />
                    ) : (
                        <h1>Nenhum artigo encontrado </h1>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CategoryDetail;