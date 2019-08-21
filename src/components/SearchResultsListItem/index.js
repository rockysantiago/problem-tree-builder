import React from 'react';
import { Button, List } from 'semantic-ui-react';
import {
  ButtonWrapper,
  ItemLink,
  ListColumn,
  ListDetails,
  ListRow
} from './style';

const SearchResultsListItem = ({ item, onSelect }) => {
  return (
    <List.Item
      style={{
        borderLeft: '1px solid rgba(34,36,38,.15)',
        borderRight: '1px solid rgba(34,36,38,.15)',
        display: 'flex',
        flexDirection: 'row',
        height: '96px'
      }}
    >
      <ButtonWrapper>
        <Button
          basic
          icon={item.selected ? 'check' : 'add'}
          onClick={onSelect}
          style={{ boxShadow: 'none' }}
        />
      </ButtonWrapper>
      <ListDetails>
        <List.Header>{item.text}</List.Header>
        <ListRow style={{ marginTop: '8px' }}>
          <ListColumn style={{ flexFlow: 'nowrap' }}>
            Link:
            <ItemLink href={item.link}>{item.link}</ItemLink>
          </ListColumn>
          <ListColumn>Country: {item.country}</ListColumn>
        </ListRow>
        <ListRow>
          <ListColumn>Project No: {item.project_no}</ListColumn>
          <ListColumn>Section: {item.section}</ListColumn>
        </ListRow>
      </ListDetails>
    </List.Item>
  );
};

export default SearchResultsListItem;
