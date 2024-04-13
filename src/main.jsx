import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Login2 from "./Login2.jsx";
import AboutMe from "./AboutMe.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/LandingPage" element={<LandingPage />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
