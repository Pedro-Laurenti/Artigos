import { WEBSITE_URL } from "@/constants/_APP_SETUP";
import {
    postsQuery,
    getAuthorsQuery,
    getSeriesQuery,
    getLegalsQuery,
    snippetsQuery,
    aboutsQuery
} from "@/sanity/lib/queries";
import { createClient} from "next-sanity";
import clientConfig from "@/utils/sanity-client-config";
import { SanityDocument } from "@sanity/client";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export default async function sitemap() {
    const baseUrl = WEBSITE_URL;

    const posts = await createClient(clientConfig).fetch(postsQuery);

    const postUrls = posts?.map((post) => ({
        url: `${baseUrl}/post/${post?.slug?.current}`,
        lastModified: post?.updatedAt,
    }));

    const authors = await createClient(clientConfig).fetch(getAuthorsQuery)

    const authorsUrls = authors.map((author) => ({
        url: `${baseUrl}/author/${author?.slug?.current}`,
        lastModified: author?.updatedAt,
    }));

    const series = await createClient(clientConfig).fetch(getSeriesQuery)
    const seriesUrls = series.map((series) => ({
        url: `${baseUrl}/series/${series?.slug?.current}`,
        lastModified: series?.updatedAt,
    }));

    const snippets = await createClient(clientConfig).fetch(snippetsQuery)

    const snippetsUrls = snippets.map((snippet) => ({
        url: `${baseUrl}/posts/${snippet?.slug?.current}`,
        lastModified: snippet?.updatedAt,
    }));

    const abouts = await createClient(clientConfig).fetch(aboutsQuery)

    const AboutsUrls = abouts.map((about) => ({
        url: `${baseUrl}/sobre/${about?.slug?.current}`,
        lastModified: about?.updatedAt,
    }));

    const legals = await createClient(clientConfig).fetch(getLegalsQuery)
    const legalsUrls = legals.map((legal) => ({
        url: `${baseUrl}/institucional/${legal?.slug?.current}`,
        lastModified: legal?.updatedAt,
    }));

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/sobre`, lastModified: new Date() },
        { url: `${baseUrl}/contato`, lastModified: new Date() },
        { url: `${baseUrl}/perfis`, lastModified: new Date() },
        // { url: `${baseUrl}/external-articles`, lastModified: new Date() },
        // { url: `${baseUrl}/open-source`, lastModified: new Date() },
        { url: `${baseUrl}/tags`, lastModified: new Date() },
        { url: `${baseUrl}/artigos`, lastModified: new Date() },
        { url: `${baseUrl}/posts`, lastModified: new Date() },
        { url: `${baseUrl}/categorias`, lastModified: new Date() },
        { url: `${baseUrl}/series`, lastModified: new Date() },
        ...postUrls,
        ...authorsUrls,
        ...seriesUrls,
        ...snippetsUrls,
        ...AboutsUrls,
        ...legalsUrls,
    ];
}

export const dynamic = 'force-dynamic'