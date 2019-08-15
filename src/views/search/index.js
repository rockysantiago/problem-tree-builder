import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { navigate } from '@reach/router';
import suggestedTopics from 'api/suggestedTopics.json';
import List from 'components/List';

const Search = props => {
  return (
    <Grid celled padded style={{ height: '100vh' }}>
      <Grid.Column width={11}>
        <div>Tree</div>
        <div>Start building your tree</div>
        <div>Legend</div>
        <div>
          <Button
            content="Generate Tree"
            onClick={() => navigate('/generate-tree')}
          />
        </div>
      </Grid.Column>
      <Grid.Column width={5}>
        <List suggestedTopics={suggestedTopics} term={props.term} />
      </Grid.Column>
    </Grid>
  );
};

export default Search;
