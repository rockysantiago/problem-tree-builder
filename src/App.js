import React from 'react';
import { Router } from '@reach/router';
import GlobalStyle from './GlobalStyle';
import Home from './views/home';
import Search from './views/search';
import GenerateTree from 'views/generateTree';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Home path="/" />
        <Search path="/search" />
        <GenerateTree path="/generate-tree" />
      </Router>
    </>
  );
};

export default App;
