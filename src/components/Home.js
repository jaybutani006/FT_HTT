import React from "react";
import { useUserAuth } from "../context/UserAuthContextProvider";
import { useHistory, Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
const Home = () => {
  const { user, logOut } = useUserAuth();
  const history = useHistory();
  const auth = getAuth();
  const per = auth.currentUser;
  if (per !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = per.displayName;
    const email = per.email;
    const photoURL = per.photoURL;
    const emailVerified = per.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = per.uid;
  }
  useEffect(() => {
    console.log(per);
  }, [])
  
  const logOutHandler = async (e) => {
    e.preventDefault();
    try {
      await logOut();
      history.push("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="h-screen align-middle box-border flex  justify-center items-center ">
      <section className="rounded-lg shadow-xl max-w-[80%] p-4 border flex flex-col">
        <h1 className="py-2 text-2xl font-bold text-center ">
          React Firebase Authentication
        </h1>
        {user && (
          <h2 className="py-2 text-xl font-bold text-center ">{user.email}</h2>
        )}

        <h2 className="py-2 font-bold text-center ">
          You have successfully logged in.
        </h2>
        <div className="px-4 py-2 rounded-lg bg-blue-600 flex justify-center hover:bg-blue-500  ">
          <Link to="/" className=" text-white">
            Log Out
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
