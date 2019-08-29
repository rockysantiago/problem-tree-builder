import React, { Component } from 'react';
import { Button, Grid, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchFilter from '../SearchFilter';
import {
  setFilter,
  clear
} from 'actions/topicActions';

class SearchResultsListMenu extends Component {

  render() {
    const { selected, length, setFilter, topic } = this.props;
    return (
      <Segment basic style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Grid verticalAlign="middle">
          <Grid.Column width={6}>
            {selected && selected.length >= 1
              ? `${selected.length} of ${length} selected`
              : length > 1
              ? `${length} results found`
              : `${length} result found`}
          </Grid.Column>
          <Grid.Column textAlign="right" width={10}>
            <SearchFilter onSelectFilter={setFilter} filter={topic.filter} />
            <Button basic content="Clear" onClick={() => this.props.clear(topic.activeType)}/>
            <Button basic content="Tile" style={{ marginRight: 0 }} />
          </Grid.Column>
        </Grid>
      </Segment>
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
