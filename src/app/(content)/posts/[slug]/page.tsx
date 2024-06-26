import { ArticleDetails ,} from "@/containers";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { postQuery,getRandomPostsQuery ,
  seriesRelatedPosts,snippetQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";


interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await sanityFetch<SanityDocument>({
    query: snippetQuery,
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


const SnippetsDetail = async ({ params }: { params: { slug: string } }) => {
  // const post = await getSnippet(params.slug);
  const post = await sanityFetch<SanityDocument>({
    query: snippetQuery,
    params,
});
const isSeries = post?.isSeries;
let relatedPosts;
if (isSeries) {
    // relatedPosts = await sanityFetch<SanityDocument>({
    //     query: seriesNextAndPerviousPostOfRelatedPost,
    //     params:{
    //         currentPostSlug:params?.slug,
    //         seriesSlug:post?.series?.slug?.current
    //     },
        
    // });
    relatedPosts = await sanityFetch<SanityDocument>({
        query: seriesRelatedPosts,
        params:{
            currentPostSlug:params?.slug,
            seriesSlug:post?.series?.slug?.current
        },
        
    });
} else {
    relatedPosts = await sanityFetch<SanityDocument>({
        query: getRandomPostsQuery,
        params:{
            currentPostSlug:params?.slug,
        },
    });
    
}
  return (
    <ArticleDetails
      post={post} 
      isSeries={isSeries}
      isSnippet={true}
      relatedPosts={relatedPosts}
    />
  );
};

export default SnippetsDetail;
