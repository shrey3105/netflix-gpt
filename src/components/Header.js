import { useDispatch, useSelector } from "react-redux";
import { HEADER_LOGO, LOGOUT_LOGO } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
      // we return a callback function . This callback function is called when the component unmounts.
      // Reason for this change is that suppose header mounts and then unmounts and then mounts, our
      // useEffect will be called multiple times and hence our onAuthStateChanged will be registered multiple times
      // leading to being called multiple times which is a bad practice and can lead to inconsistencies
      return () => {
        unsubscribe();
      };
    });
  }, []);

  return (
    <div className="p-8 z-[1] flex justify-between items-center absolute w-full bg-transparent bg-opacity-40 top-0">
      <div>
        <img className="w-52 h-24" src={HEADER_LOGO}></img>
      </div>
      {user && (
        <button
          className="font-bold hover:underline cursor-pointer flex items-center"
          onClick={handleSignout}
        >
          <img src={LOGOUT_LOGO} />
          <span className="mx-2 text-white">Sign out</span>
        </button>
      )}
    </div>
  );
};

export default Header;
