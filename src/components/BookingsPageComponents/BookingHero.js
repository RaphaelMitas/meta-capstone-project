import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

function BookingHero({ activeStep }) {
  const theme = useTheme();
  return (
    <Box
      xs={12}
      sm={10}
      md={8}
      sx={{
        p: theme.spacing(1.5),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Typography
        variant="h2"
        color={theme.palette.primary.contrastText}
        gutterBottom
      >
        RESERVE YOUR TABLE
      </Typography>
      <Typography variant="subtitle1" color={"#FFF"} gutterBottom>
        {activeStep === 0 && "Booking Information"}
        {activeStep === 1 && "Contact Information"}
        {activeStep === 2 && "Reservation Summary"}
      </Typography>
    </Box>
  );
}

export default BookingHero;
