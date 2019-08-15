import React from 'react';
import { Button, List } from 'semantic-ui-react';

const SearchResultsListItem = props => {
  return (
    <List.Item>
      <List.Content>
        <Button basic icon="add" floated="left" />
        <List.Header>{props.problem.title}</List.Header>
        <List.Description>
          Source: {props.problem.source} Country: {props.problem.country}
          Project No: {props.problem.project_no} Section:
          {props.problem.section}
        </List.Description>
      </List.Content>
    </List.Item>
  );
};

export default SearchResultsListItem;
