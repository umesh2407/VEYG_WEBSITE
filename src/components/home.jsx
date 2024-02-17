
import logo from "../../src/assets/ZiegersLogo.png";
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
    
    document.title = "Ziegers - Fest of Computer Science";
    
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
            <div
              onClick={handleContactClick}
              className="flex justify-center items-center align-middle font-varino text-focus-in navbar-text cursor-pointer"
            >
              Contact
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
            <div onClick={handleRegisterClick} className="cursor-pointer font-varino ml-3 text-focus-in navbar-text">
          Events
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
        {/* <a
          href="/"
          className="font-varino font-bold mx-auto text-xl translate-x-[-2.7rem] lg:mb-[1rem] text-focus-in logo-text"
          style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.9)" }}
        >
          ZIEGERS
        </a> */}
        
        <a
          href="/"
          target="_blank"
          className="w-[150px] m-hide h-[47px] pl-[3px] pr-[13px] mr-[3rem] justify-start items-center inline-flex  mb-[0.5rem]"
        >
          <div className="w-4 h-4 relative flex-col justify-start items-start flex " />
          <div className="text-center text-slate-50 text-xs font-normal font-['Varino'] flex flex-row justify-center items-center align-middle">
         
            <h1 className="ml-2">VEYG 2024</h1>
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
            alt="Hello"
            className="h-[335px] w-[500px] translate-y-5 m-logo"
          ></img>
          <p className="text-black ziegers font-semibold text-[50px] leading-[65px] font-varino max-w-[850px] text-center lg:mt-[10px] ziegers2024">
            VEYG 2024
          </p>
          <p className="lg:mt-3 text-center text-[#080808] font-readex font-light text-[20px] leading-[25px] ziegers-text ">
            Ziegers enables participants to discover <br /> connections that was
            not possible before.
          </p>

          {/* <div
            onClick={handleRegisterClick}
            className="flex fuller-button justify-center items-center mt-4 rounded-[100px] text-[#F9F9FF] font-varino bg-[#09090A] shadow-[0_1.417px_2.834px_0_rgba(0, 0, 0, 0.05)] p-[20px_10px_20px_15px] inline-flex items-center justify-center gap-1 h-[3.5rem] cursor-pointer register-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 -2 16 16"
              fill="none"
            >
              <path
                d="M8.88233 14C10.2123 13.9999 11.5046 13.5581 12.5563 12.744C13.6081 11.9299 14.3596 10.7895 14.693 9.502M8.88233 14C7.55233 13.9999 6.26002 13.5581 5.20831 12.744C4.1566 11.9299 3.40505 10.7895 3.07166 9.502M8.88233 14C10.539 14 11.8823 11.3133 11.8823 8C11.8823 4.68667 10.539 2 8.88233 2M8.88233 14C7.22566 14 5.88233 11.3133 5.88233 8C5.88233 4.68667 7.22566 2 8.88233 2M14.693 9.502C14.8163 9.022 14.8823 8.51867 14.8823 8C14.884 6.96807 14.6182 5.95333 14.111 5.05467M14.693 9.502C12.9151 10.4876 10.9151 11.0032 8.88233 11C6.77433 11 4.79366 10.4567 3.07166 9.502M3.07166 9.502C2.94549 9.01132 2.88188 8.50665 2.88233 8C2.88233 6.93 3.16233 5.92467 3.65366 5.05467M8.88233 2C9.94649 1.99956 10.9916 2.28224 11.9105 2.81904C12.8293 3.35585 13.5888 4.12744 14.111 5.05467M8.88233 2C7.81817 1.99956 6.77305 2.28224 5.8542 2.81904C4.93535 3.35585 4.17586 4.12744 3.65366 5.05467M14.111 5.05467C12.6594 6.31195 10.8027 7.00276 8.88233 7C6.88366 7 5.05566 6.26667 3.65366 5.05467"
                stroke="#F9F9FF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className=" w-[123px] text-[10.5px] text-center font-normal translate-y-[0.5px]">
              Register now
            </span>
          </div> */}
        </div>
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