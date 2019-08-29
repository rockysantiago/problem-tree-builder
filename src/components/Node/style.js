import styled from 'styled-components';

export const Container = styled.div`
  border: solid;
  border-radius: 5px;
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  -webkit-transition: all 0.1s;
  transition: all 0.1s;

  i {
    font-size: 12px;
  }
`;

export const LegendIdentifier = styled.div`
  width: 10px;
`;

export const Text = styled.div`
  font-size: 12px;
  text-transform: capitalize;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px 10px;
  letter-spacing: 0.008em;
`;

export const Controls = styled.div`
  border-radius: 5px;
  background: #f5f5f5;
  padding: 5px 10px;
  position: absolute;
  margin-left: 235px;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;

  div {
    padding: 3px 0;
    min-width: 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    i {
      height: auto;
    }
  }
`;

export const Delete = styled.div`
  color: #3d3d3c;
`;

export const Wrapper = styled.div`
  display: flex;

  ${Container} {
    min-height: ${props => {
      let minHeight;

      if (
        props.identifier === 'problem' ||
        props.identifier === 'cause' ||
        props.identifier === 'effect'
      ) {
        minHeight = '80px';
      } else if (props.identifier === 'empty') {
        minHeight = '40px';
      } else {
        minHeight = '45px';
      }

      return minHeight;
    }};
    border-width: ${props =>
      props.identifier === 'problem' ||
      props.identifier === 'cause' ||
      props.identifier === 'effect'
        ? '2px'
        : '1px'};
    width: ${props => {
      let width;

      if (props.identifier === 'problem') {
        width = '250px';
      } else if (props.identifier === 'empty') {
        width = '200px';
      } else {
        width = '220px';
      }

      return width;
    }};
    font-weight: ${props =>
      props.identifier === 'problem' ||
      props.identifier === 'empty' ||
      props.identifier === 'toBeFilled'
        ? '700'
        : 'normal'};
    background: ${props =>
      props.identifier === 'toBeFilled' ? '#FFE9AF' : '#fff'}
    border-color: ${props => {
      let color;

      if (props.identifier === 'problem') {
        color = '#E86E5F';
      } else if (props.identifier === 'cause') {
        color = '#3291E3';
      } else if (props.identifier === 'effect') {
        color = '#3BCB28';
      } else if (props.identifier === 'empty') {
        color = '#D7D7D7';
      } else if (props.identifier === 'toBeFilled') {
        color = '#FFE9AF';
      }

      return color;
    }};
  }

  ${Text} {
    color: ${props => (props.identifier === 'empty' ? '#DCDCDC' : '#3D3D3C')};
  }

  ${LegendIdentifier} {
    background: ${props => {
      let color;

      if (props.identifier === 'problem') {
        color = '#E86E5F';
      } else if (props.identifier === 'cause') {
        color = '#3291E3';
      } else if (props.identifier === 'effect') {
        color = '#3BCB28';
      }

      return color;
    }};
  }

  ${Controls} {
    color: ${props => {
      let color;

      if (props.identifier === 'problem') {
        color = '#E86E5F';
      } else if (props.identifier === 'cause') {
        color = '#3291E3';
      } else if (props.identifier === 'effect') {
        color = '#3BCB28';
      }

      return color;
    }};
  }
`;
