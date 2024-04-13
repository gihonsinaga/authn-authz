import React, { useEffect, useState } from "react";
import "./index.css";

function LandingPage() {
  const [user, setUser] = useState();

  console.log("location ", localStorage.getItem("token"));

  useEffect(() => {
    console.log("localStorage ", localStorage.getItem("token"));
    if (localStorage.getItem("token") === null) {
      alert("silahkan login dulu");
      navigate("/");
    }
  }, []);

  async function getMe() {
    try {
      const response = await fetch(
        "https://shy-cloud-3319.fly.dev/api/v1/auth/me",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log("data user :", data);
      setUser(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getMe();
  }, []);

  return (
    <div>
      <div className="">
        {/* <!-- header  --> */}
        <div className="flex justify-center">
          <div className=" justify-center flex flex-col border-2 max-w-[400px] shadow-xl px-28 py-12 max-sm:flex-col max-sm:px-6 max-sm:py-0">
            <div>
              <img src={user?.type} alt="" />
            </div>
            <div>Name : {user?.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
