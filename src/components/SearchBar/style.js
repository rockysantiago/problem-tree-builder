import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

export const StyledInput = styled(Input)`
  width: ${props => props.width};
  height: ${props => (props.size === 'huge' ? '60px' : '40px')};

  input {
    border-radius: ${props =>
      props.size === 'huge' ? '10px !important' : '5px !important'};
    border-color: ${props =>
      props.bordered ? '#3D3D3C !important' : 'white !important'};
    font-size: ${props =>
      props.size === 'huge' ? '16px !important' : '14px !important'};
    font-family: 'Lato', sans-serif !important;

    &::placeholder {
      color: #a0a0a0 !important;
      font-weight: 100 !important;
    }

    &:focus {
      ${props => props.active && `border-color: #3D3D3C !important;`}
    }
  }

  button {
    border-top-right-radius: ${props =>
      props.size === 'huge' ? '10px !important' : '5px !important'};
    border-bottom-right-radius: ${props =>
      props.size === 'huge' ? '10px !important' : '5px !important'};
    background: white !important;
    text-transform: uppercase !important;
    font-size: ${props =>
      props.size === 'huge' ? '14px !important' : '10px !important'};
    border-left: 1px solid #3d3d3c !important;
    font-weight: 700 !important;
    color: #3d3d3c !important;
    font-family: 'Lato', sans-serif !important;
    -webkit-font-smoothing: subpixel-antialiased !important;
    margin-left: -1px !important;
    letter-spacing: 0.03em !important;
    border: 1px solid
      ${props => (props.active || props.bordered ? '#3D3D3C' : 'white')} !important;
  }
`;
