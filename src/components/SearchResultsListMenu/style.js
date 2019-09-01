import styled from 'styled-components';
import { Button as SUButton } from 'semantic-ui-react';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled(SUButton)`
  border: 1px solid #3d3d3c !important;
  background: white !important;
  color: #3d3d3c !important;
  font-family: 'Lato', sans-serif;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  font-size: 12px !important;
  padding: 5px 10px;
`;
