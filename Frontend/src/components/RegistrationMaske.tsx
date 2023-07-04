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
import { useState } from 'react';

const RegistrationMaske = () => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatedPassword, setRepeatedPassword] = useState<string>('');

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.target.value);
  };

  const handleRepeatedPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRepeatedPassword(e.target.value);
  };

  // Generischen Changehandler definieren

  return (
    <Box
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
          <Typography sx={{ textAlign: 'center', mt: 2 }} variant="h5">
            Willkommen bei SooTec
          </Typography>
          <Divider sx={{ width: '63%', mt: 2 }}></Divider>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              borderRadius: 10,
              mt: 3,
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
              <Typography variant="h5" sx={{ mb: 1 }}>
                Registrieren
              </Typography>
              <TextField
                label="Email"
                sx={{ width: '80%', mb: 2 }}
                onChange={(e) => handleEmailChange(e)}
              ></TextField>
              <TextField
                label="Passwort"
                sx={{ width: '80%', mb: 2 }}
                onChange={(e) => handlePasswordChange(e)}
              ></TextField>{' '}
              <TextField
                label="Passwort wiederholen"
                sx={{ width: '80%', mb: 4 }}
                onChange={(e) => handleRepeatedPasswordChange(e)}
              ></TextField>
              <Button size="large" variant="outlined" sx={{ borderRadius: 2, mb: 3, width: '80%' }}>
                Registrieren
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
export default RegistrationMaske;
