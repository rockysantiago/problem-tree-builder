import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import { navigate } from '@reach/router';

const SearchBar = () => {
  const [term, setTerm] = useState('');

  return (
    <Input
      action={{
        content: 'Search',
        onClick: () => {
          navigate(`/search/${term}`);
        }
      }}
      fluid
      icon="search"
      iconPosition="left"
      onChange={event => setTerm(event.target.value)}
      placeholder="e.g. beijing air pollution, environment"
    />
  );
};

export default SearchBar;
