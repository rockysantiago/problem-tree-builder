import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const sortOptions = [
  {
    key: 'Relevance',
    text: 'Relevance',
    value: 'Relevance'
  },
  {
    key: 'Newest',
    text: 'Newest',
    value: 'Newest'
  },
  {
    key: 'Oldest',
    text: 'Oldest',
    value: 'Oldest'
  }
];

const filterOptions = [
  {
    key: 'All',
    text: 'All',
    value: 'All'
  },
  {
    key: 'Selected',
    text: 'Selected',
    value: 'Selected'
  }
];

const SearchFilter = () => (
  <Dropdown basic button text="Sort/Filter">
    <Dropdown.Menu>
      <Dropdown.Header content="Sort by" />
      <Dropdown.Menu scrolling>
        {sortOptions.map(option => (
          <Dropdown.Item key={option.value} {...option} />
        ))}
      </Dropdown.Menu>
      <Dropdown.Header content="Filter" />
      <Dropdown.Menu scrolling>
        {filterOptions.map(option => (
          <Dropdown.Item key={option.value} {...option} />
        ))}
      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
);

export default SearchFilter;
