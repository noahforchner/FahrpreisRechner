import { SyntheticEvent, useState } from 'react';
import usePlacesAutocomplete, {
  HookReturn,
  LatLng,
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import AddressInput from './AddressInput';
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const center = useMemo(() => ({ lat: 53.52, lng: 10 }), []);
  const [selectedStart, setSelectedStart] = useState<LatLng>();
  const [selectedDestination, setSelectedDestination] = useState<LatLng>();

  return (
    <>
      <AddressInput label="Startaddresse" setSelected={setSelectedStart} />
      <AddressInput label="Zieladdresse" setSelected={setSelectedDestination} />
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        {selectedStart && <Marker position={selectedStart} />}
        {selectedDestination && <Marker position={selectedDestination} />}
      </GoogleMap>
    </>
  );
  // const {
  //   ready: startReady,
  //   value: startValue,
  //   suggestions: { status: startStatus, data: startData },
  //   setValue: setStartValue,
  //   clearSuggestions: clearStartSuggestions,
  // } = usePlacesAutocomplete({
  //   requestOptions: {
  //     /* Define search scope for start input */
  //   },
  //   debounce: 300,
  // });
  // const {
  //   ready: destinationReady,
  //   value: destinationValue,
  //   suggestions: { status: destinationStatus, data: destinationData },
  //   setValue: setDestinationValue,
  //   clearSuggestions: clearDestinationSuggestions,
  // } = usePlacesAutocomplete({
  //   requestOptions: {
  //     /* Define search scope for destination input */
  //   },
  //   debounce: 300,
  // });
  // const handleStartInputChange = (
  //   e: SyntheticEvent<Element, Event>,
  //   value: string | google.maps.places.AutocompletePrediction | null
  // ) => {
  //   if (value !== null && typeof value !== 'string') {
  //     setStartValue(value);
  //   }
  //   // Update the keyword of the input element
  // };
  // const handleDestinationInputChange = (e: SyntheticEvent<Element, Event>, value: string) => {
  //   // Update the keyword of the input element
  //   setDestinationValue(value);
  // };
  // const handleSelectStartSuggestion = (value) => {
  //   // Do something with the selected suggestion for start input
  // };
  //  const handleSelectDestinationSuggestion = (value) => {
  //    // Do something with the selected suggestion for destination input
  //  };
  // return (
  //   <>
  //     <AddressInput
  //       label="Startaddresse"
  //       options={startData}
  //       handleChange={handleStartInputChange}
  //     />
  //   </>
  // );
};

export default Map;
