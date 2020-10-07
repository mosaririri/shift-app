import React from 'react';
import { TextField } from '@material-ui/core';

const NormalInput = () => {
  return (
    <TextField
      label="test"
      name="name"
      variant="outlined"
      size="small"
      fullWidth
      onChange={() => console.log('hogehoge')}
    >
      hogehoge
    </TextField>
  );
};

export default NormalInput;
