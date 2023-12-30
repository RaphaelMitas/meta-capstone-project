import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#495E57",
      contrastText: "#F4CE14",
    },
    secondary: {
      main: "#EE9972",
      contrastText: "#FBDABB",
    },
    //white
    white: {
      default: "#EDEFEE",
      contrastText: "#333333",
    },
  },
  typography: {
    fontFamily: '"Karla", "Markazi Text", serif',
    //h1 - h6
    h1: {
      fontFamily: '"Markazi Text"',
    },
    h2: {
      fontFamily: '"Markazi Text"',
    },
    h3: {
      fontFamily: '"Markazi Text"',
    },
    h4: {
      fontFamily: '"Markazi Text"',
    },
    h5: {
      fontFamily: '"Markazi Text"',
    },
    h6: {
      fontFamily: "Markazi Text",
      fontSize: "1.5rem",
    },
  },
});

export default theme;
