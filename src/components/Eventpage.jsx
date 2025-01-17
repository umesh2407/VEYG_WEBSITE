import React from "react";
import Navbar from "./navbar.jsx";
import gamecard from "../assets/TECH-EVENT.png";
import codexcard from "../assets/NONTECH-EVENT.png";
import VanillaTilt from "vanilla-tilt";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Footer from "./Footer.jsx";
import transition from "../transition.js";

const Eventpage = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showFirstCard, setShowFirstCard] = useState(false);
  const [showSecondCard, setShowSecondCard] = useState(false);
  const [showThirdCard, setShowThirdCard] = useState(false);
  const [showFourthCard, setShowFourthCard] = useState(false);
  // const mainRef = useRef(null);

  const navigate = useNavigate();

  const handleGamecardClick = () => {
    navigate("/events/technical");
  };

  const handlenonGamecardClick = () => {
    navigate("/events/non-technical");
  };

  useEffect(() => {
    const createDiv = () => {
      // const scene = document.querySelector(".scene");
      // for (let i = 0; i < 210; i++) {
      //   const div = document.createElement("div");
      //   scene.appendChild(div);
      // }

      document.title = "Veyg-Events";

      const tiltElements = document.querySelectorAll(".tilt");
      tiltElements.forEach((element) => {
        VanillaTilt.init(element, {
          max: 25,
          speed: 400,
          glare: true,
          "max-glare": 0.5,
        });
      });
    };

    createDiv();

    // const setStarsProperties = () => {
    //   const stars = document.querySelectorAll(".scene div");
    //   stars.forEach((star) => {
    //     let x = `${Math.random() * 200}vmax`;
    //     let y = `${Math.random() * 100}vh`;
    //     let z = `${Math.random() * 200 - 100}vmin`;
    //     let rx = `${Math.random() * 360}deg`;
    //     star.style.setProperty("--x", x);
    //     star.style.setProperty("--y", y);
    //     star.style.setProperty("--z", z);
    //     star.style.setProperty("--rx", rx);
    //     let delay = `${Math.random() * 1.5}s`;
    //     star.style.animationDelay = delay;
    //   });
    // };

    // setStarsProperties();
    setTimeout(() => {
      setShowNavbar(true);
      // const mainElement = mainRef.current;
      // mainElement.classList.add("blurred");
      setTimeout(() => {
        setShowFirstCard(true);
      }, 700);

      setTimeout(() => {
        setShowSecondCard(true);
      }, 1400);

      setTimeout(() => {
        setShowThirdCard(true);
      }, 2100);

      setTimeout(() => {
        setShowFourthCard(true);
      }, 2800);
    }, 500);
  }, []);

  return (
    <div className="wrapper">
      {showNavbar && <Navbar />}

      <div className="flex flex-row justify-center relative">
        <div className="flex flex-col lg:m-[5rem] absolute z-10">
          <div className="flex flex-row  items-center justify-between lg:gap-4 m-card1">
            <div
              onClick={handleGamecardClick}
              className="flex justify-center items-center align-middle  cursor-pointer "
            >
              <img
                src={gamecard}
                alt="gamecard"
                className={`w-[33rem]   card1 tilt ${
                  showFirstCard ? "show" : ""
                }`}
              />
            </div>
            <div
              onClick={handlenonGamecardClick}
              className="flex justify-center items-center align-middle cursor-pointer"
            >
              
               <img
                src={codexcard}
                alt="codexcard"
                className={`w-[33rem] card3 tilt ${
                  showThirdCard ? "show" : ""
                }`}
              />
            </div>
          </div>
         
        </div>
      </div>
      {/* 
      <main
        ref={mainRef}
        className="scene main-container"
        style={{ position: "relative", zIndex: 0 }}
      ></main> */}

      <Footer />
    </div>
  );
};

export default transition(Eventpage);
