import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Status = ({ status, setStatus }) => {
  const handleChange = event => {
    setStatus(event.target.value);
  };

  return (
    <FormControl sx={{ flexGrow: 1, m: 1 }}>
      <InputLabel>Status</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={status}
        label="Status"
        onChange={handleChange}
      >
        <MenuItem value={'alive'}>Alive</MenuItem>
        <MenuItem value={'dead'}>Dead</MenuItem>
        <MenuItem value={'unknown'}>Unknown</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Status;
