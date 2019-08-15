import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import { navigate } from '@reach/router';

const SearchBar = props => {
  const [term, setTerm] = useState('');

  const handleClick = () => {
    navigate(`/search/${term}`);
  };

  const handleChange = event => setTerm(event.target.value);

  return (
    <Input
      action={{
        content: 'Search',
        onClick: handleClick
      }}
      fluid
      icon="search"
      iconPosition="left"
      onChange={handleChange}
      placeholder="e.g. beijing air pollution, environment"
      value={props.term}
    />
  );
};

export default SearchBar;
