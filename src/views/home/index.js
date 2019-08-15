import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import suggestedTopicsJSON from 'api/suggestedTopics.json';
import SearchBar from 'components/SearchBar';
import SuggestedTopics from 'components/SuggestedTopics';

const Home = () => {
  return (
    <Grid centered padded verticalAlign="middle" style={{ minHeight: '100vh' }}>
      <Grid.Column width={5} style={{ height: '280px' }}>
        <Header content="Start building your tree" size="huge" />
        <SearchBar />
        <SuggestedTopics suggestedTopics={suggestedTopicsJSON} />
      </Grid.Column>
    </Grid>
  );
};

export default Home;
