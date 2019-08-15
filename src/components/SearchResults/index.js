import React from 'react';
import { Header } from 'semantic-ui-react';
import SearchBar from '../SearchBar';
import SearchResultsList from '../SearchResultsList';
import SuggestedTopics from '../SuggestedTopics';

const SearchResults = props => (
  <>
    <Header content="Add a problem" size="huge" />
    <SearchBar term={props.term} />
    <SuggestedTopics suggestedTopics={props.suggestedTopics} />
    <SearchResultsList problems={props.problems} />
  </>
);

export default SearchResults;
