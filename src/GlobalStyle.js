import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat', sans-serif;
    src: @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  }

  @font-face {
    font-family: 'Lato', sans-serif;
    src: @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700i&display=swap');
  }

  @font-face {
    font-family: MaterialIcons;
    src: @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
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
