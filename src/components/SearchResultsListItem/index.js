import React from 'react';
import { Add } from '@material-ui/icons';
import { Label as Tag, Rating } from 'semantic-ui-react';

import {
  ListItem,
  Icon,
  Description,
  Header,
  Label,
  ListDetails,
  Indicator,
  IndicationLevel
} from './style';

const SearchResultsListItem = ({ item, onSelect, disabled, type, onRate }) => {
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
              <td>
                <Label>Country</Label>
                <Description>{item.country}</Description>
              </td>
            </tr>
            <tr>
              <td>
                <Label>Source</Label>
                <Description>{item.source}</Description>
              </td>
              <td>
                <Label>Section</Label>
                <Description>{item.section}</Description>
              </td>
            </tr>
            <tr>
              <td>
                <Label>Title</Label>
                <Description>{item.title}</Description>
              </td>
              <td>
                <Label>User Score</Label>
                <Rating
                  icon="star"
                  maxRating={5}
                  defaultRating={item.stars}
                  onRate={(event, data) => {
                    onRate(data.rating, item.id);
                    event.stopPropagation();
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </ListDetails>

      <Indicator>
        <IndicationLevel level={Number(item.score) * 100} />
      </Indicator>
    </ListItem>
  );
};

export default SearchResultsListItem;
