import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

    body {
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.fonts.main};
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.textMain};
        -webkit-font-smoothing: antialiased;
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;