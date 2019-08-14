import React from 'react';
import { Grid } from 'semantic-ui-react';
import SearchBar from 'components/SearchBar';

const Home = () => (
  <div
    style={{
      alignItems: 'center',
      backgroundColor: '#282c34',
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100vh'
    }}
  >
    <Grid style={{ backgroundColor: 'white', width: '500px' }}>
      <Grid.Row>
        <Grid.Column>Start building your Tree</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          Enter topic or keyword
          <SearchBar />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>Suggested Topics</Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Home;
