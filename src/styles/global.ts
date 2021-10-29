import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;

        :focus {
            outline: none;
        }
    }

    html, body, .react-atividade-s5-login-refatorando-provider  {
        margin: 0;
        padding: 0;
        border: none;
        max-width: 100vw;
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

export default GlobalStyles;
