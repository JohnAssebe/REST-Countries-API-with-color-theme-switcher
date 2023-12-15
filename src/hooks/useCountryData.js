import { useQuery } from "react-query";
import { api } from "./api";
const getCountries = async (name, region) => {
  const response = await api.get(
    `${
      name ? "/name/" + `${name}` : region ? "/region/" + `${region}` : "/all"
    }`
  );
  return response?.data;
};

export const useCountries = (name, region) => {
  return useQuery(["Allcountries", name, region], () =>
    getCountries(name, region)
  );
};

const getCountry = async (name) => {
  const response = await api.get(`/name/${name}`);
  return response?.data[0];
};

export const useCountry = (name) => {
  return useQuery(["country", name], () => getCountry(name));
};

const getCountriesFromCode = async (codes) => {
  if (!codes) return;
  var codestring = "";
  codes?.map((ctrycode) => {
    codestring = codestring.concat(`${ctrycode},`.toString());
  });
  const response = await api.get(`/alpha?codes=${codestring}`);
  return response?.data;
};

export const useCountriesFromCode = (borders) => {
  return useQuery(["country", borders], () => getCountriesFromCode(borders));
};
