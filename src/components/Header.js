import React from "react";
import Nav from "./Nav";
import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";

function Header() {
  return (
    <header>
      <AppBar position="static" color="white">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton component="a" href="/">
              <img src="Logo.svg" alt="logo" width={"100%"} />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Nav />
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Header;
