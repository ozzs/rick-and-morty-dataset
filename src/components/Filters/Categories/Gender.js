import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Gender = ({ gender, setGender }) => {
  const handleChange = event => {
    setGender(event.target.value);
  };

  return (
    <FormControl sx={{ flexGrow: 1, m: 1 }}>
      <InputLabel>Gender</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={gender}
        label="Gender"
        onChange={handleChange}
      >
        <MenuItem value={'male'}>Male</MenuItem>
        <MenuItem value={'female'}>Female</MenuItem>
        <MenuItem value={'genderless'}>Genderless</MenuItem>
        <MenuItem value={'unknown'}>Unknown</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Gender;
