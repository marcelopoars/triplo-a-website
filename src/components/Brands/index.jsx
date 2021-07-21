import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import { Container } from "../Container"

import * as S from "./styled"

export function Brands() {
    return (
        <S.BrandsWrapper>
            <h2>Temos diversas marcas e modelos esperando por você.</h2>
            <p>Venha conhecer nossa loja.</p>

            <Container>
                <StaticImage
                    src="../../images/brands/alfaromeo.png"
                    alt="logo alfaromeo"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/audi.png"
                    alt="logo audi"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/bmw.png"
                    alt="logo bmw"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/chery.png"
                    alt="logo chery"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/chevrolet.png"
                    alt="logo chevrolet"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/citroen.png"
                    alt="logo citroen"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/fiat.png"
                    alt="logo fiat"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/ford.png"
                    alt="logo ford"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/honda.png"
                    alt="logo honda"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/hyundai.png"
                    alt="logo hyundai"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/jaguar.png"
                    alt="logo jaguar"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/jeep.png"
                    alt="logo jeep"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/kia.png"
                    alt="logo kia"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/mercedes.png"
                    alt="logo mercedes"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/mitsubishi.png"
                    alt="logo mitsubishi"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/nissan.png"
                    alt="logo nissan"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/peugeot.png"
                    alt="logo peugeot"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/renault.png"
                    alt="logo renault"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/ssangyong.png"
                    alt="logo ssangyong"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/toyota.png"
                    alt="logo toyota"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/volkswagen.png"
                    alt="logo volkswagen"
                    width={70}
                    quality={100}
                />
                <StaticImage
                    src="../../images/brands/volvo.png"
                    alt="logo volvo"
                    width={70}
                    quality={100}
                />

            </Container>
        </S.BrandsWrapper>
    )
}
