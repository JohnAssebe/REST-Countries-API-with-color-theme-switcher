import { FiMoon } from "react-icons/fi";

const Header = () => {
  return (
    <div className="w-full px-4 shadow-md">
      <div className="flex items-center justify-between w-full py-4 font-nunito">
        <h4 className="text-lg font-semibold">Where in the world?</h4>
        <div className="flex items-center justify-center gap-x-3 cursor-pointer">
          <FiMoon />
          <span>Dark Mode</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
