import React from 'react';
import { StyledInput } from './style';

const SearchBar = ({ keyword, onChange, onSearch, size, active }) => {
  return (
    <>
      <StyledInput
        action={{
          content: 'Search',
          onClick: () => onSearch()
        }}
        onChange={e => onChange(e.target.value)}
        placeholder="Enter topic or keyword"
        size={size}
        value={keyword}
        active={active}
      />
    </>
  );
};

export default SearchBar;
