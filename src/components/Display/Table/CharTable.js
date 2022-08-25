import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
} from '@mui/material';
import React, { useState } from 'react';
import CharModal from '../../Modal/CharModal';
import CharRows from './CharRows';

const CharTable = ({ characterList }) => {
  const [open, setOpen] = useState(false);
  const [characterInfo, setCharacterInfo] = useState(null);

  const handleOpen = row => {
    setOpen(true);
    setCharacterInfo(row);
  };

  const cellSx = { fontWeight: 'bold', color: 'white' };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
        }}
      >
        <TableContainer component={Paper} sx={{ m: 2 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#42a5f5' }}>
                <TableCell></TableCell>
                <TableCell sx={cellSx}> Name </TableCell>
                <TableCell sx={cellSx}> Origin </TableCell>
                <TableCell sx={cellSx}> Status </TableCell>
                <TableCell sx={cellSx}> Species </TableCell>
                <TableCell sx={cellSx}> Gender </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <CharRows characterList={characterList} handleOpen={handleOpen} />
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {open && (
        <CharModal
          characterInfo={characterInfo}
          open={open}
          setOpen={setOpen}
        />
      )}
    </>
  );
};

export default CharTable;
