export const cssReset = `
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        text-rendering: optimizelegibility;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
    }

    #__next {
        height: 100vh;
    }

    a {
        text-decoration: none;
    }

    p a {
        text-decoration: underline;
    }

    address {
        font-style: normal;
    }

    sup {
        display: inline-block;
        vertical-align: text-top;
        position: relative;
        top: -0.5em;
        text-decoration: none;
    }

    button {
        appearance: none;
        outline: none;
    }
`;
