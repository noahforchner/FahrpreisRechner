import { Autocomplete, Box, Grid, TextField, Typography } from '@mui/material';
import { SyntheticEvent } from 'react';
import usePlacesAutocomplete, { LatLng, getGeocode, getLatLng } from 'use-places-autocomplete';
import { LocationType } from '../types';
import { useUiStore } from '../store';

interface AddressInputProps {
  label: string;
  setSelected: React.Dispatch<React.SetStateAction<LatLng | undefined>>;
  locationType: LocationType;
}

const AddressInput = ({ label, setSelected, locationType }: AddressInputProps) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const uiStore = useUiStore();

  const handleSelect = async (e: SyntheticEvent<Element, Event>, address: string | null) => {
    if (address) {
      setValue(address, false);
      if (locationType === LocationType.Start) {
        uiStore.setStartLocation(address);
      } else {
        uiStore.setDestinationLocation(address);
      }
    }
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  return (
    <>
      <Autocomplete
        sx={{
          width: '100%',
          backgroundColor: '#ffffff',
        }}
        //value={value}
        freeSolo
        options={data.map((option) => option.description)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            InputProps={{
              ...params.InputProps,
            }}
          />
        )}
        onInputChange={(e, value) => setValue((e.target as HTMLTextAreaElement).value)}
        onChange={(e, address) => handleSelect(e, address)}
        disabled={!ready}
      />
    </>
  );
};

export default AddressInput;
