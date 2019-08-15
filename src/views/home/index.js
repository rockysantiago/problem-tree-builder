import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import SearchBar from 'components/SearchBar';
import SuggestedTopics from 'components/SuggestedTopics';

import suggestedTopics from 'api/suggestedTopics.json';

const Home = () => {
  return (
    <Grid centered padded verticalAlign="middle" style={{ minHeight: '100vh' }}>
      <Grid.Column width={5} style={{ border: '1px solid', height: '280px' }}>
        <Header content="Start building your tree" size="huge" />
        <SearchBar />
        <SuggestedTopics suggestedTopics={suggestedTopics} />
      </Grid.Column>
    </Grid>
  );
};

export default Home;
