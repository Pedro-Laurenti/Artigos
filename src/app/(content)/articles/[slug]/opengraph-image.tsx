/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og"; // Updated import path
import { urlFor } from "@/utils/sanity-utils";
import { postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "@sanity/client";

export const size = {
  width: 1300,
  height: 727,
};

export const contentType = "image/*"; // Corrected line

interface Props {
  params: {
    slug: string;
  };
}

export default async function og({ params }: Props): Promise<ImageResponse> {
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params,
  });

  // Assuming ImageResponse has a `body` property (adjust if different)
  const imageResponse = new ImageResponse(
    post?.mainImage?.asset?._ref,
    size,
  );

  // Return the ImageResponse object (use it as needed)
  return imageResponse;
}