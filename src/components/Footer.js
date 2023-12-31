import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";

const footerColumns = [
  {
    heading: "Doormat Navigation",
    links: ["Home", "About", "Menu", "Reservations", "Order Online", "Login"],
  },
  {
    heading: "Contact Us",
    links: ["phone number", "email", "address"],
  },
  {
    heading: "Social Media",
    links: ["Facebook", "Instagram", "Twitter", "Trip Advisor"],
  },
  // Add more columns as needed
];

function Footer() {
  return (
    <footer>
      <Box
        sx={{
          flexGrow: 1,
          padding: 3,
          backgroundColor: "secondary.contrastText",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Grid container spacing={2}>
          {/* Empty left column */}
          <Grid item xs={0} sm={2} />

          {/* Image on the left */}
          <Grid item xs={12} sm={2}>
            {/* Replace with your actual image */}
            <img src="Logo.svg" alt="Brand" style={{ maxWidth: "100%" }} />
          </Grid>

          {/* Right side - Menu Items */}
          {footerColumns.map((column, index) => (
            <Grid item xs={12} sm={2} key={index}>
              <Typography variant="h6" gutterBottom color="primary">
                {column.heading}
              </Typography>
              <Box>
                {column.links.map((link, index) => (
                  <Link
                    href="#"
                    variant="body1"
                    color="primary"
                    display="block"
                    key={index}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </footer>
  );
}

export default Footer;
