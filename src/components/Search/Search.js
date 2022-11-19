import { TextField } from '@mui/material';

import React from 'react';

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <TextField
      fullWidth
      sx={{ m: 1 }}
      id="outlined-basic"
      label="Search"
      variant="outlined"
      onChange={event => {
        setPageNumber(1);
        setSearch(event.target.value);
      }}
    />
  );
};

export default Search;
