
import logo from "../../src/assets/ZiegersLogo.png";
import safflogo from "../../src/assets/logo-saff.png";
import stars from "../../src/assets/stars.webp";
// import stroke from "../../src/assets/strokes.webp";
import sphere1 from "../../src/assets/planet.png";
import sphere2 from "../../src/assets/planet2.png";
import sphere3 from "../../src/assets/planet3.png";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import menu from "../assets/menu.svg";
import { useEffect, useState } from "react";
// import transition from "../transition";
import Loader from "./Loader.js";
import Footer from "./Footer.jsx";
import SpeakerSession from '../components/SpeakerSession';


function Home() {


  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/events");
  };
  const handleContactClick = () => {
    navigate("/contact");
  };
  const handleAboutClick = () => {
    navigate("/about");
  };

  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    document.title = "VEYG 2024";
    
     const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  
  }, []);

  return (
    
    <div className="wrapper overflow-hidden font-varino">
     {isLoading ? (
        <Loader />
      ) : (
        <>
     
      <nav
        className="flex text-[#fff] flex-row  items-center align-middle mx-auto pt-2 pl-10 justify-between  rounded-es-[100px] rounded-br-[100px] absolute m-gaming-nav"
        style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 15 }}
      >
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
        
          <div
            className="flex flex-row justify-evenly items-center align-middle h-menus lg:mb-[1rem]"
            style={getMenuStyles(menuOpened)}
          >
            <div onClick={handleRegisterClick} className="cursor-pointer font-varino ml-3 text-focus-in navbar-text">
          Events
            </div>
            {/* <div
              onClick={handleContactClick}
              className="flex justify-center items-center align-middle font-varino text-focus-in navbar-text cursor-pointer"
            >
              Contact
            </div> */}
      
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              className="text-focus-in m-hide"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Huge-icon/arrows/outline/arrow-down">
                <path
                  id="Vector 190"
                  d="M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425"
                  stroke="#F3F3F3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <div onClick={handleAboutClick} className="cursor-pointer font-varino ml-3 text-focus-in navbar-text">
              About
            </div>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              className="text-focus-in m-hide"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Huge-icon/arrows/outline/arrow-down">
                <path
                  id="Vector 190"
                  d="M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425"
                  stroke="#F3F3F3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            {/* <div onClick={handleRegisterClick} className="cursor-pointer font-varino ml-3 text-focus-in navbar-text">
          Events
            </div> */}
             <div
              onClick={handleContactClick}
              className="flex justify-center items-center align-middle font-varino text-focus-in navbar-text cursor-pointer"
            >
              Contact
            </div>
            <svg
              width="34"
              height="34"
              className="text-focus-in m-hide"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Huge-icon/arrows/outline/arrow-down">
                <path
                  id="Vector 190"
                  d="M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425"
                  stroke="#F3F3F3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
        </OutsideClickHandler>
        <a
          href="https://umesh2407.github.io/VEYG_WEBSITE/"
          className="font-varino mx-auto text-xl translate-x-[-2.7rem] lg:mb-[1rem] text-focus-in logo-text "
          style={{ 
            color: "#61AFF1",
            textShadow: "0 0 10px rgba(0, 0, 0, 0.9)" }}
        >
          HOME
        </a>
        
        <a
          href="https://umesh2407.github.io/VEYG_WEBSITE/"
          // target="_blank"
          className="w-[150px] m-hide h-[47px] pl-[3px] pr-[13px] mr-[3rem] justify-start items-center inline-flex  mb-[0.5rem]"
        >
          <div className="w-4 h-4 relative flex-col justify-start items-start flex " />
          <div className="text-center text-slate-50 text-xs font-normal font-['Varino'] flex flex-row justify-center items-center align-middle">
         
            <h1 className="ml-2"   
            style={{ 
            color: "#61AFF1",
            fontSize: "19px"}}>VEYG</h1>
          </div>
        </a>
        <div
          className="flex menu-icon cursor-pointer flex-row  justify-end mx-auto m-game-menu"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <img
            src={menu}
            alt="menu"
            width="50px"
            className="flex border border-solid  m-burger border-[#F3F3F3] rounded-lg m-burger2 text-focus-in"
          ></img>
        </div>
      </nav>
      <div className="bgstyle"></div>

      <img
        src={stars}
        alt="stars"
        className="absolute h-[40rem] w-[90rem] top-[8rem] left-[7rem] stars"
      ></img>

      <div className="flex justify-center">
        {/* <img
          src={stroke}
          alt="Strokes"
          className="w-[45%] h-[75%] absolute top-0 mt-20 strokes"
        ></img> */}
        <div className="flex flex-col lg:gap-3 absolute items-center top-[17%] h-[500px] w-[650px] mx-auto overflow-hidden hero-section">
          <img
            src={logo}
            alt="Veyg"
            className="h-[335px] w-[500px] translate-y-5 m-logo"
          ></img>
          
          <p className="text-black ziegers font-semibold text-[50px] leading-[65px] font-varino max-w-[850px] text-center lg:mt-[10px] ziegers2024">
            VEYG 2024
          </p>
          
        </div>
      </div>
      <h1
    className="text-white text-4xl font-bold mt-8 mb-4"
    style={{
      textAlign: 'center',
      animation: 'fadeInDown 1.5s ease', // Example animation, replace with your desired animation
    }}
  >
    Unveiling the Universe: ISRO's Journey Through Space and Time
  </h1>
        <div className="wrapper overflow-hidden font-varino">
      {/* Your existing code... */}

      <SpeakerSession />

      {/* Your existing code... */}
    </div>
    
      <img
        src={sphere1}
        alt="bottomleft"
        className="bottomleft blur-[1.3px] bottom-[30px] left-[160px] absolute h-[108px] w-[100px] "
      ></img>
      <img
        src={sphere1}
        alt="middleleft"
        className="middleleft blur-[2px] rotate-[19deg] bottom-[26rem] left-4 absolute h-[40px] w-[40px] "
      ></img>
      <img
        src={sphere2}
        alt="topleft"
        className="topleft blur-[2px] top-28 left-[190px] absolute h-[80px] w-[80px] "
      ></img>
      <img
        src={sphere3}
        alt="bottomright"
        className="bottomright blur-[2px] bottom-20 right-40 absolute h-[80px] w-[80px]  "
      ></img>
      <img
        src={sphere1}
        alt="middleright"
        className="middleright blur-[1.3px] bottom-60 rotate-[-150deg] right-6 absolute h-[40px] w-[40px] "
      ></img>
      <img
        src={sphere1}
        alt="topright"
        className="topright blur-[1.3px] top-28 right-24 absolute h-[108px] w-[10VEYG0px "
      ></img>

<Footer/>

</>
      )}
    </div>
  );
}
export default Home;