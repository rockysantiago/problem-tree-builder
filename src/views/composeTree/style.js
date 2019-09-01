import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import * as colors from '../../constants/colors';

export const Logo = styled.img`
  height: 75px;
  position: absolute;
  top: 0;
`;

export const Canvas = styled.div`
  height: 100%;
  overflow: auto;
  position: relative;
`;

export const SideBar = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 3%;
  z-index: 9;

  ${props =>
    props.right &&
    `right: 0;
     margin-right: 15px;
    `}
`;

export const Generate = styled(Button)`
  border: 1px solid #ffe9af !important;
  background: #ffe9af !important;
  height: 50px !important;
  text-transform: uppercase !important;
  -webkit-font-smoothing: subpixel-antialiased;
  color: #3d3d3c !important;
  letter-spacing: 0.03em !important;
  font-size: 14px !important;
  width: 180px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;

  svg {
    margin-right: -10px;
  }

  &:disabled {
    background: white !important;
    border: 1px solid #d7d7d7 !important;
    color: #d7d7d7 !important;
  }
`;

export const Panel = styled.div`
  width: 240px;
  margin-bottom: 8px;
  border-radius: 5px;
  background: #f5f5f5;
  cursor: pointer;

  svg {
    font-size: 16px;
    transform: rotate(${props => (props.isOpen ? '90deg' : '-90deg')});
    position: absolute;
    right: 0px;
    margin-right: 10px;
    margin-top: 5px;
    cursor: pointer;
  }
`;

export const PanelHead = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  padding: 4px 15px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${props => props.hide && `visibility: hidden;`}
`;

export const PanelBody = styled.div`
  padding: 15px;
  font-size: 12px;
  padding-top: 0;

  ${props =>
    props.column &&
    `display: flex;
      justify-content: space-between;
      div {
        flex: 1
      }
    `}
`;

export const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin-bottom: 10px !important;
`;

export const Color = styled.div`
  width: 20px;
  height: 9px;
  border-radius: 5px;
  background: ${props => props.color};
  margin-right: 10px;
`;

export const Label = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  color: #707070;
  -webkit-font-smoothing: subpixel-antialiased;
`;

export const SidePanel = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  margin-right: 15px;
  bottom: 0;
  top: 15px;
  width: 30%;
  display: flex;
`;

export const SidePanelHeading = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  padding: 15px;
  color: white;
  background: ${props => {
    let bgColor;

    if (props.type.includes('problem')) {
      bgColor = colors.problem;
    } else if (props.type.includes('cause')) {
      bgColor = colors.cause;
    } else if (props.type.includes('effect')) {
      bgColor = colors.effect;
    }

    return bgColor;
  }};
`;

export const SubHeading = styled.div`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-style: italic;
  font-size: 16px;
  line-height: 1.3;
`;

export const SidePanelBody = styled.div`
  background: #f5f5f5;
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
