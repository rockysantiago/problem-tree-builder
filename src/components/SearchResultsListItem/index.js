import React from 'react';
import { Add } from '@material-ui/icons';

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

const SearchResultsListItem = ({ item, onSelect, disabled, type }) => {
  return (
    <ListItem
      onClick={!item.selected && disabled ? () => {} : onSelect}
      type={item.selected ? type : ''}
      disabled={!item.selected && disabled}
    >
      <Icon type={item.selected ? type : ''}>{!item.selected && <Add />}</Icon>
      <ListDetails>
        <Header>{item.text}</Header>
        <table>
          <tbody>
            <tr>
              <td>
                <Label>Source</Label>
                <Description>
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
                <Label>Project No</Label>
                <Description>{item.project_number}</Description>
              </td>
              <td>
                <Label>Section</Label>
                <Description>{item.section}</Description>
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
