import { useDispatch, useSelector } from "react-redux";
import { HEADER_LOGO, LOGOUT_LOGO } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES } from "../utils/languages/languageConstants";
import { toggleLanguage } from "../utils/gptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gptSearch = gpt.gptSearch;
  const userLang = gpt.language;

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;

        // storing the uid, email and name of the user in the redux user Slice
        dispatch(
          addUser({
            uid: uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
        let pathName = window.location.pathname;
        if (pathName === "/browse" || pathName === "/search") {
          return;
        } else {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        navigate("/");
      }
      // we return a callback function . This callback function is called when the component unmounts.
      // Reason for this change is that suppose header mounts and then unmounts and then mounts, our
      // useEffect will be called multiple times and hence our onAuthStateChanged will be registered multiple times
      // leading to being called multiple times which is a bad practice and can lead to inconsistencies
    });
    return () => {
      console.log("Header Component Unmounted");
      unsubscribe();
    };
  }, []);

  return (
    <div className="p-6 z-[1] flex items-center absolute w-full bg-transparent bg-opacity-40 top-0 bg-gradient-to-b from-black">
      <Link to="/">
        <img className="w-40 h-24" src={HEADER_LOGO}></img>
      </Link>
      <div className="flex items-center ml-auto">
        {user && gptSearch && (
          <select
            className="bg-black text-white py-2 px-4 mx-2 font-semibold rounded-lg"
            value={userLang}
            onChange={(e) => {
              dispatch(toggleLanguage(e.target.value));
            }}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        )}
        {user && (
          <Link to={gptSearch ? "/browse" : "/search"}>
            <button className="mx-4 text-white px-4 py-2 bg-green-500 rounded-lg font-semibold">
              {gptSearch ? "Browse" : "GPTSearch"}
            </button>
          </Link>
        )}
        {user && (
          <button
            className="font-bold cursor-pointer flex items-center"
            onClick={handleSignout}
          >
            <img src={LOGOUT_LOGO} />
            <span className="mx-2 text-white">Sign out</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
