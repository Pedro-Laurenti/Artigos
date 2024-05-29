import {
    HeroSection,
    HomeArticles,
    Snippets as SnippetsContainer,
} from "@/containers";
import { SanityDocument } from "@sanity/client";
import { postsQuery, snippetsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { Suspense } from "react";

import { Metadata } from 'next'
import { WEBSITE_NAME, META_DESCRIPTION } from '@/constants/_APP_SETUP'
import Flow from "@/components/Flow/Flow";
import Link from "next/link";
import Grid from "@/components/Grid/Grid";

export const metadata: Metadata = {
    openGraph: {
        title: WEBSITE_NAME,
        description: META_DESCRIPTION,
        url: 'https://artigos.therapieslovekids.com',
        images: [
            {
                url: '/src/app/opengraph-image.png',
                width: 1400,
                height: 700,
            },
            {
                url: '/src/app/opengraph-image.png',
                width: 1800,
                height: 1600,
                alt: 'Therapies Love Kids',
            },
        ],
        locale: 'pt-BR',
        type: 'website',
    },
};

interface SnippetsProps {
    snippets: SanityDocument[];
    isArchive: boolean;
    noOfSnippet: number;
}

interface HomeArticlesProps {
    articles: SanityDocument[];
    noOfArticle: number;
    isArchive: boolean;
    isSeries: boolean;
    isExternal: boolean;
}

export default async function Home() {
    const articles = await sanityFetch<SanityDocument[]>({
        query: postsQuery,
    });
    const allSnippets = await sanityFetch<SanityDocument[]>({
        query: snippetsQuery,
    });

    return (
        <>
            <div
                className={"font-regular bg-slate-100 pb-[20px] text-lg leading-relaxed text-black dark:bg-slate-900 dark:text-white md:min-h-screen"} key={Math.random()}
            >
                <HeroSection />

                <Suspense fallback={"Carregando"}>
                    <div className='container mx-auto mb-20 px-0 lg:px-[15px]'>
                        <div className={"flex flex-wrap"}>

                            <h1 className='mb-5 w-full px-3 text-xl font-bold md:text-3xl'>
                                Últimos artigos
                            </h1>

                            <hr className='border-1 mx-auto mb-5 w-[98%]' />
                            {articles?.length > 0 ? (
                                <HomeArticles
                                    noOfArticle={3}
                                    isArchive={true}
                                    articles={articles}
                                    isSeries={false}
                                    isExternal={false}
                                />
                            ) : (
                                <p>Ainda não temos nenhum artigo 😢</p>
                            )}
                        </div>
                    </div>
                </Suspense>

                <Grid />

                <div className='container mx-auto mt-20 px-0 lg:px-[15px]'>
                    <div className={"flex flex-wrap"}>
                        <h1 className='mb-5 w-full px-3 text-xl font-bold md:text-3xl'>
                            Últimos Posts
                        </h1>
                        <hr className='border-1 mx-auto mb-5 w-[98%]' />
                        {allSnippets?.length > 0 ? (
                            <SnippetsContainer
                                isArchive={true}
                                snippets={allSnippets}
                                noOfSnippet={3}
                            />
                        ) : (
                            <p>Ainda não temos nenhum post 😢</p>
                        )}
                    </div>
                </div>

                <div className="container mx-auto mt-20 mb-20 px-0 lg:px-[15px]">
                    <hr className='border-1 mx-auto mb-20 w-[98%]' />
                    <Link className={"rounded-3xl flex items-center justify-center bg-gradient-to-tl from-slate-300/80 to-slate-200/80 dark:from-slate-400/50 dark:to-slate-300/50 hover:text-appGray-100 hover:from-appBlue-200/50 hover:to-appBlue-50/50 dark:hover:from-appBlue-100/50 dark:hover:to-appBlue-50/50 shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)] hover:shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] dark:hover:shadow-[0.625rem_0.625rem_0.875rem_0_rgb(0,0,0,0.3),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255,0.1)] transition-all transform "}
                        href={`/sobre`}
                    >
                        <h1 className='text-xl py-5 font-bold md:text-3xl'>
                            Saiba como participar
                        </h1>
                    </Link>
                </div>
            </div>
        </>
    );
}