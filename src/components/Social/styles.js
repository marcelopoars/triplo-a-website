import styled, { css } from 'styled-components'
import { FacebookF, Instagram, Whatsapp } from 'styled-icons/fa-brands'

const sharedStyles = css`
    padding: 5px;
    color: #FEB100;
    height: 25px;
    cursor: pointer;
    transition: all 0.3s;
    box-sizing: content-box;

    &:hover {
        opacity: .8;
    }
`

export const FacebookIcon = styled(FacebookF)`
    ${sharedStyles}
    /* color: #3F77F3; */
`
export const InstagramIcon = styled(Instagram)`
    ${sharedStyles}
    /* color: #D32967; */
`
export const WhatsappIcon = styled(Whatsapp)`
    ${sharedStyles}
    /* color: #66D367; */
`

export const SocialWrapper = styled.aside`
    ul {
        display: flex;
        gap: 24px;
    }
`