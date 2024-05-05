import { useSelector } from "react-redux";
import { HEADER_LOGO, LOGOUT_LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="p-8 z-[1] flex justify-between items-center">
      <div>
        <img className="w-52 h-24" src={HEADER_LOGO}></img>
      </div>
      {user && (
        <button
          className="font-bold hover:underline cursor-pointer flex items-center"
          onClick={handleSignout}
        >
          <img src={LOGOUT_LOGO} />
          <span className="mx-2">Sign out</span>
        </button>
      )}
    </div>
  );
};

export default Header;
