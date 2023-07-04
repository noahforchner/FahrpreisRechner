import { createTheme } from "@mui/material/styles";
import { dark } from "@mui/material/styles/createPalette";
import "./app.css";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: `'Nunito',"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    /* mode: "dark", */
    secondary: {
      main: "#19857b",
    },
  },
});

export default theme;
