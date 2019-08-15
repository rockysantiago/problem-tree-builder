import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import getSuggestedTopics from 'api/suggestedTopics.json';
import SearchBar from 'components/SearchBar';
import SuggestedTopics from 'components/SuggestedTopics';

const Home = () => {
  const suggestedTopics = getSuggestedTopics;

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh'
      }}
    >
      <Grid
        style={{
          backgroundColor: 'white',
          width: '30%'
        }}
      >
        <Grid.Row>
          <Grid.Column>
            <Header size="huge">Start building your tree</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <label>Enter topic or keyword</label>
            <SearchBar />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <label>Suggested Topics</label>
            <div>
              <SuggestedTopics suggestedTopics={suggestedTopics} />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Home;
