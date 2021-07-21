import React from "react"

import { Link } from "gatsby"

import { Logo } from "../Logo"
import { Menu } from "../Menu"

import { Container } from "../Container"

import * as S from "./styled"

export function Header() {
    return (
        <S.HeaderWrapper>
            <Container>
                <Link to="/">
                    <Logo alt="Nome do site" />
                </Link>

                <Menu />
            </Container>
        </S.HeaderWrapper>
    )
}
