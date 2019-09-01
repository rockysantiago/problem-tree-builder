import React from 'react';
import { Wrapper, Remarks } from './style';
import { Add } from '@material-ui/icons';

const CustomInput = () => {
  return (
    <Wrapper>
      <Add />
      <div>
        <Remarks>Don't see what you need?</Remarks>
        Input Your Own
      </div>
    </Wrapper>
  );
};

export default CustomInput;
