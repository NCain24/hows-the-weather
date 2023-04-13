import { AsyncPaginate } from 'react-select-async-paginate';
import { useState } from 'react';
import { GEO_API_URL, geoApiOptions } from '../.api';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState('');

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
    setSearch('');
  };

  return (
    <div className="md:w-[50%] m-auto">
      <div className="pt-3 pb-10">
        <AsyncPaginate
          className="text-sm lg:text-2xl"
          placeholder="Enter a City to begin your search..."
          value={ search }
          debounceTimeout={600}
          onChange={handleOnChange}
          loadOptions={loadOptions}
        />
      </div>
    </div>
  );
};

export default Search;
