/* eslint-disable */
import { useState } from "react";
import Filters from "./filters";
import Countries from "./countries";
import { useDebounce } from "../hooks/useDebounce";
import { useCountries } from "../hooks/useCountryData";
const FilteredCountries = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [region, setRegion] = useState();
  const debouncedValue = useDebounce(searchTerm, 400);
  const { data: countries, isLoading: loading } = useCountries(
    debouncedValue,
    region
  );
  const onFilterChange = (type, value) => {
    if (type == "search") {
      setSearchTerm(value);
      setRegion();
    } else {
      setSearchTerm();
      setRegion(value);
    }
  };
  return (
    <>
      <Filters onFilterChange={onFilterChange} />
      <Countries countries={countries} loading={loading} />
    </>
  );
};

export default FilteredCountries;
