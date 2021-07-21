import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styled"

export function Logo() {
    return (
        <S.LogoWrapper>
            <StaticImage
                src="../../images/logo-triplo-a-seminovos-canoas-rs.png"
                alt="logo"
                width={400}
                quality={100}
                placeholder="NONE"
                formats={["AUTO", "WEBP", "AVIF"]}
            />
        </S.LogoWrapper>
    )
}
