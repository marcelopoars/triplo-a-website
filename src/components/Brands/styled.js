import styled from "styled-components"

export const BrandsWrapper = styled.div`
    background-color: var(--primaryColor);
    padding: 140px 48px;

    text-align: center;

    > h2 {
        font-size: 32px;
        margin-bottom: 16px;
    }

    > p {
        font-size: 24px;
        margin-bottom: 48px;
    }

    > div {
        max-width: 1350px;

        padding: 0;

        justify-content: center;
        gap: 48px;
    }

    @media (max-width: 768px) {
        padding: 92px 24px;
    }
`
