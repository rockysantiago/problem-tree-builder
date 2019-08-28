import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchBar = ({ keyword, onChange, onSearch, size, width }) => {
  return (
    <>
      <Input
        action={{
          content: 'Search',
          onClick: () => onSearch()
        }}
        fluid={width ? false : true}
        icon="search"
        iconPosition="left"
        onChange={e => onChange(e.target.value)}
        placeholder="Enter topic or keyword"
        size={size}
        value={keyword}
        style={{ width }}
      />
    </>
  );
};

export default SearchBar;
