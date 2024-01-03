import React, { useReducer, useState } from "react";
import BookingForm from "./BookingsPageComponents/BookingForm";
import BookingHero from "./BookingsPageComponents/BookingHero";
import { Box } from "@mui/material";
import dayjs from "dayjs";

function timesReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      // For now, returns the same available times regardless of the date
      state = [
        { time: dayjs("17:00", "HH:mm"), available: true },
        { time: dayjs("18:00", "HH:mm"), available: true },
        { time: dayjs("19:00", "HH:mm"), available: true },
        { time: dayjs("20:00", "HH:mm"), available: true },
        { time: dayjs("21:00", "HH:mm"), available: true },
        { time: dayjs("22:00", "HH:mm"), available: true },
      ];

      return state;
    default:
      throw new Error();
  }
}

// Available times for booking from 5pm to 10pm in 1h increment using dayjs
const initialTimes = [];

const BookingsPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [availableTimes, updateTimes] = useReducer(timesReducer, initialTimes);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BookingHero activeStep={activeStep} />
      <BookingForm
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        availableTimes={availableTimes}
        updateTimes={updateTimes}
      />
    </Box>
  );
};

export default BookingsPage;
