/* eslint-disable no-undef */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import jwt_decode from 'jwt-decode';
import { useState } from 'react';

const pages = ['HOME', 'ABOUT', 'NEWS', 'CONTACT'];
const settings = ['Admin', 'Profile', 'Logout'];

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 8,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {},
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#eee',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { theme, toggle } = useContext(ThemeContext);
  const [user, setUser] = useState(null);

  // Check if there is a username and password in localStorage
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');
  const hasUsernameAndPassword = !!username && !!password;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Kiểm tra xem đã đăng nhập (có jwtToken trong localStorage) chưa
  React.useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      const decoded = jwt_decode(jwtToken);
      setUser(decoded);
    }
  }, []);

  const handleLogout = () => {
    // Xóa jwtToken khỏi localStorage
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    // Cập nhật trạng thái người dùng (đặt user thành null)
    setUser(null);

    // Redirect to the login page
    window.location.href = '/login';
  };

  const handleGoogleSignIn = () => {
    google.accounts.id.prompt();
  };

  return (
    <div className="Navigation">
      <AppBar
        position="static"
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
        }}
      >
        <Container maxWidth="xl">
          <div className="content">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 12,
                  display: { xs: 'none', md: 'flex' },
                  fontSize: 24,
                  fontWeight: 800,
                  letterSpacing: '.2rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                HALOFILMS
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
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
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <Link
                      to={`${page === 'HOME' ? '/ ' : page.toLowerCase()}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontSize: 24,
                  fontWeight: 800,
                  letterSpacing: '.2rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                HALOFILMS
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Link
                    to={`${page === 'HOME' ? '/ ' : page.toLowerCase()}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ mr: 6, my: 2, color: 'white', display: 'block', fontWeight: 'bold' }}
                    >
                      <span style={{ backgroundColor: theme.backgroundColor2, color: theme.color }}>
                        {page}
                      </span>
                    </Button>
                  </Link>
                ))}
              </Box>
              <FormGroup>
                <FormControlLabel
                  control={
                    <MaterialUISwitch
                      sx={{ m: 1 }}
                      defaultChecked
                      onChange={toggle}
                      data-testid="toggle-theme-btn"
                    />
                  }
                />
              </FormGroup>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={
                      user || hasUsernameAndPassword ? handleOpenUserMenu : handleGoogleSignIn
                    }
                    sx={{ p: 0 }}
                  >
                    {user || hasUsernameAndPassword ? (
                      <Avatar
                        alt={user ? user.name : username}
                        src={user ? user.picture : undefined}
                      />
                    ) : (
                      <Link to="/login">
                        <Button
                          onClick={handleGoogleSignIn}
                          style={{ color: '#000', background: '#fff', padding: '8px 28px' }}
                        >
                          Login
                        </Button>
                      </Link>
                    )}
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) =>
                    user || hasUsernameAndPassword ? (
                      <MenuItem
                        key={setting}
                        onClick={setting === 'Logout' ? handleLogout : handleCloseUserMenu}
                      >
                        <Link
                          to={`/${setting.toLowerCase()}`}
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          <Typography textAlign="center">{setting}</Typography>
                        </Link>
                      </MenuItem>
                    ) : null
                  )}
                </Menu>
              </Box>
            </Toolbar>
          </div>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navigation;
