import { Box, Button, Divider, Paper, TextField, Typography } from '@mui/material';
import Logo from '../assets/Logo.png';
import Background from '../assets/BackgroundFinal.png';
import { useState } from 'react';
import axios from 'axios';
import { useUiStore } from '../store';
import { useNavigate } from 'react-router';

const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const NAME_HELPER_TEXT = 'Das Feld darf nicht leer sein.';
const EMAIL_HELPER_TEXT = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
const PASSWORD_HELPER_TEXT =
  'Das Passwort muss mindestens 8 Zeichen lang sein und sowohl Buchstaben als auch Zahlen enthalten.';
const REPEATED_PASSWORD_HELPER_TEXT = 'Die Passwörter müssen übereinstimmen.';

const RegistrationMaske = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatedPassword, setRepeatedPassword] = useState<string>('');

  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [lastNameError, setLastNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [repeatedPasswordError, setRepeatedPasswordError] = useState<boolean>(false);

  const [firstNameHelperText, setFirstNameHelperText] = useState<string>('');
  const [lastNameHelperText, setLastNameHelperText] = useState<string>('');
  const [emailHelperText, setEmailHelperText] = useState<string>('');
  const [passwordHelperText, setPasswordHelperText] = useState<string>('');
  const [repeatedPasswordHelperText, setRepeatedPasswordHelperText] = useState<string>('');

  const [isRegisterButtonActive, setIsRegisterButtonActive] = useState<boolean>(true);
  const setHasRegistered = useUiStore((state) => state.setHasRegistered);

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFirstName(e.target.value);
    setFirstNameError(e.target.value === '');
    setFirstNameHelperText(e.target.value === '' ? NAME_HELPER_TEXT : '');
    setIsRegisterButtonActive(
      e.target.value !== '' &&
        !lastNameError &&
        !emailError &&
        !passwordError &&
        !repeatedPasswordError
    );
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLastName(e.target.value);
    setLastNameError(e.target.value === '');
    setLastNameHelperText(e.target.value === '' ? NAME_HELPER_TEXT : '');
    setIsRegisterButtonActive(
      !firstNameError &&
        e.target.value !== '' &&
        !emailError &&
        !passwordError &&
        !repeatedPasswordError
    );
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.target.value);
    setEmailError(!EMAIL_REGEX.test(e.target.value));
    setEmailHelperText(EMAIL_REGEX.test(e.target.value) ? '' : EMAIL_HELPER_TEXT);
    setIsRegisterButtonActive(
      !firstNameError &&
        !lastNameError &&
        EMAIL_REGEX.test(e.target.value) &&
        !passwordError &&
        !repeatedPasswordError
    );
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.target.value);
    setPasswordError(!PASSWORD_REGEX.test(e.target.value));
    setPasswordHelperText(PASSWORD_REGEX.test(e.target.value) ? '' : PASSWORD_HELPER_TEXT);
    setRepeatedPasswordError(e.target.value !== repeatedPassword);
    setRepeatedPasswordHelperText(
      e.target.value === repeatedPassword ? '' : REPEATED_PASSWORD_HELPER_TEXT
    );
    setIsRegisterButtonActive(
      !firstNameError &&
        !lastNameError &&
        !emailError &&
        PASSWORD_REGEX.test(e.target.value) &&
        !repeatedPasswordError
    );
  };

  const handleRepeatedPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRepeatedPassword(e.target.value);
    setRepeatedPasswordError(e.target.value !== password);
    setRepeatedPasswordHelperText(e.target.value === password ? '' : REPEATED_PASSWORD_HELPER_TEXT);
    setIsRegisterButtonActive(
      !firstNameError &&
        !lastNameError &&
        !emailError &&
        !passwordError &&
        e.target.value === password
    );
  };

  const checkIsInputValid = () => {
    return (
      firstName !== '' &&
      lastName !== '' &&
      EMAIL_REGEX.test(email) &&
      PASSWORD_REGEX.test(password) &&
      repeatedPassword === password
    );
  };

  const setErrors = () => {
    const isFirstNameValid = firstName !== '';
    const isLastNameValid = lastName !== '';
    const isEmailValid = EMAIL_REGEX.test(email);
    const isPasswordValid = PASSWORD_REGEX.test(password);
    const isRepeatedPasswordValid = repeatedPassword === password;

    setFirstNameError(!isFirstNameValid);
    setLastNameError(!isLastNameValid);
    setEmailError(!isEmailValid);
    setPasswordError(!isPasswordValid);
    setRepeatedPasswordError(!isRepeatedPasswordValid);

    setFirstNameHelperText(isFirstNameValid ? '' : NAME_HELPER_TEXT);
    setLastNameHelperText(isLastNameValid ? '' : NAME_HELPER_TEXT);
    setEmailHelperText(isEmailValid ? '' : EMAIL_HELPER_TEXT);
    setPasswordHelperText(isPasswordValid ? '' : PASSWORD_HELPER_TEXT);
    setRepeatedPasswordHelperText(isRepeatedPasswordValid ? '' : REPEATED_PASSWORD_HELPER_TEXT);
  };

  const handleRegisterClick = async () => {
    if (!checkIsInputValid()) {
      setIsRegisterButtonActive(false);
      setErrors();
      return;
    }
    try {
      const response = await axios.post('https://localhost:443/api/v1/auth/register', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });

      // localStorage.setItem('fp-token', response.data);
      setHasRegistered(true);
      navigate('/');
      // Wenn erfolgreich -> navigieren
      // navigate('/calculator');
    } catch (error) {
      console.error(error);
    }
  };

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
            height: '88%',
            mt: 6,
          }}
        >
          <img src={Logo} height={100} width={150}></img>
          <Typography sx={{ textAlign: 'center', mt: 2 }} variant="h5">
            Willkommen bei ScooTec
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
                label="Name"
                sx={{ width: '80%', mb: 2 }}
                onChange={(e) => handleFirstNameChange(e)}
                error={firstNameError}
                helperText={firstNameHelperText}
              ></TextField>
              <TextField
                label="Nachname"
                sx={{ width: '80%', mb: 2 }}
                onChange={(e) => handleLastNameChange(e)}
                error={lastNameError}
                helperText={lastNameHelperText}
              ></TextField>
              <TextField
                label="Email"
                sx={{ width: '80%', mb: 2 }}
                onChange={(e) => handleEmailChange(e)}
                error={emailError}
                helperText={emailHelperText}
              ></TextField>
              <TextField
                label="Passwort"
                sx={{ width: '80%', mb: 2 }}
                onChange={(e) => handlePasswordChange(e)}
                type="password"
                error={passwordError}
                helperText={passwordHelperText}
              ></TextField>{' '}
              <TextField
                label="Passwort wiederholen"
                sx={{ width: '80%', mb: 4 }}
                onChange={(e) => handleRepeatedPasswordChange(e)}
                type="password"
                error={repeatedPasswordError}
                helperText={repeatedPasswordHelperText}
              ></TextField>
              <Button
                size="large"
                variant="outlined"
                sx={{ borderRadius: 2, mb: 3, width: '80%' }}
                onClick={handleRegisterClick}
                disabled={!isRegisterButtonActive}
              >
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
