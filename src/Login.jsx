import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import "./index.css";

function Login() {
  const [email, setemail] = useState("falfareza@binaracademy.org");
  const [password, setPassword] = useState("Aneh1234");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("localStorage ", localStorage.getItem("token"));
    if (localStorage.getItem("token") !== null) {
      alert("Silahkan Logout Terlebih dahulu sebelum login");
      navigate("/LandingPage");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://shy-cloud-3319.fly.dev/api/v1/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
            expiresInMins: 30,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to login");
      }
      const data = await response.json();
      console.log("Logged in user data: ", data);
      const { token } = data;
      localStorage.setItem("token", token);
      window.location.href = "/LandingPage";
    } catch (error) {
      console.error("Login error: ", error);
      setError("Your email or password is wrong");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl shadow-slate-400 w-[700px] rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="flex justify-center text-2xl text-slate-700 font-bold mb-10">
          LOGIN
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/Register")}
            className="bg-white hover:bg-blue-500 hover:border-white hover:text-white border-black border-2 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
