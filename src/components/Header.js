import {React,useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getAuth } from "firebase/auth";


const Header = () => {
    const logout = async () => {
      await axios.get(
        "http://localhost:4500/api/v1/logout")
  };
  const auth = getAuth();
  const per = auth.currentUser;
  const email = per.email;
  const [rolee, setRolee] = useState("admin");

  // const getRole = async () => {
  //   let dataa = await axios.get(
  //     `http://localhost:4500/api/v1/getuserdetail/${email}`
  //   );
  //   console.log(dataa);
  //   setRolee(dataa[0].role);
  //   console.log(dataa[0].role)
  // }
  // useEffect(
  //   getRole
  // , [])
  
 
  
  return (
    <div className="bg-green-400 flex flex-row  items-center">
      <img
        className="h-14 w-auto ml-8 rounded-full ..."
        src="https://fattoslimshikhaaggarwalsharma.com/wp-content/uploads/2022/01/New-Project.png"
        alt="Logo"
      />
      <div className="flex flex-row items-center justify-between w-full">
        <ul className="text-white flex text-2xl">
          {email && email !== "d@gmail.com" && (
            <li className="py-8 px-8  cursor-pointer ...">
              <Link className="hover:text-white" to="/home">
                Home
              </Link>
            </li>
          )}
          {email && email !== "d@gmail.com" && (
            <li className="py-8 px-8 cursor-pointer ...">
              <Link className="hover:text-white" to="/about">
                About
              </Link>
            </li>
          )}
          {email && email !== "d@gmail.com" && (
            <li className="py-8 px-8 cursor-pointer ...">
              <Link className="hover:text-white" to="/contact">
                Contact Us
              </Link>
            </li>
          )}
          {email && email !== "d@gmail.com" && (
            <li className="py-8 px-8 cursor-pointer ...">
              <Link
                id="buttonpay"
                className="hover:text-white"
                to="/pay"
              >
                Pay
              </Link>
            </li>
          )}
          {email && email === "d@gmail.com" && (
            <li className="py-8 px-8 cursor-pointer ...">
              <Link className="hover:text-white" to="/analyze">
                Analysis
              </Link>
            </li>
          )}
          {email && email === "d@gmail.com" && (
            <li className="py-8 px-8 cursor-pointer ...">
              <Link className="hover:text-white" to="/getAllUsers">
                GetUsers
              </Link>
            </li>
          )}
        </ul>
        <div className="flex items-center justify-end mr-8">
          <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-b-2 border-gray-300 py-2">
              <input
                className="appearance-none border-none w-full text-gray-100 mr-3 py-2 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Search"
              />
              <button
                className="flex-shrink-0 bg-white text-gray-800 hover:text-gray-900 font-bold py-2 px-2 rounded"
                type="button"
              >
                Search
              </button>
            </div>
          </form>
          <button
            onClick={logout}
            className="bg-white text-gray-800 hover:text-gray-900 font-bold py-2 px-4 rounded-md ml-4 "
          >
            <Link to="/">Logout</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header
