import { ArticleDetails ,} from "@/containers";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getRandomAboutsQuery,aboutQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";


interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await sanityFetch<SanityDocument>({
    query: aboutQuery,
    params,
});
  if (!post)
    return {
      title: "Não encontrado",
      description: "Página não encontrada",
    };

  return {
    title: post?.title,
    description: post?.meta_description,
    keywords:post?.meta_tags
  };
}


const AboutsDetail = async ({ params }: { params: { slug: string } }) => {
  // const post = await getAbout(params.slug);
  const post = await sanityFetch<SanityDocument>({
    query: aboutQuery,
    params,
});
  const relatedPosts = await sanityFetch<SanityDocument>({
    query: getRandomAboutsQuery,
    params,
});
  return (
    <ArticleDetails
     post={post} 
     isSeries={false}
     isSnippet={true}
    relatedPosts={relatedPosts}
    />
  );
};

export default AboutsDetail;
