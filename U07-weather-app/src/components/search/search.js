import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import {GEO_API_URL } from '../../api.js/api';

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch('/cities', geoApiOptions) {
            const response = await fetch();
            const result = await response.text();
            console.log(result);
        };
         try catch (error) {
            console.error(error);
        };

    };

    const handleOnChange =(searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
};

export default Search;

