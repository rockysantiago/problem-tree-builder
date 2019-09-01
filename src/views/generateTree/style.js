import styled from 'styled-components';
import { Button as SUButton } from 'semantic-ui-react';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  height: 75px;
  position: absolute;
  top: 0;
  left: 1em;
`;

export const Canvas = styled.div`
  padding: 100px;
`;

export const Controls = styled.div`
  position: absolute;
  bottom: 0;
  width: 250px;
  margin-bottom: 3%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  z-index: 9;

  ${props =>
    props.right &&
    `
    right: 0;
    justify-content: flex-start;
    align-items: flex-end;
  `}
  ${props =>
    props.left &&
    `
      left: 0;
      justify-content: flex-end;
    `}
`;

export const Button = styled(SUButton)`
  border: 1px solid #ffe9af !important;
  background: #ffe9af !important;
  height: 50px !important;
  text-transform: uppercase !important;
  -webkit-font-smoothing: subpixel-antialiased;
  color: #3d3d3c !important;
  letter-spacing: 0.03em !important;
  font-size: 12px !important;
  width: 160px !important;
  padding: 15px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  margin: 5px 0 !important;
  -webkit-font-smoothing: subpixel-antialiased;

  svg {
    margin: 0 !important;
    font-size: 16px !important;
  }
`;
