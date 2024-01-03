import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Grid,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTheme } from "@mui/material/styles";

const specialsData = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    imageUrl: "/greek salad.jpg",
  },
  {
    title: "Bruschetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    imageUrl: "/bruchetta.svg",
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    imageUrl: "/lemon dessert.jpg",
  },
  // ... other specials
];

const Specials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container>
        <Grid item xs={false} sm={1} md={2} /> {/* Empty left column */}
        <Grid item xs={12} sm={6} md={4} width={"100%"}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ width: "100%" }}
            aria-label="This week's specials title"
          >
            This week's specials!
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            height: 42,
          }}
        >
          <Button
            variant="contained"
            color="primaryInverted"
            href="/menu"
            fullWidth={isMobile}
            aria-label="Online Menu Button"
          >
            Online Menu
          </Button>
        </Grid>
        <Grid item xs={false} sm={1} md={2} /> {/* Empty right column */}
        <Grid item xs={false} sm={1} md={2} /> {/* Empty left column */}
        <Grid item xs={12} sm={10} md={8}>
          <Grid container spacing={2} my={2}>
            {specialsData.map((special, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card aria-label={special.title + "-Card"}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={special.imageUrl}
                    alt={special.title}
                    aria-label="Special image"
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        aria-label={special.title + "-title"}
                      >
                        {special.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="secondary.main"
                        aria-label={special.title + "-price"}
                      >
                        {special.price}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      aria-label={special.title + "-description"}
                    >
                      {special.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<ShoppingCartIcon />}
                      aria-label={special.title + "-add-to-cart-button"}
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={false} sm={1} md={2} /> {/* Empty right column */}
      </Grid>
    </Box>
  );
};

export default Specials;
