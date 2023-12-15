/*eslint-disable */
import { IoSearchOutline } from "react-icons/io5";
const Filters = ({ onFilterChange }) => {
  return (
    <div className="flex flex-col items-center justify-between w-full gap-4 px-2 my-6 sm:px-12 sm:flex-row font-nunito">
      <div className="relative flex items-center justify-center">
        <IoSearchOutline className="absolute -translate-y-1/2 left-4 top-1/2 text-slate-400" />
        <input
          className="w-full h-full py-2 border rounded-md shadow-lg outline-none px-9"
          placeholder="Search for a country..."
          onChange={(e) => onFilterChange("search", e.target.value)}
        />
      </div>
      <select
        name="continents"
        id="continents"
        className="py-2 text-sm border rounded-md shadow-lg outline-none cursor-pointer px-7 placeholder:text-black"
        onChange={(e) => onFilterChange("select", e.target.value)}
      >
        <option value="" disabled selected hidden>
          Filter by Region
        </option>
        <option value="africa" className="hover:bg-red-300">
          Africa
        </option>
        <option value="america" className="hover:bg-red-300">
          America
        </option>
        <option value="asia" className="hover:bg-red-300">
          Asia
        </option>
        <option value="europe" className="hover:bg-red-300">
          Europe
        </option>
        <option value="oceania" className="hover:bg-red-300">
          Oceania
        </option>
      </select>
    </div>
  );
};

export default Filters;
