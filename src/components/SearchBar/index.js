import React, { Component } from 'react';
import { Wrapper, StyledInput, List, ListItem, Container } from './style';
import { Search } from '@material-ui/icons';
import ReactHtmlParser from 'react-html-parser';

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

  parseSuggestion = suggestion => {
    const { keyword } = this.props;
    const stringMatch = new RegExp(keyword, 'gi');

    return suggestion.replace(stringMatch, `<em>${keyword}</em>`);
  };

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
      suggestions,
      onSelectSuggestion
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
          <div
            style={{
              width: '46px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {!loadingSuggestions ? <Search /> : <Spinner />}
          </div>
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
                <ListItem
                  onClick={() => onSelectSuggestion(suggestion)}
                  key={index}
                >
                  {ReactHtmlParser(this.parseSuggestion(suggestion))}
                </ListItem>
              ))}
          </List>
        )}
      </Wrapper>
    );
  }
}

export default SearchBar;
