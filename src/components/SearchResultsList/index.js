import React from 'react';
import { List } from 'semantic-ui-react';
import SearchResultsListItem from '../SearchResultsListItem';

const SearchResultsList = props => {
  return (
    <List celled>
      {props.items &&
        props.items.map((item, index) => (
          <SearchResultsListItem
            key={index}
            item={item}
            onSelect={() => props.onSelect(index)}
          />
        ))}
    </List>
  );
};

export default SearchResultsList;
