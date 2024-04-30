import {
    HeroSection,
    HomeArticles,
    Snippets as SnippetsContainer,
} from "@/containers";
import { SanityDocument } from "@sanity/client";
import { postsQuery, snippetsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { Suspense } from "react";
import { Flow } from "@/components";

import { Metadata } from 'next'
import {WEBSITE_NAME,META_DESCRIPTION} from '@/constants/_APP_SETUP'

export const metadata: Metadata = {
    openGraph: {
        title: WEBSITE_NAME,
        description: META_DESCRIPTION,
        url: 'https://www.artigos.therapieslovekids.com',
        siteName: WEBSITE_NAME,
        images: [
          {
            url: '/opengraph-image.png',
            width: 1400,
            height: 700,
          },
          {
            url: '/opengraph-image.png',
            width: 1800,
            height: 1600,
            alt: 'Artigos Therapies Love Kids',
          },
        ],
        locale: 'pt_BR',
        type: 'website',
      },
  };


export default async function Home() {
    const articles = await sanityFetch<SanityDocument>({
        query: postsQuery,
    });
    const allSnippets = await sanityFetch<SanityDocument>({
        query: snippetsQuery,
    });

    return (
        <>
            <div
                className={
                    "font-regular bg-slate-100 pb-[20px] text-lg leading-relaxed text-black dark:bg-slate-900 dark:text-white md:min-h-screen"
                }
                key={Math.random()}
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

                <Flow />

                <div className='container mx-auto mt-20 px-0 lg:px-[15px]'>
                    <div className={"flex flex-wrap"}>
                        <h1 className='mb-5 w-full px-3 text-xl font-bold md:text-3xl'>
                            Últimos Snippets
                        </h1>
                        <hr className='border-1 mx-auto mb-5 w-[98%]' />
                        {allSnippets?.length > 0 ? (
                            <SnippetsContainer
                                isArchive={true}
                                snippets={allSnippets}
                                noOfSnippet={3}
                            />
                        ) : (
                            <p>Ainda não temos nenhum snippet 😢</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
