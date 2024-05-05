import { useRef, useState } from "react";
import { BG_BANNER_PATH } from "../utils/constants";
import Header from "./Header";
import { signInFormValidation, signUpFormValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [formErrorMessage, setFormErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleFormSubmission = () => {
    let message = "";
    if (isSignInForm) {
      message = signInFormValidation(
        email.current.value,
        password.current.value
      );
    } else {
      message = signUpFormValidation(
        email.current.value,
        password.current.value,
        name.current.value
      );
    }
    setFormErrorMessage(message);

    if (message !== null) {
      return;
    }

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User Created:", user);
          alert("User signed Up successfully");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User Logged in:", user);
          alert("Logged In Successfully");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative bg-black text-white min-h-[100vh] z-0">
      <Header></Header>
      <div className="absolute top-0 h-full w-full z-[-1] opacity-50">
        <img className="w-full h-full" src={BG_BANNER_PATH}></img>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 mx-auto my-4 bg-black bg-opacity-70 p-8"
      >
        <label className="text-white mb-4 text-2xl font-bold inline-block">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </label>
        <input
          ref={email}
          className="p-2 my-2 w-full bg-gray-600 bg-opacity-40 text-gray-300 rounded-lg"
          type="email"
          placeholder="user@example.com"
        ></input>

        {!isSignInForm && (
          <input
            ref={name}
            className="p-2 my-4 w-full bg-gray-600 bg-opacity-40 text-gray-300 rounded-lg"
            type="text"
            placeholder="Full Name"
          ></input>
        )}

        <input
          ref={password}
          className="p-2 my-4 w-full bg-gray-600 bg-opacity-40 text-gray-300 rounded-lg"
          type="password"
          placeholder="Password"
        ></input>

        <p className="font-bold text-red-600 text-center">{formErrorMessage}</p>

        <button
          className="w-full my-2 bg-red-700 px-4 py-2 rounded-lg font-bold"
          onClick={handleFormSubmission}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {isSignInForm ? (
          <p className="text-center my-2 text-opacity-70 text-white cursor-pointer">
            New to Netflix ?{" "}
            <a className="text-white font-bold" onClick={toggleSignInForm}>
              Sign up now
            </a>
          </p>
        ) : (
          <p className="text-center my-2 text-opacity-70 text-white cursor-pointer">
            Already a user ?{" "}
            <a className="text-white font-bold" onClick={toggleSignInForm}>
              Sign In now
            </a>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;

//netflixgpt_testuser1@gmail.com
//Netflixgpt@1234
