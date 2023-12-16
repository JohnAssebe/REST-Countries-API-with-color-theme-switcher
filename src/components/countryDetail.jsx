/*eslint-disable*/
import { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useParams, useNavigate } from "react-router-dom";
import { useCountry } from "../hooks/useCountryData";
import LoadingSVG from "../assets/loading.svg";
import SmallSizeLoadingSVG from "../assets/smallSizeLoading.svg";

import { useCountriesFromCode } from "../hooks/useCountryData";
const CountryDetail = () => {
  const [countryCode, setCountryCode] = useState();
  const { data: neighbors, isLoading: loadNeighbors } =
    useCountriesFromCode(countryCode);

  const { name } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { data: country, isLoading: load } = useCountry(name);
  useEffect(() => {
    setCountryCode(country?.borders);
  }, [country]);
  return (
    <div className="w-full px-4 font-nunito">
      <div className="my-8">
        <button
          className="flex items-center justify-center px-6 py-2 text-sm duration-500 rounded-md shadow-lg gap-x-3 hover:-translate-x-1 hover:text-veryDarkBlueAlt shadow-slate-300"
          onClick={() => goBack()}
        >
          <IoArrowBack />
          Back
        </button>
      </div>
      {load ? (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/20 bg-opacity-30">
          <div className="rounded-lg">
            <img src={LoadingSVG} alt="loading" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-start">
          <div className="sm:basis-1/2">
            <img
              src={country?.flags?.png}
              className="object-cover mx-auto border md:w-96 md:h-64"
            />
          </div>
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start md:basis-1/2">
            <h4 className="mb-4 text-2xl font-extrabold">
              {country?.name?.common}
            </h4>
            <div className="flex flex-col items-center justify-between w-11/12 gap-2 py-1 pr-6 md:items-start md:flex-row">
              <div className="flex items-center justify-center gap-x-1">
                <p className="font-semibold">Native Name:</p>
                <span>{country?.demonyms?.eng?.m}</span>
              </div>
              <div className="flex items-center justify-center w-56 md:justify-start gap-x-2">
                <p className="font-semibold">Top Level Domain:</p>
                <span>{country?.tld}</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between w-11/12 gap-2 py-1 pr-6 md:items-start md:flex-row">
              <div className="flex items-center justify-center gap-x-2">
                <p className="font-semibold">Population:</p>
                <span>{country?.population}</span>
              </div>
              <div className="flex items-center justify-center w-full md:w-56 md:justify-start gap-x-2">
                <p className="font-semibold">Currencies:</p>
                <span className="flex flex-wrap items-start justify-center gap-1">
                  {Object.keys(country?.currencies)?.map(
                    (key, index, array) => (
                      <span key={key}>
                        {country?.currencies[key]?.name}
                        {index !== array.length - 1 && ","}
                      </span>
                    )
                  )}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between w-11/12 gap-2 py-1 pr-6 md:items-start md:flex-row">
              <div className="flex items-center justify-center gap-x-2">
                <p className="font-semibold">Region:</p>
                <span>{country?.region}</span>
              </div>
              <div className="flex items-start justify-center w-full md:w-56 md:justify-start gap-x-2">
                <p className="font-semibold">Languages:</p>
                <span className="flex flex-col flex-wrap gap-1 md:flex-row">
                  {Object.keys(country?.languages)?.map((key, index, array) => (
                    <span key={key}>
                      {country?.languages[key]}
                      {index !== array.length - 1 && ","}
                    </span>
                  ))}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center py-1 gap-x-2">
              <p className="font-semibold">Sub Region:</p>
              <span>{country?.subregion}</span>
            </div>

            <div className="flex items-center justify-center py-1 gap-x-2">
              <p className="font-semibold">Capital:</p>
              <span>{country?.capital}</span>
            </div>

            <div className="flex flex-col flex-wrap items-start justify-start gap-2 py-1 md:flex-row mt-9">
              <p className="font-semibold">Border Countries:</p>
              <div className="flex flex-wrap items-center justify-start gap-x-1">
                {loadNeighbors ? (
                  <img src={SmallSizeLoadingSVG} alt="loading" />
                ) : neighbors?.length > 0 ? (
                  neighbors?.map((country) => (
                    <span
                      className="px-4 py-1 text-xs border rounded-md"
                      key={country.flag}
                    >
                      {country?.name.common}
                    </span>
                  ))
                ) : (
                  <span>No border country</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
