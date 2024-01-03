import React from "react";
import Nav from "./Nav";
import { AppBar, Grid, IconButton, Toolbar } from "@mui/material";

function Header() {
  return (
    <header>
      <AppBar position="static" color="white">
        <Toolbar disableGutters>
          <Grid container sx={{ width: "100%" }}>
            <Grid item xs={false} sm={1} md={2} />
            <Grid
              item
              xs={12}
              sm={10}
              md={8}
              lg={8}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton component="a" href="/" aria-label="Home link">
                <img src="Logo.svg" alt="logo" aria-label="Brand logo" />
              </IconButton>
              <Nav />
            </Grid>
            <Grid item xs={false} sm={1} md={2} />
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
