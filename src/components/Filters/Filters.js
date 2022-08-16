import React from 'react';
import Gender from './Categories/Gender';
import Status from './Categories/Status';
import { Box, Button } from '@mui/material';

const Filters = ({ gender, setGender, status, setStatus, setSearch }) => {
  const clearAll = () => {
    setGender('');
    setStatus('');
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        m: 1,
        // border: '1px solid black',
      }}
    >
      <Gender gender={gender} setGender={setGender} />
      <Status status={status} setStatus={setStatus} />
      <Button sx={{ height: 50, m: 1 }} onClick={clearAll} variant="contained">
        Clear All
      </Button>
    </Box>
  );
};

export default Filters;
