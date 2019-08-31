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
      showControlGroup,
      onAddSibling,
      addSiblingLabel,
      onAddChild,
      addChildLabel,
      onDelete,
      id
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
                id={id}
                name="ellipsis vertical"
                style={{ height: '25px', width: '20px', marginLeft: '-6px' }}
              />
            </div>
          )}
        </Container>

        {withControls && showControlGroup && (
          <Controls>
            {addSiblingLabel && (
              <div onClick={onAddSibling}>
                <span>{addSiblingLabel}</span>
                <Icon name="plus" />
              </div>
            )}
            {addChildLabel && (
              <div onClick={onAddChild}>
                <span>{addChildLabel}</span>
                <Icon name="plus" />
              </div>
            )}

            <Delete onClick={onDelete}>
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
