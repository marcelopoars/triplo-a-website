import React from "react"

import * as S from "./styles"

export function WhatsAppIcon() {
    return (
        <S.WhatsAppIconWrapper>
            <a
                href="https://api.whatsapp.com/send?phone=5551991350657&text=Ol%C3%A1!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link Whatsapp"
            >
                <S.WhatsappIcon />
            </a>
        </S.WhatsAppIconWrapper>
    )
}
