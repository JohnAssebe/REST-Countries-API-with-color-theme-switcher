import { FiMoon, FiSun } from "react-icons/fi";
import useThemeToggler from "../hooks/useThemeToggler";
const Header = () => {
  const [colorTheme, setTheme] = useThemeToggler();
  const toggleTheme = () => {
    setTheme(colorTheme);
  };
  return (
    <div className="w-full px-2 duration-500 shadow-md sm:px-4 dark:bg-darkBlue dark:text-veryLightGray">
      <div className="flex items-center justify-between w-full py-4 font-nunito">
        <h4 className="text-sm font-semibold sm:text-lg">
          Where in the world?
        </h4>
        <div className="flex items-center justify-center text-xs sm:text-sm md:text-base sm:gap-x-3 gap-x-1">
          {colorTheme == "dark" ? (
            <FiMoon onClick={() => toggleTheme()} className="cursor-pointer" />
          ) : (
            <FiSun onClick={() => toggleTheme()} className="cursor-pointer" />
          )}
          {colorTheme == "dark" ? (
            <span>Dark Mode</span>
          ) : (
            <span>Light Mode</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
