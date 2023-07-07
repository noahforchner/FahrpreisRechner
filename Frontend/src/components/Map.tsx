import { useState } from 'react';
import { LatLng } from 'use-places-autocomplete';
import AddressInput from './AddressInput';

const center = { lat: 53.52, lng: 10 };
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const parseLocation = (coordinates: LatLng | undefined) => {
  if (typeof coordinates !== 'undefined') {
    console.log(`${coordinates.lat},${coordinates.lng}`);
    return `${coordinates.lat},${coordinates.lng}`;
  }
  return '';
};

const Map = () => {
  const [selectedStart, setSelectedStart] = useState<LatLng>();
  const [selectedDestination, setSelectedDestination] = useState<LatLng>();
  const [directionsResult, setDirectionsResult] = useState<google.maps.DirectionsResult>();
  const [serviceRan, setServiceRan] = useState<number>(0);
  const [routeDistance, setRouteDistance] = useState(0);
  const [routeDuration, setRouteDuration] = useState(0);

  const startLocation = parseLocation(selectedStart);
  const destinationLocation = parseLocation(selectedDestination);

  const embedUrl = `https://www.google.com/maps/embed/v1`;
  const viewUrl = `${embedUrl}/view?key=${googleMapsApiKey}&center=${parseLocation(
    center
  )}&zoom=10`;
  const placeUrl = `${embedUrl}/place?key=${googleMapsApiKey}&q=${
    startLocation || destinationLocation
  }`;
  const directionsUrl = `${embedUrl}/directions?key=${googleMapsApiKey}&origin=${startLocation}&destination=${destinationLocation}&avoid=tolls|highways&mode=bicycling&units=metric`;

  return (
    <>
      <AddressInput label="Startaddresse" setSelected={setSelectedStart} />
      <AddressInput label="Zieladdresse" setSelected={setSelectedDestination} />

      <iframe
        width="600"
        height="450"
        loading="lazy"
        src={
          selectedStart && selectedDestination
            ? directionsUrl
            : startLocation || destinationLocation
            ? placeUrl
            : viewUrl
        }
      ></iframe>
    </>
  );
};

export default Map;
