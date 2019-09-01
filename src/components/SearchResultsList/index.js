import React from 'react';

import SearchResultsListItem from '../SearchResultsListItem';
import SearchResultsListMenu from '../SearchResultsListMenu';
import { filterList } from 'utils';

import { StyledList } from './style';

const SearchResultsList = ({ items, onSelect, selected, filter, type }) => {
  const newItems = filterList(filter, items);

  return (
    <>
      <SearchResultsListMenu length={newItems.length} selected={selected} />

      <div
        style={{
          marginTop: '1em',
          height: '100%',
          overflow: 'auto',
          padding: '0'
        }}
      >
        <StyledList celled>
          {newItems &&
            newItems.map((item, index) => (
              <SearchResultsListItem
                key={index}
                item={item}
                onSelect={() => onSelect(item._listIndex)}
                disabled={selected && selected.length >= 3}
                type={type}
              />
            ))}
        </StyledList>
      </div>
    </>
  );
};

export default SearchResultsList;
