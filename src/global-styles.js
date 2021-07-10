import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html {
    scroll-behavior: smooth;
}
button {
    width: 10rem;
    height: 3rem;
    border: none;
    outline: none;
    border-radius: 4px;
}
body {
    font-family: sans-serif;
}
`;
