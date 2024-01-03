import { Box, Typography, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main, width: "100%" }}>
      <Grid container>
        <Grid item xs={false} sm={1} md={2} /> {/* Empty left column */}
        <Grid item xs={12} sm={5} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: theme.spacing(8),
              color: theme.palette.text.primary,

              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
                textAlign: "center",
                width: "100%",
                backgroundImage: `url("restauranfood.jpg")`,
                backgroundSize: "cover",
              },
              [theme.breakpoints.up("sm")]: {
                maxWidth: 400,
              },
            }}
          >
            <Box
              sx={{
                maxWidth: "600px",
              }}
            >
              <Typography
                variant="h2"
                gutterBottom
                //wrap on overflow
                sx={{ hyphens: "auto" }}
                color={theme.palette.primaryInverted.main}
              >
                Little Lemon
              </Typography>
              <Typography
                variant="subtitle1"
                paragraph
                color={theme.palette.white.main}
                marginTop={-4}
              >
                Chicago
              </Typography>
              <Typography
                variant="body1"
                paragraph
                color={theme.palette.white.main}
                maxWidth={"inherit"}
              >
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </Typography>
              <Button
                component="a"
                href="/bookings"
                variant="contained"
                color="primaryInverted"
                size="large"
                sx={{ height: 42 }}
              >
                RESERVE A TABLE
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={4}
          sx={{
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="restauranfood.jpg"
            sx={{
              maxWidth: "auto",
              height: 300,
              borderRadius: "16px",
            }}
          />
        </Grid>
        <Grid item xs={false} sm={1} md={2} /> {/* Empty right column */}
      </Grid>
    </Box>
  );
};

export default Hero;
