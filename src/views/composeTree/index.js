import React, { Component } from 'react';
import { Button, Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import { bindActionCreators } from 'redux';
import { searchProblems, selectProblem } from 'actions/problemActions';
import problems from 'api/problems.json';
import suggestedTopicsJSON from 'api/suggestedTopics.json';
import SearchResults from 'components/SearchResults';
import SearchBar from 'components/SearchBar';
import SuggestedTopics from 'components/SuggestedTopics';
import SearchResultsList from 'components/SearchResultsList';


class ComposeTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: props.topic.keyword,
      type: 'problems' // Possible values: 'problems', 'effetcs', 'causes'
    };
  }

  /**
   * Triggers the search using the keyword and navigates
   * to the next page.
   */
  handleSearch = () => {
    const { keyword } = this.state;
    this.props.searchProblems(keyword);
  };

  handleSuggestion = (keyword) => {
    this.setState({
      keyword
    });
    this.props.searchProblems(keyword);
  }

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

  handleSelectResult = (index) => {
    const { type } = this.state;
    this.props.selectProblem(index, this.props[type].data)
  }

  render() {
    const { keyword } = this.state;
    const  { problems, topic } = this.props;

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

          {/* Problem section */}
          <div style={{ border: '1px solid red' }}>{JSON.stringify(topic.problem)}</div>

          {/* Cause section */}
          {topic.causes.length === 0 && <button>ADD CAUSES</button>}

          {topic.causes.length > 0 &&
            <div style={{ border: '1px solid green' }}>{JSON.stringify(topic.causes)}</div>
          }

        </Grid.Column>
        <Grid.Column width={5}>
          <Header content="Add a problem" size="huge" />
          <SearchBar keyword={keyword}  onSearch={this.handleSearch} onChange={this.handleChange} />
          <SuggestedTopics suggestedTopics={suggestedTopicsJSON} onSelect={this.handleSuggestion} />
          <SearchResultsList items={problems.data || []} onSelect={this.handleSelectResult} />
        </Grid.Column>
      </Grid>
    );
  }
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      searchProblems,
      selectProblem
    },
    dispatch
  );

const mapStateToProps = state => {
  console.log('CURRENT STATE : ', state);
  return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(ComposeTree);
