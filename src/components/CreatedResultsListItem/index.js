import React from 'react';
import { Add } from '@material-ui/icons';
import { Label as Tag } from 'semantic-ui-react';

import {
  ListItem,
  Icon,
  Description,
  Header,
  Label,
  ListDetails
} from './style';

const SearchResultsListItem = ({ item, onSelect, disabled, type }) => {
  return (
    <ListItem
      onClick={!item.selected && disabled ? () => {} : onSelect}
      type={item.selected ? type : ''}
      disabled={!item.selected && disabled}
    >
      <Icon type={item.selected ? type : ''}>{!item.selected && <Add />}</Icon>
      <ListDetails>
        <Header>
          {item.isEdited && (
            <Tag
              content="Edited"
              size="mini"
              style={{
                marginRight: '4px',
                textTransform: 'uppercase',
                color: 'white',
                backgroundColor: 'gray',
                borderRadius: '25px'
              }}
            ></Tag>
          )}
          {item.text}
        </Header>
        <table>
          <tbody>
            <tr>
              <td>
                <Label>Link</Label>
                <Description style={{ textTransform: 'none' }}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.link}
                  </a>
                </Description>
              </td>
            </tr>
          </tbody>
        </table>
      </ListDetails>
    </ListItem>
  );
};

export default SearchResultsListItem;
