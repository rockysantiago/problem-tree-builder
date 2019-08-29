import React from 'react';
import { Header, Input } from 'semantic-ui-react';

const SearchInput = ({ content, text }) => (
  <>
    <Header size="huge" style={{ minHeight: 'auto' }}>
      {content}
      <Header.Subheader>{text}</Header.Subheader>
    </Header>
    <Input
      action={{ icon: 'add' }}
      actionPosition="left"
      fluid
      placeholder="Input your own"
    ></Input>
  </>
);

export default SearchInput;
