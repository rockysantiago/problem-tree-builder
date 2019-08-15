import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { Location, navigate } from '@reach/router';
import getSuggestedTopics from 'api/getSuggestedTopics';
import List from 'components/List';

const Search = props => {
  const suggestedTopics = getSuggestedTopics();

  return (
    <Grid style={{ minHeight: '100vh' }} columns="equal">
      <Grid.Column>
        <div>Tree</div>
        <div>
          <Button
            content="Generate Tree"
            onClick={() => navigate('/generate-tree')}
          />
        </div>
      </Grid.Column>
      <Grid.Column width={5}>
        <Location>
          {({ location }) => {
            return (
              <List
                location={location}
                suggestedTopics={suggestedTopics}
                term={props.term}
              />
            );
          }}
        </Location>
      </Grid.Column>
    </Grid>
  );
};

export default Search;
