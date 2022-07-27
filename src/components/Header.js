import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Plans', 'How It Works', 'Login']

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor:'#ffffff', paddingTop:'10px', paddingBottom:'10px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href='/'><img src='logoAstro.png' alt='Astro Logo'></img></a>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, flexDirection:'row-reverse', marginInlineEnd:'-20px' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button href={page==='Plans' ? '#plan' : page==='How It Works' ? '#work' : page==='Login' ? '/login' : null} 
                  sx={{ textAlign:'center', color:'gray' }}>{page}</Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection:'row-reverse' }} >
            {pages.map((page) => (
              <Button
                href={page==='Plans' ? '#plan' : page==='How It Works' ? '#work' : page==='Login' ? '/login' : null}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'gray', display: 'block', marginRight:'20px' } }
              >
                {page}
              </Button>
            ))}
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
