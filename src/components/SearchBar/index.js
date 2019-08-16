import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import { navigate } from '@reach/router';

const SearchBar = props => {
  const [term, setTerm] = useState('');

  const handleClick = () => {
    // navigate(`/search/${term}`);
    props.search(term);
  };

  const handleChange = event => setTerm(event.target.value);

  return (
    <>
      <div style={{ marginBottom: '8px' }}>
        <label>Enter topic or keyword</label>
      </div>
      <Input
        action={{
          content: 'Search',
          onClick: handleClick
        }}
        icon="search"
        iconPosition="left"
        fluid
        onChange={handleChange}
        placeholder="e.g. beijing air pollution, environment"
        value={props.term}
      />
    </>
  );
};

export default SearchBar;
