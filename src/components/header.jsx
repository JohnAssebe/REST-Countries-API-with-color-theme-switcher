import { FiMoon } from "react-icons/fi";

const Header = () => {
  return (
    <div className="w-full px-2 shadow-md sm:px-4">
      <div className="flex items-center justify-between w-full py-4 font-nunito">
        <h4 className="text-sm font-semibold sm:text-lg">
          Where in the world?
        </h4>
        <div className="flex items-center justify-center text-xs cursor-pointer sm:text-sm sm:gap-x-3 gap-x-1">
          <FiMoon />
          <span>Dark Mode</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
