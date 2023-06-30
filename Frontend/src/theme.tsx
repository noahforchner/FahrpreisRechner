import { createTheme } from "@mui/material/styles";
import { dark } from "@mui/material/styles/createPalette";

// Create a theme instance.
const theme = createTheme({
  palette: {
    /* mode: "dark", */
    background: {
      /*  default: "#F0F0F0", */
    },
    /*  primary: {
      main: "#1DC6DD",
    }, */
    secondary: {
      main: "#19857b",
    },
  },
});

export default theme;
