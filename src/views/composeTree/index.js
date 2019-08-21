import React, { Component } from 'react';
import { Button, Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import { bindActionCreators } from 'redux';
import { searchProblems, selectProblem } from 'actions/problemActions';
import { searchCauses, selectCause } from 'actions/causesActions';
import { searchEffects, selectEffect } from 'actions/effectsActions';
import suggestedTopicsJSON from 'api/suggestedTopics.json';
import SearchBar from 'components/SearchBar';
import SearchInput from 'components/SearchInput';
import SuggestedTopics from 'components/SuggestedTopics';
import SearchResultsList from 'components/SearchResultsList';

class ComposeTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: props.topic.keyword,
      type: 'problems' // Possible values: 'problems', 'effects', 'causes'
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

  handleSuggestion = keyword => {
    this.setState({
      keyword
    });
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
    const { type } = this.state;

    if (type === 'problems') {
      this.props.selectProblem(index, this.props[type].data);
    } else if (type === 'causes') {
      this.props.selectCause(index, this.props[type].data);
    } else if (type === 'effects') {
      this.props.selectEffect(index, this.props[type].data);
    }
  };

  initAddWithType = type => {
    this.setState({
      type
    });

    if (type === 'causes') {
      this.props.searchCauses(this.props.topic.problem.title);
    } else if (type === 'effects') {
      this.props.searchEffects(this.props.topic.problem.title);
    }
  };

  render() {
    const { keyword, type } = this.state;
    const { problems, topic, causes, effects } = this.props;

    return (
      <Grid padded style={{ height: '100vh' }}>
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
          {/* Effects section */}
          {topic.effects.length === 0 && topic.problem.title && (
            <button onClick={() => this.initAddWithType('effects')}>
              ADD EFFECTS
            </button>
          )}
          {topic.effects.length > 0 &&
            topic.effects.map((effect, index) => (
              <div style={{ border: '1px solid blue' }} key={index}>
                <p>{effect.title}</p>
                <button>Add Sub effect</button>
                <button>Delete</button>
              </div>
            ))}

          {/* Problem section */}
          <div style={{ border: '1px solid red' }}>
            {JSON.stringify(topic.problem)}
          </div>

          {/* Cause section */}
          {topic.causes.length === 0 && topic.problem.title && (
            <button onClick={() => this.initAddWithType('causes')}>
              ADD CAUSES
            </button>
          )}
          {topic.causes.length > 0 &&
            topic.causes.map((cause, index) => (
              <div style={{ border: '1px solid green' }} key={index}>
                <p>{cause.title}</p>
                <button>Add Sub cause</button>
                <button>Delete</button>
              </div>
            ))}
        </Grid.Column>

        {type === 'problems' && (
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
        {type === 'causes' && (
          <Grid.Column width={5}>
            {causes.isFetching ? (
              <h1>Loading...</h1>
            ) : (
              <>
                <SearchInput
                  content="Adding a cause of:"
                  text={topic.problem.text}
                ></SearchInput>
                <SearchResultsList
                  items={causes.data || []}
                  onSelect={this.handleSelectResult}
                />
              </>
            )}
          </Grid.Column>
        )}

        {/* ADD EFFECTS */}
        {type === 'effects' && (
          <Grid.Column width={5}>
            {effects.isFetching ? (
              <h1>Loading...</h1>
            ) : (
              <>
                <SearchInput
                  content="Adding an effect of:"
                  text={topic.problem.text}
                ></SearchInput>
                <SearchResultsList
                  items={effects.data || []}
                  onSelect={this.handleSelectResult}
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
      searchCauses,
      selectCause,
      searchEffects,
      selectEffect
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
