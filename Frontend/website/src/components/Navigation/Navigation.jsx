import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Button, Menu, MenuItem } from '@mui/material';
import { AccountCircle, ShoppingCart, Message, Home, Info, Store, ContactMail } from '@mui/icons-material';
import Atropos from 'atropos/react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const [scrollUp, setScrollUp] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [sessionActive, setSessionActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrollUp(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Check if there's an active session
    const sessionId = sessionStorage.getItem('uniqueId');
    setSessionActive(!!sessionId); // If sessionId exists, set sessionActive to true
  }, []);

  const handleMenuOpen = () => {
    setProfileMenuOpen(true);
  };

  const handleMenuClose = () => {
    setProfileMenuOpen(false);
  };

  const handleLogout = () => {
    // Clear session and redirect to login page
    sessionStorage.removeItem('uniqueId');
    navigate('/login');
  };

  const checkLoginStatus = () => {
    if (!sessionActive) {
      navigate('/login');
    }
  };

  return (
    <Atropos>
      <AppBar position="fixed" sx={{ backgroundColor: scrollUp ? 'white' : 'green', transition: 'background-color 0.3s ease-in-out', minHeight: '32px', padding: '0px 4px' }}>
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <img src="./logo1.png" alt="Logo" style={{ width: 40, height: 'auto', marginRight: 4 }} />
            </a>
          </div>

          <div className="navigation-links" style={{ transition: 'opacity 0.3s ease-in-out' }}>
            {scrollUp ? (
              <>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <IconButton color="inherit" sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '50%' }, transition: 'color 0.3s ease-in-out' }}>
                    <Home style={{ color: 'green' }} />
                  </IconButton>
                </Link>

                <Link to="/aboutus" style={{ color: 'inherit', textDecoration: 'none' }}>
                <IconButton color="inherit" sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '50%' }, transition: 'color 0.3s ease-in-out' }}>
                  <Info style={{ color: 'green' }} />
                </IconButton>
                </Link>

                <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <IconButton color="inherit" sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '50%' }, transition: 'color 0.3s ease-in-out' }}>
                    <Store style={{ color: 'green' }} />
                  </IconButton>
                </Link>

                <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <IconButton color="inherit" sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '50%' }, transition: 'color 0.3s ease-in-out' }}>
                    <ContactMail style={{ color: 'green' }} />
                  </IconButton>
                </Link>
              </>
            ) : (
              <>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <Button color="inherit" sx={{ textTransform: 'none', fontSize: '16px', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '16px' }, transition: 'color 0.3s ease-in-out' }}>
                    Home
                  </Button>
                </Link>


                
                <Link to="/aboutus" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <Button color="inherit" sx={{ textTransform: 'none', fontSize: '16px', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '16px' }, transition: 'color 0.3s ease-in-out' }}>
                    About Us
                  </Button>
                </Link>

                <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <Button color="inherit" sx={{ textTransform: 'none', fontSize: '16px', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '16px' }, transition: 'color 0.3s ease-in-out' }}>
                    Products
                  </Button>
                </Link>

                <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <Button color="inherit" sx={{ textTransform: 'none', fontSize: '16px', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '16px' }, transition: 'color 0.3s ease-in-out' }}>
                    Contact Us
                  </Button>
                </Link>
              </>
            )}
          </div>

          <div>
            {sessionActive ? (
              <>
                <Link to="/shopping-cart" onClick={checkLoginStatus} style={{ color: 'inherit', textDecoration: 'none' }}>
                  <IconButton color={scrollUp ? 'green' : 'white'} aria-label="basket" sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '50%' }, transition: 'color 0.3s ease-in-out' }}>
                    <ShoppingCart />
                  </IconButton>
                </Link>

                <IconButton
                  color="inherit"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
                  sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '50%' }, color: scrollUp ? 'green' : 'inherit', transition: 'color 0.3s ease-in-out' }}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={null}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={profileMenuOpen}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
                <IconButton color={scrollUp ? 'green' : 'inherit'} aria-label="login">
                  <AccountCircle />
                </IconButton>
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {scrollUp && (
        <a href="https://wa.me/96170616538">

        <IconButton
          color="inherit"
          aria-label="message"
          sx={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: 'green',
            borderRadius: '50%',
            color: 'white',
            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.3)' },
            transition: 'background-color 0.3s ease-in-out',
          }}
        >
          <Message />
        </IconButton>
        </a>
      )}
    </Atropos>
  );
};

export default Navigation;
