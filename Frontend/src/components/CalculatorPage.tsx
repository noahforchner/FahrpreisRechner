import { Alert, Box, Button, Divider, Paper, Snackbar, Typography } from '@mui/material';
import Logo from '../assets/Logo.png';
import Background from '../assets/BackgroundFinal.png';
import { useState } from 'react';
import Map from './Map';

const LOGIN_FEEDBACK_TEXT = 'Sie wurden erfolgreich eingeloggt.';

const CalculatorPage = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(true);

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <>
      <Snackbar open={isSnackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {LOGIN_FEEDBACK_TEXT}
        </Alert>
      </Snackbar>
      {/* <Box
        component="div"
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${Background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      > */}
      <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <Paper
            elevation={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40%',
              minWidth: '500px',
              borderRadius: 5,
              height: '70%',
              mt: 17,
            }}
          > */}
        <img src={Logo} height={100} width={150}></img>
        <Typography sx={{ textAlign: 'center', mt: 2 }} variant="h5">
          Ihren Fahrpreis berechnen
        </Typography>
        <Divider sx={{ width: '63%', mt: 4 }}></Divider>
        <Map />
        {/* <Typography variant="h5" sx={{ mt: 3 }}>
          Strecke in km
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            borderRadius: 10,
            mt: 12,
          }}
        >
          <Box
            sx={{
              width: '80%',
              alignSelf: 'center',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Button size="large" variant="outlined" sx={{ borderRadius: 2, mb: 3, width: '80%' }}>
              Berechnen
            </Button>
          </Box> */}
        {/* </Box> */}
        {/* </Paper>
        </Box> */}
      </Box>
    </>
  );
};
export default CalculatorPage;
