import React from "react"

import { Container } from "../Container"

import * as S from "./styled"

export function CardDeck() {
    return (
        <S.CardDeckWrapper id="cardDeck">
            <h2>
                Procedência, qualidade,
                <br />
                atendimento e confiança
            </h2>

            <Container>
                <S.Card>
                    <S.IconLike />
                    <h3>Carros até 100% financiados</h3>
                    <p>SEM ENTRADA e parcelado em até 60 VEZES.</p>
                </S.Card>

                <S.Card>
                    <S.IconHeart />
                    <h3>Aposentados e pensionistas</h3>
                    <p>
                        SEM ENTRADA e SEM CONSULTA ao SPC/Serasa, em até 72
                        VEZES.
                    </p>
                </S.Card>

                <S.Card>
                    <S.IconCard />
                    <h3>Entrada em até 12x</h3>
                    <p>SEM JUROS, nos cartões de crédito.</p>
                </S.Card>

                <S.Card>
                    <S.IconCar />
                    <h3>UBER, 99POP e CABIFY</h3>
                    <p>Veículos até 100% financiados.</p>
                </S.Card>
            </Container>

            <S.Buttom
                href="https://autocarro.com.br/triploa"
                target="_blank"
                rel="noopener noreferrer"
            >
                Conheça nosso estoque
            </S.Buttom>
        </S.CardDeckWrapper>
    )
}
