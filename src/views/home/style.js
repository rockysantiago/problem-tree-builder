import styled from 'styled-components';
import { media } from '../../constants/mediaSizes';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  ${media.tablet`
    width: 750px;
  `};

  ${media.desktop`
    width: 970px;
  `};

  ${media.largeDesktop`
    width: 1170px;
  `};
`;

export const Logo = styled.img`
  height: 75px;
  position: absolute;
  z-index: 2;
`;

export const Background = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  background: white;
  -webkit-transition: height 0.2s;
  transition: height 0.2s;
`;

export const Heading = styled.h1`
  font-size: 38px;
  font-weight: 200;
  font-family: 'Montserrat', sans-serif;
  color: white;
  text-shadow: 1px 1px 1em rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

export const Center = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  ${Background} {
    height: 100%;

    ${props => !props.active && `height: 580px;`}
  }

  ${Heading} {
    ${props =>
      props.active &&
      `
        color: #3D3D3C;
        text-shadow: none;
      `}
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const Link = styled.a`
  position: absolute;
  bottom: 0;
  margin-bottom: 5%;
  font-family: 'Montserrat', sans-serif;
  color: #a0a0a0;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #a0a0a0;
  }
`;
