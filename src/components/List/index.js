import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import SearchBar from 'components/SearchBar';
import SuggestedTopics from 'components/SuggestedTopics';

const List = props => (
  <Segment>
    <Header
      size="small"
      style={{ fontWeight: 'normal', textTransform: 'uppercase' }}
    >
      Add a problem
    </Header>
    <SearchBar location={props.location} term={props.term} />
    <label>Suggested Topics:</label>
    <div>
      <SuggestedTopics
        location={props.location}
        suggestedTopics={props.suggestedTopics}
      />
    </div>
  </Segment>
);

export default List;
