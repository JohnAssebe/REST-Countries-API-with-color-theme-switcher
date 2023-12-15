/*eslint-disable*/
import LoadingSVG from "../assets/loading.svg";
const Countries = ({ countries, loading }) => {
  return (
    <div className="w-full">
      {loading ? (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/20 bg-opacity-30">
          <div className="rounded-lg">
            <img src={LoadingSVG} alt="loading" />
          </div>
        </div>
      ) : (
        <div className="grid items-center max-w-6xl grid-cols-1 gap-6 px-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-nunito">
          {countries?.map((country, _) => (
            <div
              key={_}
              className="flex flex-col gap-3 pb-4 mx-auto shadow-xl cursor-pointer w-3/2 sm:w-full rounded-b-xl"
            >
              <div className="w-full border rounded-md h-36">
                <img
                  src={country?.flags?.png}
                  alt="flag"
                  className="w-full h-full rounded-t-md"
                />
              </div>
              <h4 className="px-3 font-bold">{country?.name?.common}</h4>
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Countries;
