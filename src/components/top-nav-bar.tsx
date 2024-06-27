import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { MainButton } from './common/styled-components';
const TopNavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {['Home', 'About', 'Services', 'Contact', 'Login', 'Register'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar sx={{ justifyContent: 'space-between', boxShadow: 2, padding: '14px 50px' }}>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <img src="/assets/imgs/group.png" />
          </IconButton>
          {isMobile ? (
            <React.Fragment>
              <IconButton size="large" edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerList}
              </Drawer>
            </React.Fragment>
          ) : (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Stack direction="row" spacing={2}>
                <LinkStyledButton variant="text" color="inherit">
                  Home
                </LinkStyledButton>
                <LinkStyledButton variant="text" color="inherit">
                  Catalog
                </LinkStyledButton>
                <LinkStyledButton variant="text" color="inherit">
                  About
                </LinkStyledButton>
                <LinkStyledButton variant="text" color="inherit">
                  Facility tour
                </LinkStyledButton>
                <LinkStyledButton variant="text" color="inherit">
                  Patients
                </LinkStyledButton>
                <LinkStyledButton variant="text" color="inherit">
                  Providers
                </LinkStyledButton>
                <LinkStyledButton variant="text" color="inherit">
                  Contact Us
                </LinkStyledButton>
              </Stack>
            </Box>
          )}
          {!isMobile && (
            <Stack direction="row" spacing={2}>
              <Button variant="text">Login</Button>
              <MainButton sx={{ color: 'white' }}>Register</MainButton>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNavBar;
const LinkStyledButton = styled(Button)(() => ({
  '&:hover': {
    color: '#194894',
    textDecoration: 'underline',
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '26px',
  textTransform: 'none',
}));
