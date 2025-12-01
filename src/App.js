import React from "react";
import Header from "./components/Header";
import "./css/style.css";
import "./css/mobile.css";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Family from "./components/Family";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    window.addEventListener("beforeunload", logout);
    return () => {
      window.removeEventListener("beforeunload", logout);
    };
  }, []);
  const logout = (e) => {
    localStorage.removeItem("user");
  };
  return (
    <>
      <BrowserRouter>
        <Header />
        <HeroSection />
        <Family />
        <Features />
        <Team />
        <Services />
        <Contact />
      </BrowserRouter>
    </>
  );
};

export default App;
