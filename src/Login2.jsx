import React, { useState, useEffect } from "react";
import "./index.css";

function Login2() {
  const [Data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "kminchelle",
          password: "0lelplR",
          expiresInMins: 30, // optional, defaults to 60
        }),
      });

      if (!response.ok) {
        throw new Error("failed to fetch data");
      }

      const Data = await response.json();
      console.log("data user : ", Data);
      setData(Data);
    } catch (error) {
      console.error("Error : ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="">
        <p>Username: {Data.username}</p>
        <p>Email: {Data.email}</p>
        <p>First Name: {Data.firstName}</p>
        <p>Last Name: {Data.lastName}</p>
        <p>Gender: {Data.gender}</p>
        <img src={Data.image} alt="" />
      </div>
    </div>
  );
}

export default Login2;
