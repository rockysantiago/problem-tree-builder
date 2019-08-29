import React, { Component } from 'react';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Grid, Header } from 'semantic-ui-react';

import SearchBar from 'components/SearchBar';
import SearchInput from 'components/SearchInput';
import SearchResultsList from 'components/SearchResultsList';
import Tree from 'components/Tree';

// Import Actions
import { searchProblems, selectProblem } from 'actions/problemActions';
import {
  setTopic,
  searchOptions,
  searchSubOptions,
  selectSubOption,
  selectOption
} from 'actions/topicActions';

class ComposeTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: props.topic.keyword
    };
  }

  /**
   * Triggers the search using the keyword and navigates
   * to the next page.
   */
  handleSearch = () => {
    const { keyword } = this.state;
    this.handleSuggestion(keyword);
  };

  handleSuggestion = keyword => {
    this.setState({ keyword });
    this.props.searchProblems(keyword);
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

  handleSelectResult = index => {
    const { activeType } = this.props.topic;
    if (activeType === 'problem') {
      this.props.selectProblem(index, this.props.problems.data);
    } else if (activeType === 'cause' || activeType === 'effect') {
      this.props.selectOption(index, activeType);
    }
  };

  handleSubSelection = selectedIndex => {
    const { activeType } = this.props.topic;
    if (activeType === 'sub-cause') {
      this.props.selectSubOption(selectedIndex, activeType);
    } else if (activeType === 'sub-effect') {
      this.props.selectSubOption(selectedIndex, activeType);
    }
  };

  initAddWithType = (activeType, parentIndex, listIndex) => {
    this.props.setTopic({
      activeType,
      activeIndex: parentIndex
    });

    if (activeType === 'cause' || activeType === 'effect') {
      this.props.searchOptions(this.props.topic.problem.text, activeType);
    } else if (activeType === 'sub-cause') {
      this.props.searchSubOptions(
        this.props.topic.causes[parentIndex].text,
        'cause',
        listIndex
      );
    } else if (activeType === 'sub-effect') {
      this.props.searchSubOptions(
        this.props.topic.effects[parentIndex].text,
        'effect',
        listIndex
      );
    }
  };

  render() {
    const { keyword } = this.state;
    const { problems, topic } = this.props;

    return (
      <Grid padded style={{ height: '100vh' }}>
        <Grid.Column width={11} style={{ height: '100%' }}>
          <Button onClick={() => navigate('/generate-tree')}>
            Generate Tree
          </Button>
          <Tree onDeleteSibling={this.handleSelectResult} />
        </Grid.Column>
        <Grid.Column
          width={5}
          style={{
            position: 'fixed',
            right: 0,
            bottom: 0,
            top: 0,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {topic.activeType === 'problem' && (
            <>
              {problems.isFetching ? (
                <h1>Loading...</h1>
              ) : (
                <>
                  <Header
                    content="Add a problem"
                    size="huge"
                    style={{ minHeight: 'auto' }}
                  />
                  <SearchBar
                    keyword={keyword}
                    onSearch={this.handleSearch}
                    onChange={this.handleChange}
                  />
                  <SearchResultsList
                    items={problems.data || []}
                    onSelect={this.handleSelectResult}
                  />
                </>
              )}
            </>
          )}

          {/* ADD CAUSES */}
          {topic.activeType === 'cause' && (
            <>
              {topic.isFetching ? (
                <h1>Loading...</h1>
              ) : (
                <>
                  <SearchInput
                    content="Adding a cause of:"
                    text={topic.problem.text}
                  ></SearchInput>
                  <SearchResultsList
                    items={topic._sourceCauses || []}
                    onSelect={this.handleSelectResult}
                    selected={topic.causes}
                  />
                </>
              )}
            </>
          )}
          {/* ADD SUB CAUSE */}
          {topic.activeType === 'sub-cause' && (
            <>
              {topic.isFetching ? (
                <h1>Loading...</h1>
              ) : (
                <>
                  <SearchInput
                    content="Adding a sub-cause of:"
                    text={topic.causes[topic.activeIndex].text}
                  ></SearchInput>
                  <SearchResultsList
                    items={topic.causes[topic.activeIndex]._sources || []}
                    onSelect={this.handleSubSelection}
                  />
                </>
              )}
            </>
          )}
          {/* ADD EFFECTS */}
          {topic.activeType === 'effect' && (
            <>
              {topic.isFetching ? (
                <h1>Loading...</h1>
              ) : (
                <>
                  <SearchInput
                    content="Adding an effect of:"
                    text={topic.problem.text}
                  ></SearchInput>
                  <SearchResultsList
                    items={topic._sourceEffects || []}
                    onSelect={this.handleSelectResult}
                    selected={topic.effects}
                  />
                </>
              )}
            </>
          )}
          {/* ADD SUB EFFECTS */}
          {topic.activeType === 'sub-effect' && (
            <>
              {topic.isFetching ? (
                <h1>Loading...</h1>
              ) : (
                <>
                  <SearchInput
                    content="Adding a sub-effect of:"
                    text={topic.effects[topic.activeIndex].text}
                  ></SearchInput>
                  <SearchResultsList
                    items={topic.effects[topic.activeIndex]._sources || []}
                    onSelect={this.handleSubSelection}
                  />
                </>
              )}
            </>
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchProblems,
      selectProblem,
      setTopic,
      searchOptions,
      searchSubOptions,
      selectSubOption,
      selectOption
    },
    dispatch
  );

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposeTree);
