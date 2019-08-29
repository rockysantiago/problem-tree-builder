import React from 'react';

import SearchResultsListItem from '../SearchResultsListItem';
import SearchResultsListMenu from '../SearchResultsListMenu';

import { StyledList } from './style';

const SearchResultsList = ({ items, onSelect, selected }) => {
  return (
    <>
      <SearchResultsListMenu length={items.length} selected={selected} />
      <StyledList celled>
        {items &&
          items.map((item, index) => (
            <SearchResultsListItem
              key={index}
              item={item}
              onSelect={() => onSelect(index)}
              disabled={selected && selected.length >= 2}
            />
          ))}
      </StyledList>
    </>
  );
};

export default SearchResultsList;
