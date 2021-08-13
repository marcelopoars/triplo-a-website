import styled from "styled-components"

export const FooterWrapper = styled.footer`
    width: 100%;
    padding: 64px 48px;
    background-color: var(--dark-800);
    text-align: center;

    font-size: 14px;
    line-height: 28px;
    
    p {
        color: var(--dark-100);
    }

    a {
        text-align: center;
        color: var(--primaryColor);

        :hover {
            color: var(--yellow-100);
            opacity: 0.8;
        }
    }


    > p {
        margin-top: 24px;

        a {
            color: var(--dark-100);
            font-weight: 700;
        }
    }

    @media (max-width: 768px) {
        padding: 48px 24px;
    }
`
