import React from 'react';
import { Button } from 'semantic-ui-react';
import { navigate } from '@reach/router';

const Search = props => (
  <>
    {props.term}
    <Button
      content="Generate Tree"
      onClick={() => navigate('/generate-tree')}
    />
  </>
);

export default Search;
