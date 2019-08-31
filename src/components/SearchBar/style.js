import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

export const StyledInput = styled(Input)`
  width: 40%;
  height: 60px;

  input {
    border-radius: 10px !important;
    border-color: white !important;
    font-size: 16px !important;
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
    border-top-right-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
    background: white !important;
    text-transform: uppercase !important;
    font-size: 14px !important;
    border-left: 1px solid #3d3d3c !important;
    font-weight: 700 !important;
    color: #3d3d3c !important;
    font-family: 'Lato', sans-serif !important;
    -webkit-font-smoothing: subpixel-antialiased !important;
    margin-left: -1px !important;
    letter-spacing: 0.03em !important;
    border: 1px solid ${props => (props.active ? '#3D3D3C' : 'white')} !important;
  }
`;
