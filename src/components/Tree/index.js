import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchProblems, selectProblem } from 'actions/problemActions';
import {
  searchSubOptions,
  searchOptions,
  selectOption,
  selectSubOption,
  setTopic,
  updateOption
} from 'actions/topicActions';
import {
  CAUSE_STRING,
  SUB_CAUSE_STRING,
  EFFECT_STRING,
  SUB_EFFECT_STRING
} from 'constants/strings';
import { isEmpty } from 'utils';

import EditModal from '../EditModal';
import Node from '../Node';
import { Wrapper, VerticalArrow, Level, Child, HorizontalLine } from './style';

class Tree extends Component {
  state = {
    activeMenu: null,
    isModalOpen: false
  };

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

  showModal = (size, modalData, type) => () => {
    this.setState({ size, modalData, type, isModalOpen: true });
  };

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const data = this.props.topic;
    const { activeMenu, size, modalData, type, isModalOpen } = this.state;
    const { forExport, updateOption } = this.props;

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
                className="bounceIn"
              />
            </Child>
          ) : (
            data.effects &&
            data.effects.map((effect, effectIndex) => (
              <Child key={effectIndex}>
                <Level bottomTop>
                  {effect._data &&
                    effect._data.map((subEffect, seIndex) => (
                      <Child key={seIndex}>
                        <Node
                          withControls={!forExport}
                          id={`subeffect[${effectIndex}]${seIndex}`}
                          showControlGroup={
                            `subeffect[${effectIndex}]${seIndex}` === activeMenu
                          }
                          content={subEffect.text}
                          identifier={!forExport && 'effect'}
                          onEdit={this.showModal(
                            'mini',
                            { parent: effect, child: subEffect },
                            SUB_EFFECT_STRING
                          )}
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
                  onEdit={this.showModal('mini', effect, EFFECT_STRING)}
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

        <VerticalArrow top={data.effects.length <= 1} />

        {data.effects.length <= 1 && <VerticalArrow />}

        <Node
          id={`problem${data.problem._listIndex}`}
          content={data.problem.text || 'SELECT A PROBLEM STATEMENT'}
          disableDelete
          identifier={!forExport && 'problem'}
          onClick={
            forExport
              ? () => {}
              : () =>
                  this.props.setTopic({
                    activeType: 'problem',
                    activeIndex: -1
                  })
          }
          showControlGroup={`problem${data.problem._listIndex}` === activeMenu}
          size={265}
          withControls={!forExport && !isEmpty(data.problem)}
        />
        <VerticalArrow top />

        <Level test={data.causes.length > 1}>
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
              <Child key={index}>
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
                  onEdit={this.showModal('mini', cause, CAUSE_STRING)}
                  onDelete={() =>
                    this.props.selectOption(cause._listIndex, 'cause')
                  }
                />

                {cause._data && cause._data.length > 0 && <VerticalArrow top />}

                <Level>
                  {cause._data &&
                    cause._data.map((subCause, scIndex) => (
                      <Child key={scIndex}>
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
                          onEdit={this.showModal(
                            'mini',
                            { parent: cause, child: subCause },
                            SUB_CAUSE_STRING
                          )}
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
        <EditModal
          close={this.closeModal}
          open={isModalOpen}
          size={size}
          confirm={updateOption}
          data={modalData}
          type={type}
        ></EditModal>
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
      selectOption,
      updateOption
    },
    dispatch
  );

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tree);
