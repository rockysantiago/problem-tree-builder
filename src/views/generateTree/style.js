import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Controls = styled.div`
  position: absolute;
  bottom: 0;
  width: 250px;
  margin-bottom: 3%;
  display: flex;
  padding: 0 20px;

  ${props =>
    props.right &&
    `right: 0;
    justify-content: flex-start;`}
  ${props =>
    props.left &&
    `left: 0;
    justify-content: flex-end;`}
`;
