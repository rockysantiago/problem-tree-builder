import React from 'react';
import { Button, Grid, Segment } from 'semantic-ui-react';

import SearchFilter from '../SearchFilter';

const SearchResultsListMenu = ({ length }) => (
  <Segment basic style={{ paddingLeft: 0, paddingRight: 0 }}>
    <Grid verticalAlign="middle">
      <Grid.Column width={6}>
        {length > 1 ? `${length} results found` : `${length} result found`}
      </Grid.Column>
      <Grid.Column textAlign="right" width={10}>
        <SearchFilter />
        <Button basic content="Clear" />
        <Button basic content="Tile" style={{ marginRight: 0 }} />
      </Grid.Column>
    </Grid>
  </Segment>
);

export default SearchResultsListMenu;
