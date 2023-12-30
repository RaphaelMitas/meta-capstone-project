import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid container spacing={2}>
          {/* Empty left column */}
          <Grid item xs={2} sm={2} />

          {/* Image on the left */}
          <Grid item xs={8} sm={2}>
            {/* Replace with your actual image */}
            <img src="Logo.svg" alt="Brand" style={{ maxWidth: "100%" }} />
          </Grid>

          {/* Right side - Menu Items */}
          {/* Column 1 */}
          <Grid item xs={8} sm={2}>
            <Typography variant="h6" gutterBottom>
              Column 1 Heading
            </Typography>
            <Box>
              <Link
                href="#"
                variant="subtitle1"
                color="inherit"
                display="block"
              >
                Menu Item 1
              </Link>
              <Link
                href="#"
                variant="subtitle1"
                color="inherit"
                display="block"
              >
                Menu Item 2
              </Link>
              <Link
                href="#"
                variant="subtitle1"
                color="inherit"
                display="block"
              >
                Menu Item 3
              </Link>
            </Box>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={8} sm={2}>
            <Typography variant="h6" gutterBottom>
              Column 2 Heading
            </Typography>
            <Box>
              <Link
                href="#"
                variant="subtitle1"
                color="inherit"
                display="block"
              >
                Menu Item 4
              </Link>
              <Link
                href="#"
                variant="subtitle1"
                color="inherit"
                display="block"
              >
                Menu Item 5
              </Link>
              <Link
                href="#"
                variant="subtitle1"
                color="inherit"
                display="block"
              >
                Menu Item 6
              </Link>
            </Box>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={8} sm={2}>
            <Typography variant="h6" gutterBottom>
              Column 3 Heading
            </Typography>
            <Box>
              <Link
                href="#"
                variant="subtitle1"
                color="inherit"
                display="block"
              >
                Menu Item 7
              </Link>
              <Link
                href="#"
                variant="subtitle1"
                color="inherit"
                display="block"
              >
                Menu Item 8
              </Link>
              <Link
                href="#"
                variant="subtitle1"
                color="inherit"
                display="block"
              >
                Menu Item 9
              </Link>
            </Box>
          </Grid>

          {/* Empty right column */}
          <Grid item xs={2} sm={2} />
        </Grid>
      </Box>
    </footer>
  );
}

export default Footer;
