import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Node = styled.div`
  border: 1px solid #ccc;
  width: 220px;
  min-height: 70px;
  font-size: 10px;
  margin: 0 10px;

  i {
    width: 5%;
    float: right;
  }
`;

export const Legend = styled.div`
  border: 1px solid #ccc;
  margin-bottom: -1px;
  width: 220px;
  height: 8px;
  background: ${props => {
    let color;

    if (props.center) {
      color = 'pink';
    } else if (props.bottom) {
      color = 'lightblue';
    } else if (props.top) {
      color = 'paleturquoise';
    }

    return color;
  }};
`;

export const Text = styled.div`
  font-size: 12px;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70px;
  position: absolute;
  width: 220px;
`;

export const VerticalArrow = styled.div`
  border: 1px solid #ccc;
  width: 1px;
  height: 15px;

  ${props =>
    props.top &&
    `
    margin-top: 4px;
    &:before {
      content: '\\25b2';
      color: #ccc;
      font-size: 11px;
      margin-left: -5px;
      float: left;
      margin-top: -11px;
    }`};

  ${props =>
    props.bottom &&
    `
    margin-bottom: 5px;
    &:after {
      content: '\\25bc';
      color: #ccc;
      font-size: 11px;
      margin-left: -5px;
      float: left;
      margin-top: 11px;
    }`};
`;

export const HorizontalArrow = styled.div`
  border: 1px solid #ccc;
  width: calc(25% + 2px);
`;

export const Level = styled.div`
  min-width: 50%;
  display: flex;
  justify-content: space-between;

  ${props =>
    props.bottomTop &&
    `
    align-items: flex-end;
    `}

  ${props =>
    props.topBottom &&
    `
    align-items: flex-start;
    `}
`;

export const Child = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const HorizontalLine = styled.div`
  border: 1px solid #ccc;
  width: 100%;

  ${props =>
    props.rightHalf &&
    `
    width: calc(50% + 2px);
      margin-left: 50%;
    `}

  ${props =>
    props.leftHalf &&
    `
    width: calc(50% + 2px);
      margin-right: 50%;
    `}
`;
