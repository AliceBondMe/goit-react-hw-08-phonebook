const { createGlobalStyle } = require('styled-components');

export const GlobalStyle = createGlobalStyle`
    :root {
        --basic-color: #21b9ff;
        --darker-color: #1e9ad3;
        --lighter-color: #93d9fa;
        --basic-white: #ffffff;
        --accent-color: #ff9aff;
        --accent-color-2: #3dffc2;
    }


    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Rajdhani', 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        font-size: 18px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000000;
        color: var(--basic-white);
        position: relative;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }

    p, h1, h2, h3 {
        margin: 0;
    }

    ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    @keyframes pulsate {
    
  100% {

      text-shadow:
      0 0 4px var(--basic-white),
      0 0 11px var(--basic-white),
      0 0 19px var(--basic-white),
      0 0 40px var(--basic-color),
      0 0 80px var(--basic-color),
      0 0 90px var(--basic-color),
      0 0 100px var(--basic-color),
      0 0 150px var(--basic-color);
  
  }
  
  0% {

    text-shadow:
    0 0 2px #fff,
    0 0 4px #fff,
    0 0 6px #fff,
    0 0 10px var(--basic-color),
    0 0 45px var(--basic-color),
    0 0 55px var(--basic-color),
    0 0 70px var(--basic-color),
    0 0 80px var(--basic-color);

}}

@keyframes flicker {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      opacity: 0.95;
    }

    20%,
    24%,
    55% {
      opacity: 0;
    }
}


    
`;
