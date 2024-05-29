import { Text, Breadcrumbs } from "@/components";
import { HomeArticles, Snippets } from "@/containers";
import { slugToTitle } from "@/utils/utils";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getTagRelatedSnippetQuery, getTagRelatedPostQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const snippets = await sanityFetch<SanityDocument[]>({
    query: getTagRelatedSnippetQuery,
    params,
  });

  const articles = await sanityFetch<SanityDocument[]>({
    query: getTagRelatedPostQuery,
    params,
  });

  const post = snippets.length > 0 ? snippets[0] : articles.length > 0 ? articles[0] : null;

  if (!post) {
    return {
      title: "Não encontrado",
      description: "Página não encontrada",
    };
  }

  return {
    title: slugToTitle(params.slug),
    description: post?.meta_description || "Descrição padrão",
  };
}

const TagDetail = async ({ params }: { params: { slug: string } }) => {
  const snippets = await sanityFetch<SanityDocument[]>({
    query: getTagRelatedSnippetQuery,
    params,
  });

  const articles = await sanityFetch<SanityDocument[]>({
    query: getTagRelatedPostQuery,
    params,
  });

  const title = slugToTitle(params.slug);

  return (
    <section className='container px-3 pt-20 md:pb-20 md:pt-10'>
      <div className='mt-19'>
        <Breadcrumbs pageName='Tag' pageSlug={title} pageLink='/tags' />
        <Text
          title
          className='mb-8 mt-10 capitalize text-appBlue-100 
          dark:text-appBlue-50'
        >
          {title}
        </Text>

        <div className={"flex flex-col flex-wrap"}>
          {snippets.length > 0 && (
            <Snippets
              isArchive={false}
              noOfSnippet={9}
              snippets={snippets}
            />
          )}
          {articles.length > 0 && (
            <HomeArticles
              isArchive={false}
              noOfArticle={9}
              articles={articles}
              isSeries={false}
              isExternal={false}
            />
          )}
          {snippets.length === 0 && articles.length === 0 && (
            <h1>Nenhum artigo encontrado </h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default TagDetail;