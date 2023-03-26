import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useUserAuth } from "../context/UserAuthContextProvider";
import { useHistory } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [fren, setFren] = useState("");

  const { signUp } = useUserAuth();

  const history = useHistory();
  //added
  // axios.post("http://localhost:2000/api/v1/register");
  const getLink = (e) => {
    setFren(e.target.value);
    // console.log(fren);
  };

  const register = async (email, password, fren) => {
    await axios.post(
          "http://localhost:4500/api/v1/register",
          {
            email,
            password,
            fren,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
    )
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setError("");


    try {
      await signUp(email, password);
      await register(email, password, fren);
      history.push("/");
    } catch (err) {
      // setError(err.message);

      // setTimeout(() => {
      //   setError("");
      // }, 3000);
    }
  };

  const passwordEyeToggler = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="h-screen align-middle box-border flex flex-col space-y-3   justify-center items-center ">
      <section className="rounded-lg shadow-xl max-w-[80%] p-4 border flex flex-col">
        <h1 className="py-2 text-4xl font-extrabold text-center ">Sign Up</h1>
        <h1 className="py-2 text-2xl font-bold text-center ">
          SAS Login / Authentication
        </h1>
        {error && (
          <h2 className="text-red-600 text-center  bg-red-200 p-3 mt-2 rounded-lg">
            {error}
          </h2>
        )}
        <form onSubmit={onSubmitHandler} className=" pt-8 space-y-5">
          <div className="px-4 py-2 border border-gray-400 rounded-lg">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="px-4 py-2  border border-gray-400 rounded-lg flex justify-between">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
            {!showPassword ? (
              <BsFillEyeFill
                className="place-self-center"
                onClick={passwordEyeToggler}
              />
            ) : (
              <BsFillEyeSlashFill
                className="place-self-center"
                onClick={passwordEyeToggler}
              />
            )}
          </div>
          {/* added code  */}

          <div className="relative w-full lg:max-w-sm">
            <select
              id="fren"
              onChange={getLink}
              className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
              <option>Franchise</option>
              <option>Surat</option>
              <option>Ahmedabad</option>
              <option>Pune</option>
              <option>Rajkot</option>
              <option>Hyderabad</option>
              <option>Banglore</option>
              <option>Chennai</option>
              <option>Delhi</option>
              <option>Noida</option>
            </select>
          </div>
          {/* added code  */}
          <div className="px-4 py-2 rounded-lg bg-blue-600 flex justify-center hover:bg-blue-500  ">
            <button type="submit" className=" text-white w-full">
              Sign Up
            </button>
          </div>
        </form>
      </section>
      <section className="rounded-lg shadow-xl max-w-[80%] p-4 border flex flex-col">
        <div className="text-base font-bold ">
          Already have an account ? 
          <Link to="/" className="text-blue-600 underline">
            LogIn
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
