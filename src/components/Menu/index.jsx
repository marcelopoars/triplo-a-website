import React from "react"

import { Link } from "gatsby"

import { Social } from "../Social"

import * as S from "./styled"

export function Menu() {
    return (
        <S.MenuWrapper>
            <ul>
                <li>
                    <Link
                        activeStyle={{ color: "var(--primaryColor)" }}
                        to="/sobre-nos/"
                    >
                        Sobre nós
                    </Link>
                </li>
            </ul>
            <Social />
        </S.MenuWrapper>
    )
}
