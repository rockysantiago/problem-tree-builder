import React from 'react';
// import { Button, List } from 'semantic-ui-react';
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
    >
      <Icon type={item.selected ? type : ''}>{!item.selected && <Add />}</Icon>
      {/* <ButtonWrapper>
        <Button
          basic
          icon={item.selected ? 'check' : 'add'}
          onClick={onSelect}
          style={{ boxShadow: 'none', border: '1px solid red' }}
          disabled={!item.selected && disabled}
        />
      </ButtonWrapper> */}

      <ListDetails>
        <Header>{item.text}</Header>
        <table>
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
              <Description>{item.project_no}</Description>
            </td>
            <td>
              <Label>Section</Label>
              <Description>{item.section}</Description>
            </td>
          </tr>
        </table>
      </ListDetails>

      <Indicator>
        <IndicationLevel level={Math.round(item.textScore) * 10} />
      </Indicator>
    </ListItem>
  );
};

export default SearchResultsListItem;
