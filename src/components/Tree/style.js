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
  border-left: 1px solid #353535;
  width: 1px;
  height: 15px;

  ${props =>
    props.top &&
    `
    margin-top: 4px;
    font-family: Icons;

    &:before {
      content: '\\f106';
      color: #353535;
      font-size: 15px;
      -webkit-font-smoothing: antialiased;
      margin-left: -5px;
      float: left;
      margin-top: -7px;
    }`};

  ${props =>
    props.bottom &&
    `
    margin-bottom: 5px;

    &:after {
      content: '\\2193';
      color: #353535;
      font-size: 11px;
      margin-left: -5px;
      float: left;
      margin-top: 11px;
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
