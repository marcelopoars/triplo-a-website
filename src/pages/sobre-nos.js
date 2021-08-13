import React from "react"

import { Seo } from "../components/seo"
import { Layout } from "../components/Layout"
import { AboutUs } from "../components/about-us"

export default function AboutUsPage() {
    return (
        <Layout>
            <Seo
                title="Sobre nós"
                description="Temos uma equipe de profissionais especializados, um excelente atendimento e nossos veículos passam por uma cuidadosa revisão e são entregues com a garantia que você procura."
            />

            <AboutUs />
        </Layout>
    )
}
