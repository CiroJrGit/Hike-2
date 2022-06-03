import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        max-width: 100vw;
        max-height: 100vh;
        width: 100%;
        height: 100%;
        color: ${props => props.theme.colors.text};
        background-color: ${props => props.theme.colors.background};
    }

    *, button, input {
        background: none;
        border: 0;
        font-family: -apple-system, system-ui, sans-serif;
        /* BlinkMacSystemFont, "Segoe UI", Roboto, 'Helvetica Neue', Ubuntu, Arial, */
    }
`;