import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Typography
              align="left"
              variant="h6"
              component="div"
              sx={{ textDecoration: 'none' }}
            >
              Rick and Morty Characters App
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            <NavLink to="/chart" style={{ textDecoration: 'none' }}>
              <Button
                sx={{ m: 2, color: 'white', display: 'block' }}
                size="large"
              >
                Chart
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
