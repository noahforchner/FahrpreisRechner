import { useLoadScript } from '@react-google-maps/api';
import Map from './Map';

const RouteSelect = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  return isLoaded ? <Map /> : <div>Lade Karte...</div>;
};

export default RouteSelect;
