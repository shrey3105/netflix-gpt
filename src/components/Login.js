import { useState } from "react";
import { BG_BANNER_PATH } from "../utils/constants";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative bg-black text-white min-h-[100vh] z-0">
      <Header></Header>
      <div className="absolute top-0 h-full w-full z-[-1] opacity-50">
        <img className="w-full h-full" src={BG_BANNER_PATH}></img>
      </div>
      <form className="w-3/12 mx-auto my-4 bg-black bg-opacity-70 p-8">
        <label className="text-white my-4 text-2xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </label>
        <input
          className="p-2 my-2 w-full bg-gray-600 bg-opacity-40 text-gray-300 rounded-lg"
          type="email"
          placeholder="user@example.com"
        ></input>

        {!isSignInForm && (
          <input
            className="p-2 my-4 w-full bg-gray-600 bg-opacity-40 text-gray-300 rounded-lg"
            type="text"
            placeholder="Full Name"
          ></input>
        )}

        <input
          className="p-2 my-4 w-full bg-gray-600 bg-opacity-40 text-gray-300 rounded-lg"
          type="password"
          placeholder="Password"
        ></input>

        <button className="w-full my-2 bg-red-700 px-4 py-2 rounded-lg font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="my-4 text-center opacity-90">OR</p>

        <button className="w-full py-2 px-4 text-center capitalize font-semibold rounded-md my-4 bg-slate-100 bg-opacity-40">
          Use a sign-in code
        </button>

        <p className="text-center">Forgot Password?</p>

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
