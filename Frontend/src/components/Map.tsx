import { Autocomplete, TextField } from '@mui/material';
import { SyntheticEvent } from 'react';
import usePlacesAutocomplete, { HookReturn, getGeocode, getLatLng } from 'use-places-autocomplete';

const Map = () => {
  const {
    ready: startReady,
    value: startValue,
    suggestions: { status: startStatus, data: startData },
    setValue: setStartValue,
    clearSuggestions: clearStartSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope for start input */
    },
    debounce: 300,
  });

  const {
    ready: destinationReady,
    value: destinationValue,
    suggestions: { status: destinationStatus, data: destinationData },
    setValue: setDestinationValue,
    clearSuggestions: clearDestinationSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope for destination input */
    },
    debounce: 300,
  });

  const handleStartInputChange = (e: SyntheticEvent<Element, Event>, value: string) => {
    // Update the keyword of the input element
    setStartValue(value);
  };

  const handleDestinationInputChange = (e: SyntheticEvent<Element, Event>, value: string) => {
    // Update the keyword of the input element
    setDestinationValue(value);
  };

   const handleSelectStartSuggestion = (value) => {
     // Do something with the selected suggestion for start input
   };

   const handleSelectDestinationSuggestion = (value) => {
     // Do something with the selected suggestion for destination input
   };

  return (
    <>
      <AddressInput label="Startaddresse" options=startS
    </>
  );
};

export default Map;
