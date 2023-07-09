import { Box, Grid } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface CalculationResultProps {
  duration: number | undefined;
  durationText: string | undefined;
  distanceText: string | undefined;
}

const CalculationResult = ({ duration, durationText, distanceText }: CalculationResultProps) => {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    async function fetchPrice() {
      try {
        const response = await axios.post('https://localhost:443/api/v1/price', {
          duration: duration,
        });
        console.log(response.data);
        setPrice(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPrice();
  }, [distanceText]);

  return (
    <>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <div style={{ backgroundColor: '#e0f2f7', padding: '10px', borderRadius: '10px' }}>
            <Box width="100%">Strecke: {distanceText}</Box>
            <Box width="100%">Fahrzeit: {durationText}</Box>
            <Box width="100%">Preis: {price}€</Box>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default CalculationResult;
