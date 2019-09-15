import React, { Component } from 'react';
import { ChevronRight } from '@material-ui/icons';
import { Icon } from 'semantic-ui-react';

import {
  Container,
  Controls,
  Delete,
  Edit,
  LegendIdentifier,
  Text,
  Wrapper
} from './style';

class Node extends Component {
  render() {
    const {
      id,
      addChildLabel,
      addSiblingLabel,
      content,
      disableDelete,
      identifier,
      onAddChild,
      onAddSibling,
      onClick,
      onDelete,
      onEdit,
      showControlGroup,
      size,
      withControls
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
          <Controls size={size}>
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

            {!disableDelete && (
              <Delete onClick={onDelete}>
                <span>DELETE</span>
                <Icon name="close" />
              </Delete>
            )}
          </Controls>
        )}
      </Wrapper>
    );
  }
}

export default Node;
