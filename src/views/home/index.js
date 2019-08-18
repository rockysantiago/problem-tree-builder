import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Header } from 'semantic-ui-react';
import suggestedTopicsJSON from 'api/suggestedTopics.json';
import SearchBar from 'components/SearchBar';
import SuggestedTopics from 'components/SuggestedTopics';
import { searchProblems } from 'actions/problemActions';
import { navigate } from '@reach/router';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
  }

  /**
   * Triggers the search using the keyword and navigates
   * to the next page.
   */
  handleSearch = () => {
    const { keyword } = this.state;
    this.props.searchProblems(keyword);
    navigate('/compose');
  };

  handleSuggestion = keyword => {
    this.props.searchProblems(keyword);
    navigate('/compose');
  };

  /**
   * Manages the modification of value within the search field.
   *
   * @param {string} value
   * String value of the text field
   */
  handleChange = value => {
    this.setState({
      keyword: value
    });
  };

  render() {
    return (
      <Grid
        centered
        padded
        verticalAlign="middle"
        style={{ minHeight: '100vh' }}
      >
        <Grid.Column width={5} style={{ height: '280px' }}>
          <Header content="Start building your tree" size="huge" />
          <SearchBar
            onSearch={this.handleSearch}
            onChange={this.handleChange}
          />
          <SuggestedTopics
            suggestedTopics={suggestedTopicsJSON}
            onSelect={this.handleSuggestion}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      searchProblems
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
