import React from "react"

import { ClobalStyles } from "../../styles/GlobalStyles"

import { Header } from "../Header"
import { Brands } from "../Brands"
import { Footer } from "../Footer"
import { WhatsAppIcon } from "../WhatsAppIcon"


export function Layout({ children }) {
    return (
        <>
            <ClobalStyles />
            <Header />
            <main>{children}</main>
            <Brands />
            <Footer />
            <WhatsAppIcon />
        </>
    )
}
