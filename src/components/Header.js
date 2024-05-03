import { HEADER_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="p-8 z-[1]">
      <img className="w-52 h-24" src={HEADER_LOGO}></img>
    </div>
  );
};

export default Header;
