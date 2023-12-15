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
