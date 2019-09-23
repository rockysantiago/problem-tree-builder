import React, { Component } from 'react';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid } from 'semantic-ui-react';
import { ChevronRight } from '@material-ui/icons';
import { Collapse } from 'reactstrap';

import * as colors from '../../constants/colors';

import SearchBar from 'components/SearchBar';

import SearchResultsList from 'components/SearchResultsList';
import Tree from 'components/Tree';
import CustomInput from 'components/CustomInput';
import CreateModal from 'components/CreateModal';

import {
  searchProblems,
  selectProblem,
  addProblem
} from 'actions/problemActions';
import {
  setTopic,
  searchOptions,
  searchSubOptions,
  selectSubOption,
  selectOption,
  addOption,
  addSubOption,
  updateUserScore
} from 'actions/topicActions';
import { retrieveSuggestions } from 'actions/suggestionActions';

import {
  Canvas,
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
import CreatedResultsList from 'components/CreatedResultsList';

class ComposeTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: props.topic.keyword,
      tipsCollapse: false,
      legendCollapse: false,
      isModalOpen: false
    };
  }

  /**
   * Triggers the search using the keyword and navigates
   * to the next page.
   */
  handleSearch = () => {
    const { keyword } = this.state;
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
    this.props.retrieveSuggestions(value);
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

  showModal = size => () => this.setState({ size, isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  handleOnRate = (stars, id) => {
    this.props.updateUserScore(stars, id);
  };

  handleCreate = payload => {
    const { topic } = this.props;

    if (topic.activeType === 'problem') {
      this.props.addProblem(
        payload,
        this.props.problems.data,
        this.props.topic.keyword
      );
    } else if (topic.activeType === 'cause' || topic.activeType === 'effect') {
      this.props.addOption(payload, topic.activeType, this.props.topic.keyword);
    } else if (topic.activeType === 'sub-cause') {
      this.props.addSubOption(
        payload,
        topic.causes[topic.activeIndex]._listIndex,
        topic.activeType,
        this.props.topic.keyword
      );
    } else if (topic.activeType === 'sub-effect') {
      this.props.addSubOption(
        payload,
        topic.effects[topic.activeIndex]._listIndex,
        topic.activeType,
        this.props.topic.keyword
      );
    }

    this.closeModal();
  };

  render() {
    const {
      keyword,
      tipsCollapse,
      legendCollapse,
      size,
      isModalOpen
    } = this.state;
    const { problems, topic } = this.props;

    let sidePanelHeading, subHeading, activeListItems, selectedItems;

    if (topic.activeType === 'problem' && !problems.isFetching) {
      sidePanelHeading = 'Select a Problem Statement';
      activeListItems = problems.data || [];
    } else if (topic.activeType === 'cause' && !topic.isFetching) {
      sidePanelHeading = 'Adding causes of core problem';
      subHeading = topic.problem.text;
      activeListItems = topic._sourceCauses || [];
      selectedItems = topic.causes;
    } else if (topic.activeType === 'sub-cause' && !topic.isFetching) {
      sidePanelHeading = 'Sub-causes of';
      subHeading = topic.causes[topic.activeIndex].text;
      activeListItems = topic.causes[topic.activeIndex]._sources || [];
    } else if (topic.activeType === 'effect' && !topic.isFetching) {
      sidePanelHeading = 'Adding effect of core problem';
      subHeading = topic.problem.text;
      activeListItems = topic._sourceEffects || [];
      selectedItems = topic.effects;
    } else if (topic.activeType === 'sub-effect' && !topic.isFetching) {
      sidePanelHeading = 'Sub-effect of';
      subHeading = topic.effects[topic.activeIndex].text;
      activeListItems = topic.effects[topic.activeIndex]._sources || [];
    } else {
      sidePanelHeading = 'Loading...';
      subHeading = '';
      activeListItems = [];
      selectedItems = [];
    }

    return (
      <Grid padded style={{ height: '100vh', overflow: 'hidden' }}>
        <Grid.Column width={11} style={{ overflow: 'hidden' }}>
          {/* <Logo src={`${process.env.PUBLIC_URL}/adb_logo_outline.png`} /> */}
          <SideBar left>
            <Panel onClick={this.toggleTips} isOpen={tipsCollapse}>
              <ChevronRight />
              <PanelHead hide={tipsCollapse}>Tips</PanelHead>
              <Collapse isOpen={tipsCollapse}>
                <PanelBody>
                  <Title>Select a problem</Title>
                  Start generating your problem tree by selecting a problem from
                  the results. You can then proceed to choose causes and
                  effects.
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
                            <Color color={colors.effect} />
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
                            <Color color={colors.cause} />
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
            <Generate
              onClick={() => navigate('/generate-tree')}
              disabled={topic.effects.length === 0 || topic.causes.length === 0}
            >
              Generate Tree
              <ChevronRight />
            </Generate>
          </SideBar>

          <Canvas>
            <div
              style={{ position: 'absolute', height: '100%', width: '100%' }}
            >
              <Tree />
            </div>
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

              <CreatedResultsList
                items={activeListItems}
                onSelect={
                  topic.activeType.includes('sub-')
                    ? this.handleSubSelection
                    : this.handleSelectResult
                }
                type={topic.activeType}
                selected={selectedItems}
              />
              <CustomInput onClick={this.showModal('mini')} />
              <SearchResultsList
                items={activeListItems}
                onSelect={
                  topic.activeType.includes('sub-')
                    ? this.handleSubSelection
                    : this.handleSelectResult
                }
                sortBy={topic.sortBy}
                filterBy={topic.filterBy}
                filterSource={topic.filterSource}
                filterCountry={topic.filterCountry}
                type={topic.activeType}
                selected={selectedItems}
                viewType={topic.view}
                onRate={this.handleOnRate}
              />
            </SidePanelBody>
          </SidePanel>
        </Grid.Column>
        <CreateModal
          close={this.closeModal}
          open={isModalOpen}
          size={size}
          done={this.handleCreate}
        ></CreateModal>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchProblems,
      selectProblem,
      addProblem,
      setTopic,
      searchOptions,
      searchSubOptions,
      selectSubOption,
      selectOption,
      addOption,
      addSubOption,
      retrieveSuggestions,
      updateUserScore
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
