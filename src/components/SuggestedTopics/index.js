import React from 'react';
import { Button } from 'semantic-ui-react';

const SuggestedTopics = props => (
  <>
    {props.suggestedTopics.map(suggestedTopic => (
      <Button basic size="mini" content={suggestedTopic} key={suggestedTopic} />
    ))}
  </>
);

export default SuggestedTopics;
