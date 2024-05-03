import { Text, ArticleContent } from "@/components";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getContactQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
    title: "Entre em contato",
    description:
        "Conecte-se conosco para obter um conteúdo excepcional. Entre em contato via LinkedIn, E-mail, Relatórios ou Sugestões. Sua contribuição importa!",
    keywords:
        "entre em contato, entre em contato, entre em contato, LinkedIn, e-mail, relatórios, sugestões, serviço ao cliente, consultas, feedback",
};

const Contact = async () => {
    const contact = await sanityFetch<SanityDocument>({
        query: getContactQuery,
    });
    const getFirstContact = contact[0];
    return (
        <>
            <section className='m-4 mt-20 dark:bg-slate-900 dark:text-white'>
                <div className='container px-0 pb-[20px] pt-[10px] md:px-[15px]'>
                    {contact?.length === 0 ? (
                        <p>Conteúdo não encontrado</p>
                    ) : (
                        <>
                            <Text
                                title
                                className='text-appBlue-100 dark:text-appRed-100'
                            >
                                {getFirstContact?.title}
                            </Text>

                            <div className='grid'>
                                <ArticleContent
                                    ARTICLE_CONTENT={getFirstContact?.body}
                                />
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    );
};

export default Contact;
