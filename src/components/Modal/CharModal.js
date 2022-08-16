import React, { useEffect, useState } from 'react';
import { Modal, Box, Typography } from '@mui/material';

const CharModal = ({ open, setOpen, modalInfo }) => {
  const [loading, setLoading] = useState(true);

  const firstEpAPI = modalInfo.episode[0];
  const lastEpAPI = modalInfo.episode[modalInfo.episode.length - 1];

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
          <img src={modalInfo.image} alt="" />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalInfo.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            First Episode: {firstEpisode.episode}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Last Episode: {lastEpisode.episode}
          </Typography>
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
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default CharModal;
