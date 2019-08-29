import React, { Component } from 'react';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid } from 'semantic-ui-react';

import { searchProblems } from 'actions/problemActions';
import SearchBar from 'components/SearchBar';

import { HeaderWrapper, HomeWrapper } from './style';

class Home extends Component {
  state = {
    keyword: ''
  };

  /**
   * Manages the modification of the keyword within the search field.
   *
   * @param {string} keyword
   * String value of the text field
   */
  handleChange = keyword => this.setState({ keyword });

  /**
   * Triggers the search using the keyword and navigates
   * to the next page.
   */
  handleSearch = () => {
    const { keyword } = this.state;
    this.props.searchProblems(keyword);
    navigate('/compose');
  };

  render() {
    return (
      <Grid centered verticalAlign="middle" style={{ minHeight: '100vh' }}>
        <Grid.Column width={10} style={{ height: '520px' }}>
          <HomeWrapper>
            <HeaderWrapper>Start building your tree</HeaderWrapper>
            <SearchBar
              onSearch={this.handleSearch}
              onChange={this.handleChange}
              size="huge"
              width="50%"
            />
          </HomeWrapper>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchProblems }, dispatch);

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
