import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat', , sans-serif;
    src: @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  }

  body {
    margin: 0;
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap');
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyle;
