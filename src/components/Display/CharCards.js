import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Box,
} from '@mui/material';
import CharModal from '../Modal/CharModal';

const CharCards = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

  const handleOpen = row => {
    setOpen(true);
    setModalInfo(row);
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          mt: 1,
        }}
      >
        {data.map(char => (
          <Grid item key={char.id}>
            <Card
              sx={{ width: 275, cursor: 'pointer' }}
              variant="outlined"
              onClick={() => handleOpen(char)}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Avatar src={char.image} alt="" sx={{ m: 1 }} />
                  <Typography variant="h6" component="div" textAlign={'left'}>
                    {char.name}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'left', mt: 1, ml: 1 }}>
                  <Typography variant="body2">
                    <strong>Name:</strong> {char.origin.name}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Status:</strong> {char.status}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Species:</strong> {char.species}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Gender:</strong> {char.gender}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {open && (
        <CharModal modalInfo={modalInfo} open={open} setOpen={setOpen} />
      )}
    </>
  );
};

export default CharCards;
