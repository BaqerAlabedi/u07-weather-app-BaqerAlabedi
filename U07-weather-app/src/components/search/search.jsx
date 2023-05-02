import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, WEATHER_API_KEY} from "../../api";

// eslint-disable-next-line react/prop-types
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}${WEATHER_API_KEY}&q=${city}&days=7&aqi=no&alerts=no`
      
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
           // return {
             // value: `${city.latitude} ${city.longitude}`,
              //label: `${city.name}, ${city.countryCode}`,
            //};
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
