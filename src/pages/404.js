import React from "react"

import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import { Container } from "../components/Container"

export default function () {
    return (
        <Layout>
            <Seo title="404" />

            <Container>
                <div style={{width: '100%', padding: '30vh 48px', textAlign: 'center'}}>
                    <h1>OPS!</h1>
                    <p>Esta página não existe.</p>
                </div>
            </Container>
        </Layout>
    )
}