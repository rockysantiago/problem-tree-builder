import React from 'react';
import { Wrapper, StyledInput } from './style';
import { Search } from '@material-ui/icons';

const SearchBar = ({
  keyword,
  onChange,
  onSearch,
  size,
  active,
  bordered,
  width
}) => {
  return (
    <Wrapper size={size} bordered={bordered} width={width} active={active}>
      <Search />
      <StyledInput
        action={{
          content: 'Search',
          onClick: () => onSearch()
        }}
        onChange={e => onChange(e.target.value)}
        placeholder="Enter topic or keyword"
        value={keyword}
      />
    </Wrapper>
  );
};

export default SearchBar;
