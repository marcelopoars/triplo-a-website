import styled from "styled-components"

import { ArrowheadDownOutline } from "styled-icons/evaicons-outline"

export const IconArrow = styled(ArrowheadDownOutline)`
    height: 48px;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(4px);
    }
`

export const HeroHomeWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    
    background-color: #feb100dd; /* #feb100cc */
    text-align: center;
    
    margin-bottom: 92px;
    padding: 64px 48px 32px;
    
    
    h1 {
        max-width: 650px;
        font-size: 64px;
    }

    p {
        font-size: 24px;

        span {
            white-space: nowrap;
        }
    }

    a {
        color: #333;
        transition: none;
    }

    @media (max-width: 767px) {
        margin-bottom: 64px;
        padding: 64px 24px 32px;

        h1 {
            font-size: 48px;
        }
    }
`
