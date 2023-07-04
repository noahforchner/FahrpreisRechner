import { Box, Typography } from '@mui/material';
import Background from "../assets/BackgroundFinal.png";

function ErrorPage() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Typography variant='h1'>ERROR! PAGE NOT FOUND</Typography>
    </Box>
  );
}
export default ErrorPage;
