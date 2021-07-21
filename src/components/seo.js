import React from "react"

import { Helmet } from "react-helmet"

export function Seo({ title, description }) {
    const siteName = "Triplo A Seminovos"
    const titlePage = title ? `${title} | ${siteName}` : siteName
    const siteUrl = "https://triploaseminovos.com.br"
    return (
        <Helmet
            htmlAttributes={{
                lang: "pt-br",
            }}
        >
            {/* SEO */}
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={siteUrl} />

            {/* Author */}
            <meta name="author" content={siteName} />
            <meta name="copyright" content={siteName} />

            {/* General tags */}
            <title>{titlePage}</title>
            <meta name="description" content={description} />
            {/* <meta name="image" content="/" /> */}

            {/* OpenGraph tags */}
            <meta property="og:locale" content="pt-BR" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={titlePage} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content="" /> */}
            {/* <meta property="og:image" itemprop="image" content="" /> */}
            <meta property="og:image:secure_url" itemprop="image" content="" />
            {/* <link itemprop="thumbnailUrl" href="" /> */}
            {/* <meta property="og:image:alt" content={titlePage} /> */}
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="600" />
        </Helmet>
    )
}
