import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

const About = () => {
  return (
    <Grid container p={8} spacing={2}>
      <Grid item xs={false} sm={1} md={2} />

      <Grid item xs={12} sm={11} md={4}>
        <Typography variant="h3" component="h2" gutterBottom>
          About Our Chefs
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          maxWidth={600}
        >
          Our kitchen is the heart of our restaurant, where our team of
          professional chefs work their magic. With a passion for culinary
          excellence and a dedication to creating the perfect dish, every meal
          is a masterpiece. Meet the talented individuals who make it all
          happen.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={11} md={4}>
        <CardMedia
          component="img"
          image="/composed_chefs.png"
          alt="Our Chefs at Work"
          sx={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid item xs={false} sm={1} md={2} />
    </Grid>
  );
};

export default About;
