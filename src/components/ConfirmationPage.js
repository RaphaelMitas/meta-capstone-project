import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkmark } from "react-checkmark";
import { Box, Typography, useTheme } from "@mui/material";

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: theme.palette.primary.main,
        gap: theme.spacing(2),
      }}
    >
      <Typography variant="h1" color={theme.palette.primary.contrastText}>
        Booking Confirmed
      </Typography>
      <Checkmark size="xxLarge" color={theme.palette.primary.contrastText} />
    </Box>
  );
};

export default ConfirmationPage;
