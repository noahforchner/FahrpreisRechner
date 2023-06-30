import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import Logo from '../assets/Logo.png';
import Background from '../assets/background2.0.png';

const LoginMaske = () => {
  return (
    <Box
      component='div'
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <Paper
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
        >
          <img src={Logo} height={100} width={150}></img>
          <Typography sx={{ textAlign: 'center', mt: 2 }} variant='h5'>
            Willkommen bei SooTec
          </Typography>
          <Divider sx={{ width: '50%', mt: 4 }}></Divider>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              borderRadius: 10,
              mt: 15,
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
              <Button
                size='large'
                variant='outlined'
                href='/registrierung'
                sx={{ borderRadius: 2, mb: 3, width: '65%' }}
              >
                Registrieren
              </Button>
              <Button
                size='large'
                variant='outlined'
                href='/login'
                sx={{ borderRadius: 2, mb: 3, width: '65%' }}
              >
                Anmelden
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
export default LoginMaske;
