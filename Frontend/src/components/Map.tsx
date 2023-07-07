import { useState } from 'react';
import { LatLng } from 'use-places-autocomplete';
import AddressInput from './AddressInput';
import { useMemo } from 'react';

const Map = () => {
  const center = useMemo(() => ({ lat: 53.52, lng: 10 }), []);
  const [selectedStart, setSelectedStart] = useState<LatLng>();
  const [selectedDestination, setSelectedDestination] = useState<LatLng>();
  const [directionsResult, setDirectionsResult] = useState<google.maps.DirectionsResult>();
  const [serviceRan, setServiceRan] = useState<number>(0);
  const [routeDistance, setRouteDistance] = useState(0);
  const [routeDuration, setRouteDuration] = useState(0);

  const parseLocation = (coordinates: LatLng | undefined) => {
    if (typeof coordinates !== 'undefined') {
      console.log(`${coordinates.lat},${coordinates.lng}`);
      return `${coordinates.lat},${coordinates.lng}`;
    }
    return '';
  };

  return (
    <>
      <AddressInput label="Startaddresse" setSelected={setSelectedStart} />
      <AddressInput label="Zieladdresse" setSelected={setSelectedDestination} />

      <iframe
        width="600"
        height="450"
        loading="lazy"
        //allowfullscreen
        src={
          selectedStart && selectedDestination
            ? 'https://www.google.com/maps/embed/v1/directions' +
              '?key=' +
              import.meta.env.VITE_GOOGLE_MAPS_API_KEY +
              '&origin=' +
              parseLocation(selectedStart) +
              '&destination=' +
              parseLocation(selectedDestination) +
              '&avoid=tolls|highways' +
              '&mode=bicycling' +
              '&units=metric'
            : selectedStart || selectedDestination
            ? 'https://www.google.com/maps/embed/v1/place' +
              '?key=' +
              import.meta.env.VITE_GOOGLE_MAPS_API_KEY +
              '&q=' +
              (selectedStart ? parseLocation(selectedStart) : parseLocation(selectedDestination)) +
              '&q=Eiffel+Tower,Paris+France'
            : 'https://www.google.com/maps/embed/v1/view' +
              '?key=' +
              import.meta.env.VITE_GOOGLE_MAPS_API_KEY +
              '&center=' +
              parseLocation(center) +
              '&zoom=10'
        }
      ></iframe>
    </>
  );
};

export default Map;
