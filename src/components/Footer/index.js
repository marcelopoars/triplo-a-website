import React from "react"

import * as S from "./styled"

export function Footer() {
    return (
        <S.FooterWrapper>
            <address>
                <p>
                    © {new Date().getFullYear()}, Triplo A - Seminovos. Todos os
                    direitos reservados. Rua Liberdade, 637 • Marechal Rondon,
                    Canoas / RS • CEP: 92020-240 • CNPJ: 31.794.802/0001-44
                </p>

                <p>
                    <span>
                        Fone:{" "}
                        <a
                            href="tel:5134771788"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            (51) 3477-1788
                        </a>
                    </span>{" "}
                    |{" "}
                    <span>
                        WhatsApp:{" "}
                        <a
                            href="tel:51991350657"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            (51) 99135-0657
                        </a>
                    </span>
                </p>
            </address>

            <p>
                Desenvolvido por{" "}
                <a
                    href="https://marcelopereira.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Marcelo Pereira
                </a>
            </p>
        </S.FooterWrapper>
    )
}
