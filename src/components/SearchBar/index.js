import React, { Component } from 'react';
import { Wrapper, StyledInput, List, ListItem, Container } from './style';
import { Search } from '@material-ui/icons';

import Spinner from '../Spinner';

class SearchBar extends Component {
  componentDidMount() {
    const search = document.getElementById('search');
    search.addEventListener('keyup', e => {
      if (e.keyCode === 13 && e.target.value !== '') {
        this.props.onSearch();
      }
    });
  }

  render() {
    const {
      keyword,
      onChange,
      onSearch,
      size,
      active,
      bordered,
      width,
      loadingSuggestions,
      suggestions
    } = this.props;

    const hasSuggestions = active && suggestions;

    return (
      <Wrapper
        size={size}
        bordered={bordered}
        width={width}
        active={active}
        hasSuggestions={hasSuggestions}
      >
        <Container>
          {!loadingSuggestions ? <Search /> : <Spinner />}
          <StyledInput
            action={{
              content: 'Search',
              onClick: () => onSearch()
            }}
            id="search"
            onChange={e => onChange(e.target.value)}
            placeholder="Enter topic or keyword"
            value={keyword}
            autoComplete="off"
          />
        </Container>
        {hasSuggestions && (
          <List>
            {suggestions &&
              suggestions.map((suggestion, index) => (
                <ListItem key={index}>{suggestion}</ListItem>
              ))}
          </List>
        )}
      </Wrapper>
    );
  }
}

export default SearchBar;
