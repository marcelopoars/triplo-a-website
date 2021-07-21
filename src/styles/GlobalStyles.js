import { createGlobalStyle } from "styled-components"

import { ResetCss } from "./ResetCss"
import { Variables } from "./Variables"
import { Typography } from "./Typography"

export const ClobalStyles = createGlobalStyle`
    ${ResetCss}
    ${Variables}
    ${Typography}
`
