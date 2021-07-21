import styled from "styled-components"

export const AboutUsWrapper = styled.section`

    h1,
    h2 {
        text-align: left;
    }

    h1,
    h2 {
        font-size: 32px;
        margin-bottom: 16px;
    }

    p {
        line-height: 28px;
    }

    p + p {
        margin-top: 16px;
    }

    p {
        strong {
            font-weight: 700;
        }
    }

    > div {
        padding: 96px 48px;
        gap: 96px;

        div
         {
            flex: 1 1 448px;
            /* max-width: 448px; */
        }

        address p + h2 {
            margin-top: 48px;
        }
    }

    @media (max-width: 767px) {
        > div {
            padding: 48px 24px 24px;
            gap: 48px;
        }
    }
`

export const BoxImage = styled.div`
    margin-bottom: 32px;
`