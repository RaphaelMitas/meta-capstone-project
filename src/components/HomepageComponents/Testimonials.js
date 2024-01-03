import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  Rating,
} from "@mui/material";

const testimonials = [
  {
    name: "Leo Calzoni",
    rating: 4.5,
    image: "person1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Leo Calzoni",
    rating: 3,
    image: "person2.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Leo Calzoni",
    rating: 5,
    image: "person3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Leo Calzoni",
    rating: 3.5,
    image: "person4.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={0} padding={0}>
        <Grid item xs={false} sm={1} md={2} />
        <Grid item xs={12} sm={10} md={8}>
          <Typography variant="h4" component="div" sx={{ mb: 2 }}>
            Testimonials
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <Box
                sx={{
                  width: { xs: "100%", sm: "50%", md: "33%", xl: "25%" },
                  p: 1,
                }}
              >
                <Card key={index}>
                  <CardContent sx={{ textAlign: "left" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar src={testimonial.image} sx={{ mr: 2 }} />
                      <Typography gutterBottom variant="h6" component="div">
                        {testimonial.name}
                      </Typography>
                    </Box>
                    <Rating
                      name="read-only"
                      value={testimonial.rating}
                      precision={0.5}
                      readOnly
                    />
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={false} sm={1} md={2} />
      </Grid>
    </Box>
  );
};

export default Testimonials;
