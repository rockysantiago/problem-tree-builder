import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import {
  Wrapper,
  Container,
  LegendIdentifier,
  Text,
  Controls,
  Delete
} from './style';

class Node extends Component {
  render() {
    const {
      content,
      identifier,
      onClick,
      withControls,
      onGroupControlClick,
      showControlGroup
    } = this.props;

    return (
      <Wrapper
        identifier={identifier}
        onClick={onClick}
        activeControl={showControlGroup}
      >
        <Container>
          {identifier && <LegendIdentifier />}

          <Text>{content}</Text>

          {withControls && (
            <div style={{ width: '10px' }}>
              <Icon
                onClick={onGroupControlClick}
                name="ellipsis vertical"
                style={{ height: '25px', width: '20px', marginLeft: '-6px' }}
              />
            </div>
          )}
        </Container>

        {withControls && showControlGroup && (
          <Controls>
            {/* <div onClick={onControlClick}>
              <span>Add sub-cause</span>
              <Icon name="plus" />
            </div> */}
            <Delete>
              <span>DELETE</span>
              <Icon name="close icon" />
            </Delete>
          </Controls>
        )}
      </Wrapper>
    );
  }
}

export default Node;
