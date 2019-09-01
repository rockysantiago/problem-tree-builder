import React, { Component } from 'react';
// import { Grid, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Wrapper, Label, Menu, Button } from './style';

import SearchFilter from '../SearchFilter';
import { setFilter, clear } from 'actions/topicActions';

class SearchResultsListMenu extends Component {
  render() {
    const { selected, length, setFilter, topic } = this.props;
    return (
      <Wrapper>
        <Label>
          {selected && selected.length >= 1
            ? `${selected.length} of ${length} selected`
            : length > 1
            ? `${length} Results found`
            : `${length} Result found`}
        </Label>
        <Menu>
          <SearchFilter onSelectFilter={setFilter} filter={topic.filter} />
          <Button
            content="Clear"
            onClick={() => this.props.clear(topic.activeType)}
          />
          <Button content="Tile" />
        </Menu>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setFilter,
      clear
    },
    dispatch
  );

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsListMenu);
