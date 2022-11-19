import { Stack, Pagination } from '@mui/material';
import React from 'react';

const AppPagination = ({ pageCount, pageNumber, setPageNumber }) => {
  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <Stack spacing={2} sx={{ display: 'flex', alignItems: 'center', m: 3 }}>
      <Pagination count={pageCount} page={pageNumber} onChange={handleChange} />
    </Stack>
  );
};

export default AppPagination;
