/*eslint-disable */
import { IoSearchOutline } from "react-icons/io5";
const Filters = ({ onFilterChange }) => {
  return (
    <div className="w-full px-12 flex items-center justify-between my-6 font-nunito">
      <div className="relative flex items-center justify-center">
        <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          className="w-full h-full outline-none shadow-lg border rounded-md py-2 px-9"
          placeholder="Search for a country..."
          onChange={(e) => onFilterChange("search", e.target.value)}
        />
      </div>
      <select
        name="continents"
        id="continents"
        className="text-sm shadow-lg px-7 py-2 outline-none placeholder:text-black border rounded-md cursor-pointer"
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
