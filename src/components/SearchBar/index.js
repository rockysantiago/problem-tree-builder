import React from 'react';
import { Input } from 'semantic-ui-react';
import { navigate } from '@reach/router';

const SearchBar = () => (
  <Input
    action={{
      content: 'Search',
      onClick: () => {
        navigate('/search');
      }
    }}
    fluid
    icon="search"
    iconPosition="left"
    placeholder="e.g. beijing air pollution, environment"
  />
);

export default SearchBar;
