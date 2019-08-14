import React from 'react';
import logo from './logo.svg';
import GlobalStyle, {
  AppWrapper,
  AppHeader,
  AppLogo,
  AppLink
} from './GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <AppLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </AppLink>
        </AppHeader>
      </AppWrapper>
    </>
  );
};

export default App;
