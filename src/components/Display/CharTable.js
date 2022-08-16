import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Avatar,
  Box,
} from '@mui/material';
import React, { useState } from 'react';
import CharModal from '../Modal/CharModal';

const CharTable = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

  const handleOpen = row => {
    setOpen(true);
    setModalInfo(row);
  };

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
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>
                  {' '}
                  Name{' '}
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>
                  {' '}
                  Origin{' '}
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>
                  {' '}
                  Status{' '}
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>
                  {' '}
                  Species{' '}
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>
                  {' '}
                  Gender{' '}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(row => (
                <TableRow
                  key={row.id}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    cursor: 'pointer',
                  }}
                  onClick={() => handleOpen(row)}
                  hover
                >
                  <TableCell>
                    <Avatar src={row.image} alt="" />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.origin.name}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.species}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {open && (
        <CharModal modalInfo={modalInfo} open={open} setOpen={setOpen} />
      )}
    </>
  );
};

export default CharTable;
