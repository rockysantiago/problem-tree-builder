import React from 'react';
import { Header } from 'semantic-ui-react';

const SearchResultsHeader = ({ content, text }) => (
  <Header size="huge">
    {content}
    <Header.Subheader>{text}</Header.Subheader>
  </Header>
);

export default SearchResultsHeader;
