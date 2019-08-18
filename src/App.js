import React from 'react';
import { Router } from '@reach/router';
import GlobalStyle from './GlobalStyle';
import Home from './views/home';
import ComposeTree from './views/composeTree';
import GenerateTree from 'views/generateTree';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Home path="/" />
        <ComposeTree path="compose" />
        <GenerateTree path="generate-tree" />
      </Router>
    </>
  );
};

export default App;
