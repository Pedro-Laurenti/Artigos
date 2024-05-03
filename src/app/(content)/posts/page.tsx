import { Text, ContentsTypeTab } from "@/components";
import { Snippets as SnippetsContainer } from "@/containers";
import {WEBSITE_NAME} from '@/constants/_APP_SETUP'
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { snippetsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
export const metadata: Metadata = {
  title:'Posts',
  description: `Explore trechos de conteúdos já postados em ${WEBSITE_NAME}. Descubra dicas rápidas e insights para a sua jornada.`,
  keywords: 'trechos de tecnologia, dicas rápidas, exemplos de código, insights de codificação',
};


const Snippets = async () => {
   const allSnippets = await sanityFetch<SanityDocument>({
        query: snippetsQuery,
    });

  return (
    <section className="container px-3 md:pb-20 md:pt-10 pt-20">
      <div className="mt-19">
        <ContentsTypeTab />

        <Text
          title
          className="mb-8 mt-10 dark:text-appBlue-50 text-appBlue-100"
        >
          Posts
        </Text>
        <div className="flex flex-wrap">
          {
            allSnippets?.length > 0 ? (
              <SnippetsContainer 
                isArchive={false}
                snippets={allSnippets}
                noOfSnippet={9}
              />
            ) : <p>Nenhum Snippet encontrado</p>
          }
         
        </div>
      </div>
    </section>
  );
};

export default Snippets;
