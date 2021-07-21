import styled from "styled-components"

export const ContainerWrapper = styled.div`
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
    padding: 0 48px;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 767px) {
        padding: 0 24px;

        justify-content: center;
    }
`
