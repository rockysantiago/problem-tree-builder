import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { ChevronRight } from '@material-ui/icons';

import {
  Wrapper,
  Container,
  LegendIdentifier,
  Text,
  Controls,
  Delete,
  Edit
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
      onEdit,
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

          <Text>
            {content}

            {(identifier === 'empty' || identifier === 'toBeFilled') && (
              <ChevronRight />
            )}
          </Text>

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
            <Edit onClick={onEdit}>
              <span>EDIT</span>
              <Icon name="edit" />
            </Edit>

            <Delete onClick={onDelete}>
              <span>DELETE</span>
              <Icon name="close" />
            </Delete>
          </Controls>
        )}
      </Wrapper>
    );
  }
}

export default Node;
