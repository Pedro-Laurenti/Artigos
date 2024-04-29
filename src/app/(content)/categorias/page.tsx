import { Text, ContentsTypeTab } from "@/components";
import { CategoryCard } from "@/components/";
import { Metadata } from "next";
import { WEBSITE_NAME, META_SEO_KEYWORDS } from "@/constants/_APP_SETUP";
import { SanityDocument } from "@sanity/client";
import { getCategoriesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
    title: "Categorias",
    description: `Explore diversas categorias de estudos científicos relacionados à terapia infantil na ${WEBSITE_NAME}.`,
    keywords: META_SEO_KEYWORDS,
};

const Categories = async () => {
    const categories = await sanityFetch<SanityDocument>({
        query: getCategoriesQuery,
    });
    return (
        <section className='container px-3 pt-20 md:pb-20 md:pt-10'>
            <div className='mt-19'>
                <ContentsTypeTab />

                <Text
                    title
                    className='mb-5 mt-10 text-appBlue-100 dark:text-appBlue-50'
                >
                    Categorias
                </Text>
                <div className='xs:grid-cols-2 grid grid-cols-1 gap-3 pb-4 md:grid-cols-3 lg:grid-cols-4 lg:pb-8'>
                    {/* @ts-ignore */}

                    {categories?.length > 0 ? (
                        categories?.map((category:any, index:number) => {
                            return (
                                <CategoryCard
                                    key={index}
                                    name={category.title}
                                    url={category.slug.current}
                                    total={category.postCount}
                                />
                            );
                        })
                    ) : (
                        <p>Nenhuma categoria encontrada</p>
                    )}
                   
                </div>
            </div>
        </section>
    );
};

export default Categories;
