import React from 'react';
import { Button, List } from 'semantic-ui-react';

const SearchResultsListItem = props => {
  return (
    <List.Item>
      <List.Content>
        <Button basic icon={props.item.selected ? "minus" : "add"} floated="left" onClick={props.onSelect}/>
        <List.Header>{props.item.title}</List.Header>
        <List.Description>
          Source: {props.item.source} Country: {props.item.country}
          Project No: {props.item.project_no} Section:
          {props.item.section}
        </List.Description>
      </List.Content>
    </List.Item>
  );
};

export default SearchResultsListItem;
