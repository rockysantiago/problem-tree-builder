import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  i {
    width: 5px;
  }
`;

export const VerticalArrow = styled.div`
  border-style: solid;
  border-width: 0 0 0 1px;
  border-color: #353535;
  width: 1px;
  height: 15px;

  ${props =>
    props.top &&
    `
    &:before {
      content: '';
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid black;
      background: transparent;
      position: absolute;
      margin-left: -5px;
      z-index: -1;
    }
    
    &:after {
      content: '';
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 4px solid white;
      background: transparent;
      position: absolute;
      margin-top: 1px;
      margin-left: -4px;
      z-index: -1;
    }`};
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
  border-top: thin solid #353535;
  width: 100%;

  ${props =>
    props.rightHalf &&
    `
    width: calc(50% + 1px);
      margin-left: 50%;
    `}

  ${props =>
    props.leftHalf &&
    `
    width: calc(50% + 1px);
      margin-right: 50%;
    `}
`;
