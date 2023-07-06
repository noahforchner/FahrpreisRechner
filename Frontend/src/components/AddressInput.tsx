import { Autocomplete, TextField } from '@mui/material';
import usePlacesAutocomplete from 'use-places-autocomplete';

interface AddressInputProps {
  label: string;
}

const AddressInput = ({ label }: AddressInputProps) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  return (
    <>
      <Autocomplete
        sx={{ width: '500px', marginTop: '30px' }}
        //value={value}
        // freeSolo
        options={data.map((option) => option.description)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
        onInputChange={(e, value) => setValue((e.target as HTMLTextAreaElement).value)}
        onChange={(e, address) => console.log(address)}
        disabled={!ready}
      />
    </>
  );
};

export default AddressInput;
