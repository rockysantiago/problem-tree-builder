import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

export const Wrapper = styled.div`
  border: 1px solid red;
  z-index: 99;
  border-radius: ${props =>
    props.size === 'huge' ? '10px !important' : '5px !important'};
  background: white;
  height: ${props => (props.size === 'huge' ? '60px' : '45px')};
  display: flex;
  align-items: center;
  width: ${props => props.width};
  border-color: ${props =>
    props.bordered || props.active
      ? '#3D3D3C !important'
      : 'transparent !important'};
  font-size: ${props =>
    props.size === 'huge' ? '18px !important' : '14px !important'};

  svg {
    margin: 0 0 0 10px;
    font-size: ${props => (props.size === 'huge' ? '24px' : '18px')};
  }

  button {
    background: white !important;
    text-transform: uppercase !important;
    border-left: 1px solid #3d3d3c !important;
    font-weight: 700 !important;
    color: #3d3d3c !important;
    font-family: 'Lato', sans-serif !important;
    -webkit-font-smoothing: subpixel-antialiased !important;
    letter-spacing: 0.03em !important;
    border-top-right-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
    font-size: ${props =>
      props.size === 'huge' ? '14px !important' : '10px !important'};
  }
`;

export const StyledInput = styled(Input)`
  width: 100%;
  height: 100%;

  input {
    border: none !important;
    font-family: 'Lato', sans-serif !important;
    padding-left: 10px !important;

    &::placeholder {
      color: #a0a0a0 !important;
      font-weight: 100 !important;
    }

    &:focus {
      ${props => props.active && `border-color: #3D3D3C !important;`}
    }
  }
`;
