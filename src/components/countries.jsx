/*eslint-disable*/
import LoadingSVG from "../assets/loading.svg";
import { Link } from "react-router-dom";
const Countries = ({ countries, loading }) => {
  return (
    <div className="w-full min-h-screen duration-500 dark:bg-veryDarkBlueAlt dark:text-veryLightGray">
      {loading ? (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/20 bg-opacity-30">
          <div className="rounded-lg">
            <img src={LoadingSVG} alt="loading" />
          </div>
        </div>
      ) : (
        <div className="grid items-center max-w-6xl grid-cols-1 gap-6 px-6 mx-auto xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-nunito">
          {countries?.map((country, _) => (
            <Link
              to={`/countryDetail/${country?.name?.official}`}
              key={_}
              className="flex flex-col w-full gap-3 pb-4 mx-auto duration-500 shadow-xl cursor-pointer rounded-b-xl dark:bg-darkBlue"
            >
              <div className="w-full border rounded-md h-36">
                <img
                  src={country?.flags?.png}
                  alt="flag"
                  className="w-full h-full rounded-t-md"
                />
              </div>
              <h4 className="px-3 font-bold">
                {country?.name?.common?.length > 27
                  ? country?.name?.common?.slice(0, 25) + "..."
                  : country?.name?.common}
              </h4>
              <div className="flex flex-col gap-1 px-3 text-sm">
                <div className="flex items-center justify-start gap-x-2">
                  <p>Population:</p>
                  <span>{country?.population}</span>
                </div>
                <div className="flex items-center justify-start gap-x-2">
                  <p>Region:</p>
                  <span>{country?.region}</span>
                </div>
                <div className="flex items-start justify-start gap-x-2">
                  <p>Capital:</p>
                  <span>{country?.capital}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Countries;
