import React from 'react';
import { Button } from 'semantic-ui-react';
import { navigate } from '@reach/router';

const SuggestedTopics = props => (
  <>
    {props.suggestedTopics.map(suggestedTopic => (
      <Button
        basic
        size="mini"
        content={suggestedTopic}
        key={suggestedTopic}
        onClick={() => navigate(`search/${suggestedTopic}`)}
      />
    ))}
  </>
);

export default SuggestedTopics;
