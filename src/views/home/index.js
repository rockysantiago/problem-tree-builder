import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Header } from 'semantic-ui-react';
import suggestedTopicsJSON from 'api/suggestedTopics.json';
import SearchBar from 'components/SearchBar';
import SuggestedTopics from 'components/SuggestedTopics';
import { searchProblems } from '../../actions/problemActions';

class Home extends Component {
  handleSearch = (keyword) => {
    this.props.searchProblems(keyword);
  }; 

  render() {
    return (
      <Grid centered padded verticalAlign="middle" style={{ minHeight: '100vh' }}>
        <Grid.Column width={5} style={{ height: '280px' }}>
          <Header content="Start building your tree" size="huge" />
          <SearchBar search={this.handleSearch} />
          <SuggestedTopics suggestedTopics={suggestedTopicsJSON} />
        </Grid.Column>
      </Grid>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      searchProblems
    },
    dispatch
  );
}

function mapStateToProps(state) {
  console.log('STATUS : ', state);
  return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
