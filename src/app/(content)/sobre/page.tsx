import { Flow, Text } from "@/components";
import { Abouts as AboutsContainer } from "@/containers";
import {WEBSITE_NAME} from '@/constants/_APP_SETUP'
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { aboutsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { ListLiNumber } from "@/components/Article/ArticleContent/TextEditorComponents";
export const metadata: Metadata = {
  title:'Sobre',
  description: `Explore trechos de conteúdos já postados em ${WEBSITE_NAME}. Descubra dicas rápidas e insights para a sua jornada.`,
  keywords: 'trechos de tecnologia, dicas rápidas, exemplos de código, insights de codificação',
};


const Abouts = async () => {
   const allAbouts = await sanityFetch<SanityDocument>({
        query: aboutsQuery,
    });

  return (
    <section className="container px-3 md:pb-20 md:pt-10 pt-20">
      <div className="mt-19">

        <Text
          title
          className="mb-8 mt-10 dark:text-appBlue-50 text-appBlue-100"
        >
          Saiba como participar
        </Text>
        <p>Ficou interessado em ter o seu artigo científico publicado na nossa plataforma?</p>
        <li>Cumpra os passos abaixo</li>
        <li>Participe gratuitamente</li>
        <li>Colabore para o desenvolvimento científico na área de terapia infantil.</li>
        <Flow />
        <Text
        title
          className="mb-8 mt-10 dark:text-appBlue-50 text-appBlue-100"
        >
          Leia mais
        </Text>
        <div className="flex flex-wrap">
          {
            allAbouts?.length > 0 ? (
              <AboutsContainer 
                isArchive={false}
                abouts={allAbouts}
                noOfAbout={9}
              />
            ) : <p>Nenhum arquivo encontrado</p>
          }
         
        </div>
      </div>
    </section>
  );
};

export default Abouts;
