import React from 'react';

import SearchResultsListItem from '../SearchResultsListItem';
import SearchResultsListMenu from '../SearchResultsListMenu';
import { filterList } from 'utils';

import { StyledList } from './style';

const SearchResultsList = ({ items, onSelect, selected, filter }) => {
  const newItems = filterList(filter, items);
  return (
    <>
      <SearchResultsListMenu length={newItems.length} selected={selected} />
      <StyledList celled>
        {newItems &&
          newItems.map((item, index) => (
            <SearchResultsListItem
              key={index}
              item={item}
              onSelect={() => onSelect(item._listIndex)}
              disabled={selected && selected.length >= 3}
            />
          ))}
      </StyledList>
    </>
  );
};

export default SearchResultsList;
