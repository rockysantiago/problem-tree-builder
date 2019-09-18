import React from 'react';
import { Add } from '@material-ui/icons';
import { Rating } from 'semantic-ui-react';
import {
  Description,
  Header,
  Icon,
  IndicationLevel,
  Indicator,
  Label,
  Wrapper,
  ItemDetailWrapper
} from './style';

const Tile = ({ item, onSelect, disabled, type }) => (
  <Wrapper
    onClick={!item.selected && disabled ? () => {} : onSelect}
    type={item.selected ? type : ''}
    disabled={!item.selected && disabled}
  >
    <Icon type={item.selected ? type : ''}>{!item.selected && <Add />}</Icon>
    <div style={{ width: '100%', padding: '5px' }}>
      <Header>{item.text}</Header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <ItemDetailWrapper>
            <Label>Link</Label>
            <Description style={{ textTransform: 'none' }}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.link}
              </a>
            </Description>
          </ItemDetailWrapper>

          <ItemDetailWrapper>
            <Label>Source</Label>
            <Description>{item.source}</Description>
          </ItemDetailWrapper>

          <ItemDetailWrapper>
            <Label>Country</Label>
            <Description>{item.country}</Description>
          </ItemDetailWrapper>

          <ItemDetailWrapper>
            <Label>User Score</Label>
            <Rating icon="star" maxRating={5} defaultRating={item.stars} />
          </ItemDetailWrapper>
        </div>

        <Indicator>
          <IndicationLevel level={Math.round(item.score) * 100} />
        </Indicator>
      </div>
    </div>
  </Wrapper>
);

export default Tile;
