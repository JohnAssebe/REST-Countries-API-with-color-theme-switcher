/*eslint-disable */
import { IoSearchOutline } from "react-icons/io5";
const Filters = ({ onFilterChange }) => {
  return (
    <div className="py-6 duration-500 dark:bg-veryDarkBlueAlt dark:text-veryLightGray">
      <div className="flex flex-col items-center justify-between w-full gap-4 px-2 sm:px-12 sm:flex-row font-nunito">
        <div className="relative flex items-center justify-center">
          <IoSearchOutline className="absolute -translate-y-1/2 left-4 top-1/2 text-slate-400" />
          <input
            className="w-full h-full py-2 duration-500 border rounded-md shadow-lg outline-none dark:border-none px-9 dark:bg-darkBlue"
            placeholder="Search for a country..."
            onChange={(e) => onFilterChange("search", e.target.value)}
          />
        </div>
        <select
          name="continents"
          id="continents"
          className="py-2 text-sm duration-500 border rounded-md shadow-lg outline-none cursor-pointer dark:appearance-none dark:border-none px-7 placeholder:text-black dark:bg-darkBlue"
          onChange={(e) => onFilterChange("select", e.target.value)}
        >
          <option value="" disabled selected hidden>
            Filter by Region
          </option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
