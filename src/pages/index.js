import React from "react"

import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import { HeroHome } from "../components/HeroHome"
import { LastCars } from "../components/LastCars"

import { CardDeck } from "../components/CardDeck"

export default function () {
    return (
        <Layout>
            <Seo title="Home" />

            <HeroHome />

            <LastCars />

            <CardDeck />
        </Layout>
    )
}
