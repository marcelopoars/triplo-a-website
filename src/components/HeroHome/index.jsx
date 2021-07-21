import React from "react"

import * as S from "./styled"

export function HeroHome() {
    return (
        <S.HeroHomeWrapper>
            <h1>Pensou em comprar ou trocar de carro?</h1>
            <p>
                Venha para a <span>Triplo A - Seminovos</span>!
            </p>

            <a
                href="#cardDeck"
                aria-label="Ir para seção Diferenciais da empresa"
            >
                <S.IconArrow />
            </a>
        </S.HeroHomeWrapper>
    )
}
