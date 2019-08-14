import React from 'react';
import { Button } from 'semantic-ui-react';

const SuggestedTopics = props => (
  <>
    {props.suggestedTopics.map(suggestedTopic => (
      <Button basic content={suggestedTopic} size="mini" />
    ))}
  </>
);

export default SuggestedTopics;
