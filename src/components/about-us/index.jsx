import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import { Container } from "../Container"

import * as S from "./styled"

export function AboutUs() {
    return (
        <S.AboutUsWrapper>
            <Container>
                <div>
                    <h1>Sobre nós</h1>
                    <S.BoxImage>
                        <StaticImage
                            src="../../images/banner-triplo-a-seminovos-canoas-rs.jpg"
                            alt="Triplo A Sominovos - Canoas RS"
                            width={1200}
                            height={400}
                            quality={100}
                            placeholder="BLURRED"
                            formats={["AUTO", "WEBP", "AVIF"]}
                        />
                    </S.BoxImage>
                    <p>
                        <strong>
                            Acreditamos que o melhor vendedor de uma empresa é o
                            comprador, porque através de uma excelente
                            negociação na aquisição de um produto, pode
                            disponibilizá-lo para venda com valores bastante
                            atraentes.
                        </strong>
                    </p>
                    <p>
                        Depois de anos trabalhando para as duas maiores
                        Multinacionais instaladas no país (Walmart e AMBEV),
                        resolvemos trazer a vantagem de uma boa negociação para
                        você, cliente interessado em adquirir um veículo novo,
                        seminovo ou usado.
                    </p>

                    <p>
                        Temos uma equipe de profissionais especializados para
                        proporcionar um excelente atendimento personalizado.
                        Nossos veículos passam por uma cuidadosa revisão e são
                        entregues com a garantia que você procura.
                    </p>
                    <p>
                        Trabalhando com as melhores financeiras do mercado,
                        oferecemos a você as melhores taxas e condições de
                        pagamento, para que possa realizar seu sonho e comprar
                        ou trocar o seu carro.
                    </p>
                </div>
                <address>
                    <h2>Contato</h2>
                    <p>
                        <strong>Fone:</strong> (51) 3477-1788
                    </p>
                    <p>
                        <strong>WhatsApp:</strong> (51) 99135-0657
                    </p>

                    <h2>Localização</h2>
                    <p>
                        Rua Liberdade, 637 - Mal. Rondon, Canoas - RS | CEP:
                        92020-240
                    </p>
                </address>
            </Container>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2056.3508470637553!2d-51.173700431331156!3d-29.911648499304288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc3bc956b59730b70!2sTriplo%20A%20-%20Seminovos!5e0!3m2!1spt-BR!2sbr!4v1585705941185!5m2!1spt-BR!2sbr"
                title="Mapa"
                width="100%"
                height="400"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
            ></iframe>
        </S.AboutUsWrapper>
    )
}
