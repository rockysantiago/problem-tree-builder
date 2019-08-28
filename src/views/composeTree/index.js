import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import suggestedTopicsJSON from 'api/suggestedTopics.json';
import SearchBar from 'components/SearchBar';
import SearchInput from 'components/SearchInput';
import SuggestedTopics from 'components/SuggestedTopics';
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
      <Grid padded>
        <Grid.Column width={11} style={{ border: '1px solid red' }}>
          {/* Effects section */}
          <Tree data={topic} />
          {topic.effects.length === 0 && topic.problem.text && (
            <button onClick={() => this.initAddWithType('effect')}>
              ADD EFFECTS
            </button>
          )}
          {topic.effects.length > 0 &&
            topic.effects.map((effect, idx) => (
              <div style={{ border: '1px solid blue' }}>
                <p>{effect.text}</p>
                <button
                  onClick={() =>
                    this.props.setTopic({
                      activeType: 'effect',
                      activeIndex: idx
                    })
                  }
                >
                  Add another effect
                </button>
                <button
                  onClick={() =>
                    this.initAddWithType('sub-effect', idx, effect._listIndex)
                  }
                >
                  Add Sub Effect
                </button>
                <button>Delete</button>
                {effect._data &&
                  effect._data.map(sub => (
                    <div style={{ border: '1px solid yellow' }}>
                      <p>{sub.text}</p>
                    </div>
                  ))}
              </div>
            ))}

          {/* Problem section */}
          <div
            style={{ border: '1px solid red' }}
            onClick={() =>
              this.props.setTopic({ activeType: 'problem', activeIndex: -1 })
            }
          >
            {topic.problem.text}
          </div>

          {/* Cause section */}
          {topic.causes.length === 0 && topic.problem.text && (
            <button onClick={() => this.initAddWithType('cause')}>
              ADD CAUSES
            </button>
          )}
          {topic.causes.length > 0 &&
            topic.causes.map((cause, idx) => (
              <div style={{ border: '1px solid green' }}>
                <p>{cause.text}</p>
                <button
                  onClick={() =>
                    this.props.setTopic({
                      activeType: 'cause',
                      activeIndex: idx
                    })
                  }
                >
                  Add another Cause
                </button>
                <button
                  onClick={() =>
                    this.initAddWithType('sub-cause', idx, cause._listIndex)
                  }
                >
                  Add Sub Cause
                </button>
                <button>Delete</button>
                {cause._data &&
                  cause._data.map(sub => (
                    <div style={{ border: '1px solid yellow' }}>
                      <p>{sub.text}</p>
                    </div>
                  ))}
              </div>
            ))}
        </Grid.Column>

        {topic.activeType === 'problem' && (
          <Grid.Column width={5}>
            {problems.isFetching ? (
              <h1>Loading...</h1>
            ) : (
              <>
                <Header content="Add a problem" size="huge" />
                <SearchBar
                  keyword={keyword}
                  onSearch={this.handleSearch}
                  onChange={this.handleChange}
                />
                <SuggestedTopics
                  suggestedTopics={suggestedTopicsJSON}
                  onSelect={this.handleSuggestion}
                />
                <SearchResultsList
                  items={problems.data || []}
                  onSelect={this.handleSelectResult}
                />
              </>
            )}
          </Grid.Column>
        )}

        {/* ADD CAUSES */}
        {topic.activeType === 'cause' && (
          <Grid.Column width={5}>
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
          </Grid.Column>
        )}

        {/* ADD SUB CAUSE */}
        {topic.activeType === 'sub-cause' && (
          <Grid.Column width={5}>
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
          </Grid.Column>
        )}

        {/* ADD EFFECTS */}
        {topic.activeType === 'effect' && (
          <Grid.Column width={5}>
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
          </Grid.Column>
        )}

        {/* ADD SUB EFFECTS */}
        {topic.activeType === 'sub-effect' && (
          <Grid.Column width={5}>
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
          </Grid.Column>
        )}
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
