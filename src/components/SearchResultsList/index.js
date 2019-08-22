import React from 'react';
import { List } from 'semantic-ui-react';

import SearchResultsListItem from '../SearchResultsListItem';
import SearchResultsListMenu from '../SearchResultsListMenu';

const SearchResultsList = ({ items, onSelect, selected }) => {
  return (
    <>
      <SearchResultsListMenu length={items.length} selected={selected} />
      <List celled>
        {items &&
          items.map((item, index) => (
            <SearchResultsListItem
              key={index}
              item={item}
              onSelect={() => onSelect(index)}
              disabled={selected && selected.length >= 2}
            />
          ))}
      </List>
    </>
  );
};

export default SearchResultsList;
