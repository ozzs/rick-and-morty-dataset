import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Avatar,
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
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell> Name </TableCell>
              <TableCell> Origin </TableCell>
              <TableCell> Status </TableCell>
              <TableCell> Species </TableCell>
              <TableCell> Gender </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
      {open && (
        <CharModal modalInfo={modalInfo} open={open} setOpen={setOpen} />
      )}
    </>
  );
};

export default CharTable;
