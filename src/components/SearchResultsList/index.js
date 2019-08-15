import React from 'react';
import { List } from 'semantic-ui-react';
import SearchResultsListItem from '../SearchResultsListItem';

const SearchResultsList = props => {
  return (
    <List celled>
      {props.problems &&
        props.problems.map((problem, index) => (
          <SearchResultsListItem key={index} problem={problem} />
        ))}
    </List>
  );
};

export default SearchResultsList;
