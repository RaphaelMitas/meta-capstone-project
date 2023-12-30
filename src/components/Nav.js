import React from "react";
import { Box, Container } from "@mui/system";
import { IconButton, Toolbar, AppBar, Typography, Button } from "@mui/material";
// import { Link } from "react-router-dom";

function NavButton({ href, children, ...props }) {
  return (
    <Button component="a" href={href} sx={{ mx: 1 }} {...props}>
      <Typography variant="h5">{children}</Typography>
    </Button>
  );
}

function Nav() {
  return (
    <nav>
      <AppBar position="static" color="white">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton component="a" href="/">
              <img src="Logo.svg" alt="logo" width={"100%"} />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            {/* This will push the NavButtons to the right */}
            <NavButton href="/" color="inherit">
              HOME
            </NavButton>
            <NavButton href="/about" color="inherit">
              ABOUT
            </NavButton>
            <NavButton href="/menu" color="inherit">
              MENU
            </NavButton>
            <NavButton href="/reservation" color="inherit">
              RESERVATION
            </NavButton>
            <NavButton href="/order" color="inherit">
              ORDER ONLINE
            </NavButton>
            <NavButton href="/login" color="inherit">
              LOGIN
            </NavButton>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
}

export default Nav;
