import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

const SearchBar = props => {
  return (
    <>
      <div style={{ marginBottom: '8px' }}>
        <label>Enter topic or keyword</label>
      </div>
      <Input
        action={{
          content: 'Search',
          onClick: () => props.onSearch()
        }}
        icon="search"
        iconPosition="left"
        fluid
        onChange={(e) => props.onChange(e.target.value)}
        placeholder="e.g. beijing air pollution, environment"
        value={props.keyword}
      />
    </>
  );
};

export default SearchBar;
