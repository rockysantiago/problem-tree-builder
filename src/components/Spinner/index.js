import React from 'react';
import { Loader } from './style';

const Spinner = ({ size }) => (
  <div
    style={{
      position: 'relative',
      width: '43px',
      height: '51px'
    }}
  >
    <Loader size={size}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Loader>
  </div>
);

export default Spinner;
