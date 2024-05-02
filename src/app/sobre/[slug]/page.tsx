import { ArticleDetails ,} from "@/containers";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import {  getAboutsQuery,aboutsQuery, } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";


interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await sanityFetch<SanityDocument>({
    query: aboutsQuery,
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


const BlogDetail = async ({ params }: { params: { slug: string } }) => {
  // const post = await getSnippet(params.slug);
  const post = await sanityFetch<SanityDocument>({
    query: aboutsQuery,
    params,
});
  const relatedPosts = await sanityFetch<SanityDocument>({
    query: getAboutsQuery,
    params,
});
  return (
    <ArticleDetails
     post={post} 
     isSeries={false}
     isSnippet={false}
     isAbout={true}
     relatedPosts={relatedPosts}
    />
  );
};

export default BlogDetail;