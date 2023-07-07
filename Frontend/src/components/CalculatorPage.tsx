import {
  Alert,
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Paper,
  Snackbar,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../assets/Logo.png";
import Background from "../assets/BackgroundFinal.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LOGIN_FEEDBACK_TEXT = "Sie wurden erfolgreich eingeloggt.";

const CalculatorPage = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(true);

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("fp-token");
    navigate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("fp-token") === null) {
      navigate("/");
    }
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {LOGIN_FEEDBACK_TEXT}
        </Alert>
      </Snackbar>
      <Box
        component="div"
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${Background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <AppBar
          position="sticky"
          sx={{ background: "transparent", boxShadow: "none", width: "100%" }}
        >
          <Toolbar>
            {" "}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ScooTec
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              {" "}
              <Avatar sx={{ height: "3vh", width: "3vh", mr: 1 }}></Avatar>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            display: "flex",
            height: "92%",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "40%",
              minWidth: "500px",
              borderRadius: 5,
              height: "70%",
              mt: 17,
            }}
          >
            <img src={Logo} height={100} width={150}></img>
            <Typography sx={{ textAlign: "center", mt: 2 }} variant="h5">
              Ihren Fahrpreis berechnen
            </Typography>
            <Divider sx={{ width: "63%", mt: 4 }}></Divider>
            <Typography variant="h5" sx={{ mt: 3 }}>
              Strecke in km
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                borderRadius: 10,
                mt: 12,
              }}
            >
              <Box
                sx={{
                  width: "80%",
                  alignSelf: "center",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button
                  size="large"
                  variant="outlined"
                  sx={{ borderRadius: 2, mb: 3, width: "80%" }}
                >
                  Berechnen
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};
export default CalculatorPage;
