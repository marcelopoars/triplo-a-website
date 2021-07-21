import React from "react"

import { Seo } from "../components/Seo"
import { Layout } from "../components/Layout"
import { AboutUs } from "../components/about-us"

export default function () {
    return (
        <Layout>
            <Seo title="Sobre nós" />

            <AboutUs />
        </Layout>
    )
}
