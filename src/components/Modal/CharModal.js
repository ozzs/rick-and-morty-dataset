import React, { useEffect, useState } from 'react';
import { Modal, Box, Typography } from '@mui/material';

const CharModal = ({ open, setOpen, characterInfo }) => {
  const [loading, setLoading] = useState(true);

  const firstEpAPI = characterInfo.episode[0];
  const lastEpAPI = characterInfo.episode[characterInfo.episode.length - 1];

  const [firstEpisode, setFirstEpisode] = useState();
  const [lastEpisode, setLastEpisode] = useState();

  useEffect(() => {
    async function getEpisodes() {
      await Promise.all([
        fetch(firstEpAPI).then(res => res.json()),
        fetch(lastEpAPI).then(res => res.json()),
      ])
        .then(links => {
          setFirstEpisode(links[0]);
          setLastEpisode(links[1]);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setFirstEpisode(null);
          setLastEpisode(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    getEpisodes();
  }, [firstEpAPI, lastEpAPI]);

  if (loading) return 'loading...';

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={characterInfo.image} alt="" />
          <Box sx={{ m: 1.5 }}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              fontWeight={'bold'}
            >
              {characterInfo.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <strong>First Episode:</strong> {firstEpisode.episode}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <strong>Last Episode:</strong> {lastEpisode.episode}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

export default CharModal;
