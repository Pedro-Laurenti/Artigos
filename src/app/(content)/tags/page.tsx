import { Text, ContentsTypeTab } from "@/components";
import Link from "next/link";
import { WEBSITE_NAME } from "@/constants/_APP_SETUP";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getTagsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
    title: "Tags",
    description: `Explore o conteúdo marcado do ${WEBSITE_NAME}. Navegue por nossos insights tecnológicos e expertise em codificação com base em tags específicas.`,
    keywords: "tags, insights tecnológicos, expertise em codificação, tópicos específicos",
};

const Tags = async () => {
    const getAllTags = await sanityFetch<SanityDocument>({
        query: getTagsQuery,
    });
    return (
        <section className='container px-3 pt-20 md:pb-20 md:pt-10'>
            <div className='mt-19'>
                <ContentsTypeTab />

                <Text
                    title
                    className='mb-5 mt-10 text-appBlue-100 dark:text-appBlue-50'
                >
                    Tags
                </Text>
                <div className='flex flex-wrap items-center justify-start'>
                  

                  {
                    getAllTags?.length === 0 && <p>Nenhuma tag encontrada</p>
                  }
                  {/* @ts-ignore */}
                    {getAllTags?.map((tag, index) => {
                        const tagSlug = tag?.slug?.current;
                        return (
                            <Link
                                href={`/tags/${tagSlug}`}
                                key={index}
                                className='m-2'
                            >
                                <div
                                    className={`mx-2 flex transform cursor-pointer items-center bg-slate-900 px-2 py-1 font-semibold text-white transition
                duration-200  ease-in-out hover:scale-95 dark:bg-white
                dark:text-black
                `}
                                >
                                    <p className='line-clamp-1 px-2 py-1 text-sm uppercase'>
                                        # {tag.title}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Tags;
