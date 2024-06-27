import HomeWorkIcon from '@mui/icons-material/HomeWork';
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
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';

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
        <Toolbar sx={{ justifyContent: 'space-between', boxShadow: 3 }}>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <HomeWorkIcon sx={{ width: 40 }} />
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
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Services</Button>
                <Button color="inherit">Contact</Button>
              </Stack>
            </Box>
          )}
          {!isMobile && (
            <Stack direction="row" spacing={2}>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Register</Button>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNavBar;
