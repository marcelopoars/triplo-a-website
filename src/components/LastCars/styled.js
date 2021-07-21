import styled from "styled-components"

import { Camera } from "styled-icons/boxicons-regular"

export const LastCarsWrapper = styled.section`
    margin-bottom: 160px;
    padding: 0 48px;

    > h2,
    > p {
        text-align: center;
    }

    > h2 {
        font-size: 32px;
        margin-bottom: 16px;
    }

    > p {
        font-size: 24px;
        margin-bottom: 48px;
    }

    > div {
        padding: 0;
        gap: 48px 32px;
    }

    @media (max-width: 767px) {
        margin-top: -16px;
        margin-bottom: 92px;
        padding: 0 24px;

        border-radius: 24px 24px 0 0;

        > p {
            font-size: 16px;
            margin-bottom: 48px;
        }
    }
`

export const Car = styled.div`
    background-color: var(--yellow-100);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    flex: 1 1 280px;

    border-radius: 8px;

    img {
        border-radius: 8px 8px 0 0;
    }

    @media (max-width: 1251px) {
        /* margin-bottom: 30px; */
    }
`

export const CarBody = styled.div`
    padding: 16px;

    h3 {
        font-size: 24px;
    }

    span {
        display: inline-block;
        color: var(--dark-100);
        font-size: 14px;
        line-height: 1.45;
    }
    
`

export const CarFooter = styled.div`
    padding: 0 16px 16px;

    border-bottom: 1px solid var(--primaryColor);

    display: flex;
    gap: 4px;

    span {
        background-color: var(--primaryColor);

        font-size: 14px;
        text-align: center;

        border-radius: 8px;
        padding: 2px 4px;

        flex: 1;
    }
`

export const Buttom = styled.a`
    display: flex;
    align-items: center;

    margin: 16px;
    padding: 8px 16px;

    color: var(--primaryColor);
    background-color: var(--dark-500);
    border-radius: 8px;

    font-size: 14px;
    font-weight: 700;
    transition: all 0.2s;

    &:hover {
        color: var(--dark-500);
        background-color: var(--primaryColor);
    }
`

export const CameraIcon = styled(Camera)`
    height: 24px;
    margin-right: 8px;
`
