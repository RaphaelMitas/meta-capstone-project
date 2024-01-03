import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#495E57",
      light: "#648278",
      dark: "#293531",
      contrastText: "#F4CE14",
    },
    primaryInverted: {
      main: "#F4CE14",
      light: "#f6e545",
      dark: "#f29e00",
      contrastText: "#495E57",
    },
    secondary: {
      main: "#EE9972",
      contrastText: "#FBDABB",
    },
    //white
    white: {
      main: "#EDEFEE",
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
      lineHeight: 1,
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
    subtitle1: {
      fontFamily: '"Markazi Text", serif',
      fontSize: 40,
      lineHeight: 1,
    },
    subtitle2: {
      fontFamily: '"Markazi Text", serif',
    },
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;
