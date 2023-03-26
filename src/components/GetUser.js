import { React, useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import CardComponent from "./Card";

const GetUser = () => {
  const [dataa, setDataa] = useState([]);
  const getallusers = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4500/api/v1/getAllUsers`
      );
      setDataa(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getallusers();
  }, []);
  return (
    <div>
      <Header />
      <h1 className="flex  text-4xl justify-center mt-4 ">
        <p> Total Number of users : {dataa ? dataa.length : 0}</p>
      </h1>
      <h1 className="flex py-6 text-4xl justify-center mt-4 ">
        <p>Total Royalty count : {dataa ? dataa.length * 35 * 20 : 0} INR</p>
      </h1>
      <hr />
      <hr />
      <hr />
      <div className="flex flex-wrap justify-center mt-4">
        {dataa.map((item) => (
          <CardComponent email={item.email} fren={item.fren} />
        ))}
      </div>
    </div>
  );
};

export default GetUser;
