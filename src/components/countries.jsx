/*eslint-disable*/
import LoadingSVG from "../assets/loading.svg";
const Countries = ({ countries, loading }) => {
  return (
    <div className="w-full">
      {loading ? (
        <div className="fixed flex items-center justify-center inset-0 bg-black/20 bg-opacity-30 z-10">
          <div className="rounded-lg">
            <img src={LoadingSVG} alt="loading" />
          </div>
        </div>
      ) : (
        <div className="px-6 grid grid-cols-4 gap-6 font-nunito max-w-6xl mx-auto">
          {countries?.map((country, _) => (
            <div key={_} className="flex flex-col px-3 gap-3">
              <div className="h-36 w-56 rounded-md border">
                <img
                  src={country?.flags?.png}
                  alt="flag"
                  className="rounded-md w-full h-full"
                />
              </div>
              <h4 className="font-bold">{country?.name?.common}</h4>
              <div className="flex flex-col gap-1 text-sm">
                <div className="flex items-center justify-start gap-x-2">
                  <p>Population:</p>
                  <span>{country?.population}</span>
                </div>
                <div className="flex items-center justify-start gap-x-2">
                  <p>Region:</p>
                  <span>{country?.region}</span>
                </div>
                <div className="flex items-center justify-start gap-x-2">
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
