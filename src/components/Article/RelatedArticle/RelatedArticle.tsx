import { ArticleCard, SnippetCard, AboutCard } from "@/components";
import RelatedArticleCard from "../ArticleCards/RelatedArticleCard";

interface RelatedArticleProps {
    relatedPosts: any[];
    isSnippet: boolean;
    isSeries: boolean;
    isAbout: boolean;
}

const RelatedArticles: React.FC<RelatedArticleProps> = ({
    relatedPosts,
    isSnippet,
    isSeries,
    isAbout
}) => {
    return (
        <>
            <div className='container mx-auto mt-20 px-0 lg:px-[15px]'>
                <div className={"flex flex-wrap"}>
                    <h1 className='mb-5 w-full px-3 text-xl font-bold text-appBlue-100 dark:text-appRed-100 md:text-3xl'>
                        Leia mais {isSnippet ? "SNIPPETS" : "ARTIGOS"}
                    </h1>
                    <hr className='border-1 mx-auto mb-5 w-[98%]' />
                    {!isSnippet && relatedPosts?.length
                        ? relatedPosts 
                              .slice(0, 2)
                              .map((each: any, i: number) => (
                                  <RelatedArticleCard
                                      article={each}
                                      key={i + each._id}
                                      isExternal={false}
                                      previousPost={false}
                                      isSeries={false}
                                      path={`/artigos/${each.slug?.current}`} // Verifica se slug está definido antes de acessar current
                                  />
                              ))
                        : null}
                    {isSnippet && relatedPosts?.length
                        ? relatedPosts
                              .slice(0, 3)
                              .map((each: any, i: number) => (
                                  <SnippetCard
                                      snippet={each}
                                      key={i + each._id}
                                      path={`/snippets/${each.slug?.current}`} // Verifica se slug está definido antes de acessar current
                                  />
                              ))
                        : null}
                    
                    {/* Verifica se relatedPosts é um array vazio antes de acessar suas propriedades */}
                    {isSeries && !isSnippet && relatedPosts?.length === 0 && (
                        <p className={"mb-0 px-3 md:mb-3"}>
                            Atualmente, não há artigos disponíveis nesta série. Fique ligado para próximas atualizações!
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default RelatedArticles;