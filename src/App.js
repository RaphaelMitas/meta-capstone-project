import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import BookingsPage from "./components/BookingsPage";
import { Box } from "@mui/material";
import ConfirmationPage from "./components/ConfirmationPage";

function App() {
  return (
    <Router>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>

        <Footer />
      </Box>
    </Router>
  );
}

export default App;
