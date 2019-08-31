import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchProblems, selectProblem } from 'actions/problemActions';
import {
  setTopic,
  searchOptions,
  searchSubOptions,
  selectSubOption,
  selectOption
} from 'actions/topicActions';

import Node from '../Node';

import { Wrapper, VerticalArrow, Level, Child, HorizontalLine } from './style';

class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: null
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.setActiveMenu, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.setActiveMenu, false);
  }

  setActiveMenu = e => {
    const { activeMenu } = this.state;
    this.setState({
      activeMenu: activeMenu !== e.target.id ? e.target.id : null
    });
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
        listIndex,
        !(
          this.props.topic.causes[parentIndex]._sources &&
          this.props.topic.causes[parentIndex]._sources.length > 0
        )
      );
    } else if (activeType === 'sub-effect') {
      this.props.searchSubOptions(
        this.props.topic.effects[parentIndex].text,
        'effect',
        listIndex,
        !(
          this.props.topic.effects[parentIndex]._sources &&
          this.props.topic.effects[parentIndex]._sources.length > 0
        )
      );
    }
  };

  render() {
    const data = this.props.topic;
    const { activeMenu } = this.state;
    const { forExport } = this.props;

    return (
      <Wrapper>
        <Level bottomTop>
          {data.effects.length === 0 ? (
            <Child>
              <Node
                onClick={
                  data.problem.text
                    ? () => this.initAddWithType('effect')
                    : () => {}
                }
                content="ADD EFFECTS"
                identifier={data.problem.text ? 'toBeFilled' : 'empty'}
              />
            </Child>
          ) : (
            data.effects &&
            data.effects.map((effect, effectIndex) => (
              <Child>
                <Level bottomTop>
                  {effect._data &&
                    effect._data.map((subEffect, seIndex) => (
                      <Child>
                        <Node
                          withControls={!forExport}
                          id={`subeffect[${effectIndex}]${seIndex}`}
                          showControlGroup={
                            `subeffect[${effectIndex}]${seIndex}` === activeMenu
                          }
                          content={subEffect.text}
                          identifier={!forExport && 'effect'}
                          onDelete={() =>
                            this.props.selectSubOption(
                              effect._listIndex,
                              subEffect._listIndex,
                              'sub-effect'
                            )
                          }
                        />
                        <VerticalArrow top />
                        {effect._data.length > 1 && (
                          <HorizontalLine
                            rightHalf={seIndex === 0}
                            leftHalf={seIndex === effect._data.length - 1}
                          />
                        )}
                      </Child>
                    ))}
                </Level>

                {effect._data && effect._data.length > 0 && <VerticalArrow />}

                <Node
                  onAddSibling={() =>
                    this.props.setTopic({
                      activeType: 'effect',
                      activeIndex: effectIndex
                    })
                  }
                  addSiblingLabel="Add another effect"
                  onAddChild={() =>
                    this.initAddWithType(
                      'sub-effect',
                      effectIndex,
                      effect._listIndex
                    )
                  }
                  addChildLabel="Add Sub-Effect"
                  content={effect.text}
                  identifier={!forExport && 'effect'}
                  withControls={!forExport}
                  id={`effect${effectIndex}`}
                  showControlGroup={`effect${effectIndex}` === activeMenu}
                  onDelete={() =>
                    this.props.selectOption(effect._listIndex, 'effect')
                  }
                />

                {data.effects && data.effects.length > 1 && (
                  <>
                    <VerticalArrow top />
                    <HorizontalLine
                      rightHalf={effectIndex === 0}
                      leftHalf={effectIndex === data.effects.length - 1}
                    />
                  </>
                )}
              </Child>
            ))
          )}
        </Level>

        {/* Center */}
        <VerticalArrow />

        {data.effects.length <= 1 && <VerticalArrow />}

        <Node
          onClick={
            forExport
              ? () => {}
              : () =>
                  this.props.setTopic({
                    activeType: 'problem',
                    activeIndex: -1
                  })
          }
          content={data.problem.text || 'SELECT A PROBLEM STATEMENT'}
          identifier={!forExport && 'problem'}
        />
        <VerticalArrow top />
        {/* Center */}

        <Level>
          {data.causes.length === 0 ? (
            <Child>
              <VerticalArrow />
              <Node
                onClick={
                  data.problem.text
                    ? () => this.initAddWithType('cause')
                    : () => {}
                }
                content="ADD CAUSES"
                identifier={data.problem.text ? 'toBeFilled' : 'empty'}
              />
            </Child>
          ) : (
            data.causes.map((cause, index) => (
              <Child>
                {data.causes && data.causes.length > 1 && (
                  <HorizontalLine
                    rightHalf={index === 0}
                    leftHalf={index === data.causes.length - 1}
                  />
                )}

                <VerticalArrow />

                <Node
                  onAddSibling={() =>
                    this.props.setTopic({
                      activeType: 'cause',
                      activeIndex: index
                    })
                  }
                  addSiblingLabel="Add another cause"
                  onAddChild={() =>
                    this.initAddWithType('sub-cause', index, cause._listIndex)
                  }
                  addChildLabel="Add Sub-Cause"
                  content={cause.text}
                  identifier={!forExport && 'cause'}
                  withControls={!forExport}
                  id={`cause${index}`}
                  showControlGroup={`cause${index}` === activeMenu}
                  onDelete={() =>
                    this.props.selectOption(cause._listIndex, 'cause')
                  }
                />

                {cause._data && cause._data.length > 0 && <VerticalArrow top />}

                <Level>
                  {cause._data &&
                    cause._data.map((subCause, scIndex) => (
                      <Child>
                        {cause._data && cause._data.length > 1 && (
                          <HorizontalLine
                            rightHalf={scIndex === 0}
                            leftHalf={scIndex === cause._data.length - 1}
                          />
                        )}

                        <VerticalArrow />
                        <Node
                          withControls={!forExport}
                          id={`subcause[${index}]${scIndex}`}
                          showControlGroup={
                            `subcause[${index}]${scIndex}` === activeMenu
                          }
                          content={subCause.text}
                          identifier={!forExport && 'cause'}
                          onDelete={() =>
                            this.props.selectSubOption(
                              cause._listIndex,
                              subCause._listIndex,
                              'sub-cause'
                            )
                          }
                        />
                      </Child>
                    ))}
                </Level>
              </Child>
            ))
          )}
        </Level>
      </Wrapper>
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
)(Tree);
