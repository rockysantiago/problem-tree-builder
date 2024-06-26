import styled from 'styled-components';
import * as colors from 'constants/colors';

export const Wrapper = styled.div`
  width: calc(50% - 2px);
  border: 1px solid red;
  display: flex;
  background: ${props => (props.disabled ? '#fcfcfc' : 'white')};
  cursor: pointer;
  margin: 1px;
  height: 148px;
  border-color: ${props => {
    let borderColor;

    if (props.disabled) {
      borderColor = '#fcfcfc';
    } else if (props.type.includes('problem')) {
      borderColor = colors.problem;
    } else if (props.type.includes('cause')) {
      borderColor = colors.cause;
    } else if (props.type.includes('effect')) {
      borderColor = colors.effect;
    } else {
      borderColor = '#fff';
    }

    return borderColor;
  }};

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Header = styled.div`
  display: -webkit-box;
  max-height: 3.2rem;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  text-transform: capitalize;
  min-height: 45px;
`;

export const Icon = styled.div`
  margin-left: 0px;
  margin-right: 5px;
  height: 100%;
  max-width: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: ${props => {
    let bgColor;

    if (props.type.includes('problem')) {
      bgColor = colors.problem;
    } else if (props.type.includes('cause')) {
      bgColor = colors.cause;
    } else if (props.type.includes('effect')) {
      bgColor = colors.effect;
    }

    return bgColor;
  }};
  ${props => props.type !== '' && `width: 28px`}

  svg {
    fill: #969696 !important;
    margin-right: 0px;
    font-size: 24px;
  }
`;

export const Label = styled.div`
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  font-size: 8px;
  color: #969696;
  width: 30%;
  float: left;
`;

export const Description = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 70%;
  font-size: 10px;
  white-space: nowrap;
  max-width: 125px;
  text-transform: capitalize;

  a {
    color: #005eba !important;
    text-decoration: underline !important;
    cursor: pointer;
  }
`;

export const Indicator = styled.div`
  min-height: 100%;
  width: 10px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(
    180deg,
    #dcdcdc 25%,
    #ffffff 25%,
    #ffffff 50%,
    #dcdcdc 50%,
    #dcdcdc 75%,
    #ffffff 75%,
    #ffffff 100%
  );
  background-size: 13px 13px;
`;

export const IndicationLevel = styled.div`
  width: 100%;
  height: ${props => (props.level < 100 ? props.level : '100')}%;
  background-image: linear-gradient(
    180deg,
    #3d3d3c 25%,
    #ffffff 25%,
    #ffffff 50%,
    #3d3d3c 50%,
    #3d3d3c 75%,
    #ffffff 75%,
    #ffffff 100%
  );
  background-size: 13px 13px;
`;

export const ItemDetailWrapper = styled.span`
  display: flex;
  align-items: center;
  min-height: 20px;
`;
