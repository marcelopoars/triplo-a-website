import React from "react"

import * as S from "./styles"

export function Social() {
    return (
        <S.SocialWrapper>
            <ul>
                <li>
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Link Facebook"
                    >
                        <S.FacebookIcon />
                    </a>
                </li>

                <li>
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Link Instagram"
                    >
                        <S.InstagramIcon />
                    </a>
                </li>
            </ul>

            {/* <li>
                <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Link Whatsapp"
                >
                    <S.WhatsappIcon />
                </a>
            </li> */}
        </S.SocialWrapper>
    )
}
