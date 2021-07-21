import React from "react"

import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import { HeroHome } from "../components/HeroHome"
import { LastCars } from "../components/LastCars"

import { CardDeck } from "../components/CardDeck"

export default function () {
    return (
        <Layout>
            <Seo description="Pensou em comprar ou trocar de carro? Venha para a Triplo A - Seminovos!" />

            <HeroHome />

            <LastCars />

            <CardDeck />
        </Layout>
    )
}
