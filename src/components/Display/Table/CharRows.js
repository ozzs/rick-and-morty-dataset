import React from 'react';
import { TableRow, TableCell, Avatar } from '@mui/material';

const CharRows = ({ characterList, handleOpen }) => {
  return (
    <>
      {characterList.map(row => (
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
    </>
  );
};

export default CharRows;
