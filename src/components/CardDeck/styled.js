import styled, { css } from "styled-components"

import { Car, CreditCard, Heart, Like } from "styled-icons/boxicons-solid"

const sharedStyles = css`
    max-width: 40px;
    margin-bottom: 16px;
`

export const IconLike = styled(Like)`
    ${sharedStyles}
`
export const IconHeart = styled(Heart)`
    ${sharedStyles}
`
export const IconCard = styled(CreditCard)`
    ${sharedStyles}
`
export const IconCar = styled(Car)`
    ${sharedStyles}
`

export const CardDeckWrapper = styled.section`
    padding: 92px 48px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--yellow-100);

    > h2 {
        font-size: 32px;
        margin-bottom: 48px;
    }

    > div {
        max-width: 920px;
        margin-bottom: 48px;
        padding: 0;

        gap: 64px 48px;
    }

    @media (max-width: 767px) {
        padding: 64px 24px;

        border-radius: 24px 24px 0 0;
    }
`

export const Card = styled.div`
    padding: 24px;

    background-color: var(--dark-800);
    color: var(--primaryColor);
    border-left: 10px double var(--primaryColor);
    border-radius: 8px;

    flex: 1 1 290px;

    h3 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 8px;
    }

    p {
        color: var(--yellow-100);
        line-height: 28px;
    }
`
export const Buttom = styled.a`
    display: inline-block;

    padding: 16px 32px;

    color: var(--primaryColor);
    background-color: var(--dark-800);
    border-radius: 8px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;

    transition: all 0.2s;

    &:hover {
        color: var(--dark-500);
        background-color: var(--primaryColor);
    }
`
