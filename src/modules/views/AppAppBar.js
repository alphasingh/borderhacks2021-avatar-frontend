import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Link as Direct} from 'react-router-dom';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Direct to="/" style={ {textDecoration: 'none', color:'white'} }>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            sx={{ fontSize: 24 }}
          >
            {'Get Quality Data'}
          </Link>
          </Direct>

          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Direct to="/sign-in" style={ {textDecoration: 'none', color:'white'} }>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              to="sign-in/"
              sx={rightLink}
            >
              Sign In
            </Link>
            </Direct>

            <Direct to="/sign-up" style={ {textDecoration: 'none'} }>
            <Link
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-up/"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              Sign Up
            </Link>
            </Direct>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
