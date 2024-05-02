import { Text } from "@/components";
import { About as AboutContainer } from "@/containers";
import {WEBSITE_NAME} from '@/constants/_APP_SETUP'
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { aboutQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
export const metadata: Metadata = {
  title:'Sobre',
  description: `Explore trechos de conteúdos já postados em ${WEBSITE_NAME}. Descubra dicas rápidas e insights para a sua jornada.`,
  keywords: 'trechos de tecnologia, dicas rápidas, exemplos de código, insights de codificação',
};


const About = async () => {
   const allAbout = await sanityFetch<SanityDocument>({
        query: aboutQuery,
    });

  return (
    <section className="container px-3 md:pb-20 md:pt-10 pt-20">
      <div className="mt-19">

        <Text
          title
          className="mb-8 mt-10 dark:text-appBlue-50 text-appBlue-100"
        >
          Sobre
        </Text>
        <div className="flex flex-wrap">
          {
            allAbout?.length > 0 ? (
              <AboutContainer 
                isArchive={false}
                about={allAbout}
                noOfAbout={9}
         />
            ) : <p>Nenhum Snippet encontrado</p>
          }
         
        </div>
      </div>
    </section>
  );
};

export default About;
