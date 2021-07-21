import React from "react"

import { Layout } from "../components/Layout"
import { Seo } from "../components/seo"
import { Container } from "../components/Container"

export default function () {
    return (
        <Layout>
            <Seo title="404" desvription="Página não encontrada" />

            <Container>
                <div style={{width: '100%', padding: '30vh 48px', textAlign: 'center'}}>
                    <h1>OPS!</h1>
                    <p>Esta página não existe.</p>
                </div>
            </Container>
        </Layout>
    )
}
