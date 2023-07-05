interface AddressInputProps {
  label: string;
  options: google.maps.places.AutocompletePrediction[];
}

const AddressInput = ({ label, options }: AddressInputProps) => {
  return (
    <>
      <AutoComplete
        options={options}
        getOptionLabel={(option: google.maps.places.AutocompletePrediction) => option.description}
      />
    </>
  );
};
