import { useEffect, useState } from 'react';
import { LatLng } from 'use-places-autocomplete';
import AddressInput from './AddressInput';
import { LocationType } from '../types';
import { useUiStore } from '../store';
import axios from 'axios';
import { Stack, flexbox, height, width } from '@mui/system';
import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material';
import Logo from '../assets/Logo.png';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CalculationResult from './CalculationResult';

const center = { lat: 53.55, lng: 10.02 };
const googleMapsApiKey: string = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const parseLocation = (coordinates: LatLng | undefined) => {
  if (typeof coordinates !== 'undefined') {
    //console.log(`${coordinates.lat},${coordinates.lng}`);
    return `${coordinates.lat}%2C${coordinates.lng}`;
  }
  return '';
};

const Map = () => {
  const [selectedStart, setSelectedStart] = useState<LatLng>();
  const [selectedDestination, setSelectedDestination] = useState<LatLng>();
  const [directions, setDirections] = useState<google.maps.DirectionsResult>();
  const [isPriceButtonClicked, setIsPriceButtonClicked] = useState(false);
  const startAddress = useUiStore().startAddress;
  const destinationAddress = useUiStore().destinationAddress;

  const startLocation = parseLocation(selectedStart);
  const destinationLocation = parseLocation(selectedDestination);

  const embedUrl = `https://www.google.com/maps/embed/v1`;
  const viewUrl = `${embedUrl}/view?key=${googleMapsApiKey}&center=${parseLocation(
    center
  )}&zoom=11`;
  const placeUrl = `${embedUrl}/place?key=${googleMapsApiKey}&q=${
    startLocation || destinationLocation
  }`;
  const directionsUrl = `${embedUrl}/directions?key=${googleMapsApiKey}&origin=${startLocation}&destination=${destinationLocation}&avoid=tolls|highways&mode=bicycling&units=metric`;

  useEffect(() => {
    if (selectedStart && selectedDestination) {
      fetchDirections(selectedStart, selectedDestination);
    }
  }, [selectedStart, selectedDestination]);

  // const getPriceText = () => {
  //   const route = directions?.routes[0].legs[0];
  //   return fetchPrice(route?.duration?.value).then((price) => (
  //     <>
  //       <Grid container>
  //         <Grid item xs={1} />
  //         <Grid item xs={10}>
  //           <div style={{ backgroundColor: '#e0f2f7', padding: '10px', borderRadius: '10px' }}>
  //             <Box width="100%">Strecke: {route?.distance?.text}</Box>
  //             <Box width="100%">Fahrzeit: {route?.duration?.text}</Box>
  //             <Box width="100%">Fahrzeit: {price}</Box>
  //           </div>
  //         </Grid>
  //       </Grid>
  //     </>
  //   ));
  // };

  // const fetchPrice = async (duration: number | undefined) => {
  //   try {
  //     const response = await axios.post('https://localhost:443/api/v1/price', {
  //       duration: duration,
  //     });
  //     console.log(response.data);
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const fetchDirections = (start: LatLng, destination: LatLng) => {
    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: start,
        destination: destination,
        travelMode: google.maps.TravelMode.BICYCLING,
        language: 'de',
        unitSystem: google.maps.UnitSystem.METRIC,
      },
      (result, status) => {
        if (status === 'OK' && result) {
          setDirections(result);
        }
      }
    );
  };

  const handleCalculateClick = () => {
    if (selectedStart && selectedDestination) {
      setIsPriceButtonClicked(true);
    }
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          width: '100%',
          height: '100%',
          marginTop: '0px',
          padding: '10px',
        }}
      >
        <Grid item xs={4}>
          <Paper
            elevation={6}
            sx={{
              borderRadius: '5px',
              padding: '20px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={Logo} height={100} width={150}></img>
            <Typography sx={{ textAlign: 'center', mt: 2 }} variant="h5">
              Ihren Fahrpreis berechnen
            </Typography>
            <Divider sx={{ width: '63%', mt: 4, mb: 4 }}></Divider>

            <Grid container alignItems={'center'} spacing={3} mb="20px">
              <Grid item xs={1}>
                <TripOriginIcon fontSize="small" sx={{ marginRight: '10px', color: '#616161' }} />
              </Grid>
              <Grid item xs={10}>
                <AddressInput
                  label="Startaddresse"
                  setSelected={setSelectedStart}
                  locationType={LocationType.Start}
                />
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={1}>
                <FmdGoodOutlinedIcon
                  fontSize="small"
                  sx={{ marginRight: '10px', color: '#e53935' }}
                />
              </Grid>
              <Grid item xs={10}>
                <AddressInput
                  label="Zieladresse"
                  setSelected={setSelectedDestination}
                  locationType={LocationType.Destination}
                />
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={1}>
                <MonetizationOnOutlinedIcon fontSize="small" color={'primary'} />
              </Grid>
              <Grid item xs={10}>
                <Button
                  variant="contained"
                  sx={{ width: '100%' }}
                  onClick={() => {
                    handleCalculateClick();
                  }}
                >
                  Preis berechnen
                </Button>
              </Grid>
              <Grid item xs={1} />
            </Grid>
            {isPriceButtonClicked && (
              <CalculationResult
                duration={directions?.routes[0]?.legs[0]?.duration?.value}
                distanceText={directions?.routes[0]?.legs[0]?.distance?.text}
                durationText={directions?.routes[0]?.legs[0]?.duration?.text}
              />
            )}
          </Paper>
          {/* <Paper
            elevation={6}
            sx={{ borderRadius: '5px', padding: '20px', height: '30%', marginTop: '20px' }}
          >
            {selectedStart &&
              selectedDestination &&
              directions !== undefined &&
              'Preis' + getPrice() + '.'}
          </Paper> */}
        </Grid>
        <Grid item xs={8}>
          <Paper
            elevation={6}
            sx={{ height: '100%', width: '100%', borderRadius: '10px', border: 'none' }}
          >
            <iframe
              style={{ height: '100%', width: '100%', borderRadius: '10px', border: 'none' }}
              loading="lazy"
              src={
                selectedStart && selectedDestination
                  ? directionsUrl
                  : startLocation || destinationLocation
                  ? placeUrl
                  : viewUrl
              }
            ></iframe>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Map;
