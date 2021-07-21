import { css } from "styled-components"

export const Typography = css`
    body,
    input,
    textarea,
    select,
    span,
    strong,
    button {
        font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        line-height: 1.333;
    }

    h1,
    h2 {
        font-family: "Roboto";
        font-weight: 900;
        text-align: center;
    }

    body {
        background-color: #f9f9f9;
    }

    html {
        scroll-behavior: smooth;
    }

    button {
        cursor: pointer;
        appearance: none;
        border: none;
    }

    a {
        color: inherit;
        text-decoration: none;
        transition: all 0.2s;
    }

`
