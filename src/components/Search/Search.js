import { Box, TextField } from '@mui/material';

import React from 'react';

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
      }}
    >
      <TextField
        fullWidth
        sx={{ m: 2 }}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={event => {
          setPageNumber(1);
          setSearch(event.target.value);
        }}
      />
    </Box>
  );
};

export default Search;
