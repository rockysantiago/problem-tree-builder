import styled from 'styled-components';
import {
  Dropdown as BSDropdown,
  DropdownToggle as BSDropdownToggle,
  DropdownMenu as BSDropdownMenu,
  DropdownItem as BSDropdownItem
} from 'reactstrap';

export const Dropdown = styled(BSDropdown)`
  border-radius: 5px;
  display: flex;
`;

export const DropdownToggle = styled(BSDropdownToggle)`
  font-family: 'Lato', sans-serif;
  font-weight: 700 !important;
  text-transform: uppercase;
  background: white !important;
  color: #3D3D3C !important;
  -webkit-font-smoothing: subpixel-antialiased;
  font-size: 12px !important;
  padding: 5px 10px;
  outline: none !important;
  box-shadow: none !important;
  display: flex !important;
  align-items: center;
  border-color: #3D3D3C !important;
  border-bottom-right-radius: ${props =>
    props.isOpen ? '0px !important' : '5px !important'};
  border-bottom-left-radius: ${props =>
    props.isOpen ? '0px !important' : '5px !important'};
  border-bottom-color: ${props =>
    props.isOpen ? 'white !important' : '#3D3D3C !important'}
  margin: 0 5px !important;
  
  svg {
    font-size: 16px;
    transform: rotate(${props => (props.isOpen ? '-90deg' : '90deg')});
    margin-left: 5px;
    margin-right: -5px;
  }
`;

export const DropdownMenu = styled(BSDropdownMenu)`
  min-width: 0px !important;
  width: 112px;
  border: 1px solid #3d3d3c !important;
  border-top: none !important;
  margin-top: -1px !important;
  border-top-left-radius: 0px !important;
  border-top-right-radius: 0px !important;
  margin-top: -8px !important;
`;

export const DropdownItem = styled(BSDropdownItem)`
  padding: ${props =>
    props.header ? '10px !important' : '2px 10px !important'};
  font-family: 'Lato', sans-serif !important;
  text-transform: ${props => (props.header ? 'uppercase' : 'capitalize')};
  display: flex !important;
  align-items: center;
  font-size: 12px !important;
  background: white !important;
  outline: none !important;
  box-shadow: none !important;

  ${props =>
    props.divider &&
    `
    margin: 10px 10px 0px 10px !important;
  `}

  ${props =>
    props.header &&
    `
    letter-spacing: 0.03em;
  `}
`;

export const RadioButton = styled.div`
  border: 1px solid #6c757d;
  height: 9px;
  width: 9px;
  border-radius: 50%;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;

  span {
    background: ${props => (props.selected ? '#6c757d' : '#fff')};
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
`;

export const CheckBox = styled.div`
  border: 1px solid #6c757d;
  height: 9px;
  width: 9px;
  border-radius: 2px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.selected ? '#6c757d' : '#fff')};

  svg {
    font-size: 7px;
    color: white;
    font-weight: bold;
  }
`;
