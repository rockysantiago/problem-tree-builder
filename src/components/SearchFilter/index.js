import React, { Component } from 'react';
// import { Dropdown } from 'semantic-ui-react';
import { ChevronRight, Check } from '@material-ui/icons';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  RadioButton,
  CheckBox
} from './style';

const sortOptions = [
  {
    key: 'Relevance',
    text: 'Relevance',
    value: 'Relevance'
  },
  {
    key: 'Sentiment',
    text: 'Sentiment',
    value: 'Sentiment'
  },
  {
    key: 'Newest',
    text: 'Newest',
    value: 'Newest'
  },
  {
    key: 'Oldest',
    text: 'Oldest',
    value: 'Oldest'
  }
];

const filterOptions = [
  {
    key: 'All',
    text: 'All',
    value: 'All'
  },
  {
    key: 'Selected',
    text: 'Selected',
    value: 'Selected'
  }
];

const sourceOptions = [
  {
    key: 'All',
    text: 'All',
    value: 'All'
  },
  {
    key: 'Xinhua',
    text: 'Xinhua',
    value: 'Xinhua'
  },
  {
    key: 'Worldbank',
    text: 'Worldbank',
    value: 'Worldbank'
  },
  {
    key: 'RRP',
    text: 'RRP',
    value: 'RRP'
  },
  {
    key: 'SSA',
    text: 'SSA',
    value: 'SSA'
  },
  {
    key: 'CP',
    text: 'CP',
    value: 'CP'
  },
  {
    key: 'CPS',
    text: 'CPS',
    value: 'CPS'
  },
  {
    key: 'COBP',
    text: 'COBP',
    value: 'COBP'
  }
];

const countryOptions = [
  {
    key: 'All',
    text: 'All',
    value: 'All'
  },
  {
    key: 'China, PR',
    text: 'China, PR',
    value: 'China, PR'
  },
  {
    key: 'Mongolia',
    text: 'Mongolia',
    value: 'Mongolia'
  }
];
class SearchFilter extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const { onSelectFilter, filter } = this.props;

    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle isOpen={this.state.dropdownOpen}>
          Sort/Filter
          <ChevronRight />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Sort by</DropdownItem>
          {sortOptions.map(option => (
            <DropdownItem
              key={option.value}
              onClick={() => onSelectFilter(option.value)}
            >
              <RadioButton selected={option.value === filter}>
                <span />
              </RadioButton>
              {option.text}
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem header>Filter by</DropdownItem>
          {filterOptions.map(option => (
            <DropdownItem
              key={option.value}
              onClick={() => onSelectFilter(option.value)}
            >
              <CheckBox selected={option.value === filter}>
                <Check />
              </CheckBox>
              {option.text}
            </DropdownItem>
          ))}
          <DropdownItem header>Source</DropdownItem>
          {sourceOptions.map(option => (
            <DropdownItem
              key={option.value}
              onClick={() => onSelectFilter(option.value)}
            >
              <CheckBox selected={option.value === filter}>
                <Check />
              </CheckBox>
              {option.text}
            </DropdownItem>
          ))}
          <DropdownItem header>Country</DropdownItem>
          {countryOptions.map(option => (
            <DropdownItem
              key={option.value}
              onClick={() => onSelectFilter(option.value)}
            >
              <CheckBox selected={option.value === filter}>
                <Check />
              </CheckBox>
              {option.text}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default SearchFilter;
