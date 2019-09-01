import React, { Component } from 'react';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid } from 'semantic-ui-react';
import { ChevronRight } from '@material-ui/icons';
import { Collapse } from 'reactstrap';

import * as colors from '../../constants/colors';

import SearchBar from 'components/SearchBar';
// import SearchInput from 'components/SearchInput';
import SearchResultsList from 'components/SearchResultsList';
import Tree from 'components/Tree';
import CustomInput from 'components/CustomInput';

// Import Actions
import { searchProblems, selectProblem } from 'actions/problemActions';
import {
  setTopic,
  searchOptions,
  searchSubOptions,
  selectSubOption,
  selectOption
} from 'actions/topicActions';

import {
  Canvas,
  Logo,
  SideBar,
  Generate,
  Panel,
  PanelHead,
  PanelBody,
  Title,
  Color,
  Label,
  SidePanel,
  SidePanelHeading,
  SubHeading,
  SidePanelBody
} from './style';

class ComposeTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: props.topic.keyword,
      tipsCollapse: false,
      legendCollapse: false
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
    const { activeType, causes, effects, activeIndex } = this.props.topic;
    if (activeType === 'sub-cause') {
      this.props.selectSubOption(
        causes[activeIndex]._listIndex,
        selectedIndex,
        activeType
      );
    } else if (activeType === 'sub-effect') {
      this.props.selectSubOption(
        effects[activeIndex]._listIndex,
        selectedIndex,
        activeType
      );
    }
  };

  toggleTips = () => {
    this.setState(state => ({ tipsCollapse: !state.tipsCollapse }));
  };

  toggleLegend = () => {
    this.setState(state => ({ legendCollapse: !state.legendCollapse }));
  };

  render() {
    const { keyword, tipsCollapse, legendCollapse } = this.state;
    const { problems, topic } = this.props;

    let sidePanelHeading, subHeading, activeListItems, selectedItems;

    if (topic.activeType === 'problem' && !problems.isFetching) {
      sidePanelHeading = 'Select a Problem Statement';
    } else if (topic.activeType === 'cause' && !topic.isFetching) {
      sidePanelHeading = 'Adding causes of core problem';
      subHeading = topic.problem.text;
    } else if (topic.activeType === 'sub-cause' && !topic.isFetching) {
      sidePanelHeading = 'Sub-causes of';
      subHeading = topic.causes[topic.activeIndex].text;
    } else if (topic.activeType === 'effect' && !topic.isFetching) {
      sidePanelHeading = 'Adding effect of core problem';
      subHeading = topic.problem.text;
    } else if (topic.activeType === 'sub-effect' && !topic.isFetching) {
      sidePanelHeading = 'Sub-effect of';
      subHeading = topic.effects[topic.activeIndex].text;
    } else {
      sidePanelHeading = 'Loading...';
      subHeading = '';
    }

    if (topic.activeType === 'problem') {
      activeListItems = problems.data || [];
    } else if (topic.activeType === 'cause') {
      activeListItems = topic._sourceCauses || [];
      selectedItems = topic.causes;
    } else if (topic.activeType === 'sub-cause') {
      activeListItems = topic.causes[topic.activeIndex]._sources || [];
    } else if (topic.activeType === 'effect') {
      activeListItems = topic._sourceEffects || [];
      selectedItems = topic.effects;
    } else if (topic.activeType === 'sub-effect') {
      activeListItems = topic.effects[topic.activeIndex]._sources || [];
    } else {
      activeListItems = [];
      selectedItems = [];
    }

    return (
      <Grid padded style={{ height: '100vh', overflow: 'hidden' }}>
        <Grid.Column width={11} style={{ overflow: 'hidden' }}>
          <Logo src={`${process.env.PUBLIC_URL}/adb_logo_outline.png`} />
          <SideBar left>
            <Panel onClick={this.toggleTips} isOpen={tipsCollapse}>
              <ChevronRight />
              <PanelHead hide={tipsCollapse}>Tips</PanelHead>
              <Collapse isOpen={tipsCollapse}>
                <PanelBody>
                  <Title>Select a problem</Title>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </PanelBody>
              </Collapse>
            </Panel>
            <Panel onClick={this.toggleLegend} isOpen={legendCollapse}>
              <ChevronRight />
              <PanelHead hide={legendCollapse}>Legend</PanelHead>
              <Collapse isOpen={legendCollapse}>
                <PanelBody column>
                  <Title>Legend</Title>
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <Color color={colors.cause} />
                          </td>
                          <td>
                            <Label>Effect</Label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Color color={colors.problem} />
                          </td>
                          <td>
                            <Label>Problem</Label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Color color={colors.effect} />
                          </td>
                          <td>
                            <Label>Cause</Label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </PanelBody>
              </Collapse>
            </Panel>
          </SideBar>

          <SideBar right>
            <Generate onClick={() => navigate('/generate-tree')}>
              Generate Tree
              <ChevronRight />
            </Generate>
          </SideBar>

          <Canvas>
            <Tree onDeleteSibling={this.handleSelectResult} />
          </Canvas>
        </Grid.Column>

        <Grid.Column width={5}>
          <SidePanel>
            <SidePanelHeading type={topic.activeType}>
              {sidePanelHeading}
              <SubHeading>{subHeading}</SubHeading>
            </SidePanelHeading>
            <SidePanelBody>
              {topic.activeType === 'problem' && (
                <SearchBar
                  keyword={keyword}
                  onSearch={this.handleSearch}
                  onChange={this.handleChange}
                  bordered
                  width="100%"
                />
              )}

              <CustomInput />
              <SearchResultsList
                items={activeListItems}
                onSelect={
                  topic.activeType.includes('sub-')
                    ? this.handleSubSelection
                    : this.handleSelectResult
                }
                filter={topic.filter}
                type={topic.activeType}
                selected={selectedItems}
              />
            </SidePanelBody>
          </SidePanel>

          {/* {topic.activeType === 'problem' && (
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
                    filter={topic.filter}
                  />
                </>
              )}
            </>
          )} */}

          {/* ADD CAUSES */}
          {/* {topic.activeType === 'cause' && (
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
                    filter={topic.filter}
                  />
                </>
              )}
            </>
          )} */}

          {/* ADD SUB CAUSE */}
          {/* {topic.activeType === 'sub-cause' && (
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
                    filter={topic.filter}
                  />
                </>
              )}
            </>
          )} */}

          {/* ADD EFFECTS */}
          {/* {topic.activeType === 'effect' && (
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
                    filter={topic.filter}
                  />
                </>
              )}
            </>
          )} */}

          {/* ADD SUB EFFECTS */}
          {/* {topic.activeType === 'sub-effect' && (
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
                    filter={topic.filter}
                  />
                </>
              )}
            </>
          )} */}
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
