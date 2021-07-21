import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import { Container } from "../Container"

import * as S from "./styled"

// grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));

export function LastCars() {
    return (
        <S.LastCarsWrapper>
            <h2>Carros que acabaram de chegar</h2>
            <p>Veja algumas de nossas novidades.</p>

            <Container>
                <S.Car>
                    <StaticImage
                        src="../../images/cars/renault-fluence-2-0-dynamique-16v-2014-preta-completo.jpg"
                        alt="RENAULT FLUENCE"
                        width={1280}
                        quality={100}
                        placeholder="BLURRED"
                        formats={["AUTO", "WEBP", "AVIF"]}
                        height={650}
                    />

                    <S.CarBody>
                        <h3>
                            RENAULT FLUENCE
                            <span>
                                2.0 DYNAMIQUE 16V / 2014 / PRETA / COMPLETO
                            </span>
                        </h3>
                    </S.CarBody>
                    <S.CarFooter>
                        <span>2014</span>
                        <span>04 portas</span>
                        <span>Automático</span>
                    </S.CarFooter>
                    <S.Buttom
                        href="https://autocarro.com.br/triploa/anuncio/renault-fluence-2-0-dynamique-16v-2014-preta/991610"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <S.CameraIcon />
                        Fotos e mais informações
                    </S.Buttom>
                </S.Car>

                <S.Car>
                    <StaticImage
                        src="../../images/cars/honda-civic-2-0-lxr-sedan-16v-2014-cinza-completo.jpg"
                        alt="HONDA CIVIC"
                        width={1280}
                        quality={100}
                        placeholder="BLURRED"
                        height={650}
                        formats={["AUTO", "WEBP", "AVIF"]}
                    />
                    <S.CarBody>
                        <h3>
                            HONDA CIVIC
                            <span>
                                2.0 LXR SEDAN 16V / 2014 / CINZA / COMPLETO
                            </span>
                        </h3>
                    </S.CarBody>
                    <S.CarFooter>
                        <span>2014</span>
                        <span>04 portas</span>
                        <span>Automático</span>
                    </S.CarFooter>
                    <S.Buttom
                        href="https://autocarro.com.br/triploa/anuncio/honda-civic-2-0-lxr-sedan-16v-2014-cinza/1116792"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <S.CameraIcon />
                        Fotos e mais informações
                    </S.Buttom>
                </S.Car>

                <S.Car>
                    <StaticImage
                        src="../../images/cars/fiat-uno-1-0-6v-2018-branco-completo.jpg"
                        alt="FIAT UNO"
                        width={1280}
                        quality={100}
                        placeholder="BLURRED"
                        formats={["AUTO", "WEBP", "AVIF"]}
                        height={650}
                    />
                    <S.CarBody>
                        <h3>
                            FIAT UNO
                            <span>1.0 DRIVE 6V / 2018 / BRANCA / COMPLETO</span>
                        </h3>
                    </S.CarBody>
                    <S.CarFooter>
                        <span>2018</span>
                        <span>04 portas</span>
                        <span>Manual</span>
                    </S.CarFooter>
                    <S.Buttom
                        href="https://autocarro.com.br/triploa/anuncio/fiat-uno-1-0-drive-6v-2018-branca/904019"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <S.CameraIcon />
                        Fotos e mais informações
                    </S.Buttom>
                </S.Car>

                <S.Car>
                    <StaticImage
                        src="../../images/cars/hyundai-hb20-style-16v-2018-marron-completo.jpg"
                        alt="HYUNDAI HB20"
                        width={1280}
                        height={650}
                        quality={100}
                        placeholder="BLURRED"
                        formats={["AUTO", "WEBP", "AVIF"]}
                    />
                    <S.CarBody>
                        <h3>
                            HYUNDAI HB20
                            <span>
                                1.6 COMFORT STYLE 16V / 2018 / MARROM / COMPLETO
                            </span>
                        </h3>
                    </S.CarBody>
                    <S.CarFooter>
                        <span>2018</span>
                        <span>04 portas</span>
                        <span>Manual</span>
                    </S.CarFooter>
                    <S.Buttom
                        href="https://autocarro.com.br/triploa/anuncio/hyundai-hb20-1-6-comfort-style-16v-2018-marrom/903612"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <S.CameraIcon />
                        Fotos e mais informações
                    </S.Buttom>
                </S.Car>
            </Container>
        </S.LastCarsWrapper>
    )
}
