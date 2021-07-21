import styled from "styled-components"

export const MenuWrapper = styled.nav`
    display: flex;
    align-items: center;
    gap: 48px;

    a {
        color: var(--yellow-100);

        :hover {
            color: var(--primaryColor);
        }
    }

    @media (max-width: 767px) {
        display: none;
    }
`
