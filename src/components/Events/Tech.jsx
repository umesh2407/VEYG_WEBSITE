import React, { useEffect, useState } from "react";
import Navbar from "../navbar.jsx";
import banner from "../../assets/gamingPageBanner.webp";
import mobilebanner from "../../assets/m-gamingbanner.webp";
import bgmi from "../../assets/bgmi.jpg";
import codm from "../../assets/codm.jpeg";
import fifa2k23 from "../../assets/fifa2k23.jpg";
import gt7 from "../../assets/gt7.png";
import { useNavigate} from "react-router-dom";
import transition from "../../transition.js";
import Footer from "../Footer.jsx";
import Gameloader from "../Gameloader.js";

const Tech = () => {
  const navigate = useNavigate();
  

  const handleCodCardClick = () => {
    navigate("/events/technical/JunkyardWars");
  };
  const handleTechTreasureHuntCardClick = () => {
    navigate("/events/technical/TechTreasureHunt");
  };
  const handleFifaCardClick = () => {
    navigate("/events/technical/TechAdventure");
  };
  const handleGt7CardClick = () => {
    navigate("/events/technical/CpuAssembly");
  };

  const [loading, setLoading] = useState(true);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Veyg 2k24";
    document.title = "Technical-Event";
    const delay = setTimeout(() => {
     setIsLoading(false);
   }, 3000);

   return () => clearTimeout(delay);
  }, []);

 




  return (
    <div className="wrapper">
       {isLoading ? (
        <Gameloader/>
      ) : (
        <>
      <Navbar />
      <div className="wrapper overflow-x-hidden font-varino mb-5">
        <div className="relative">
        <img src={banner} alt="gamingBanner" className="m-hide" />
        <img src={mobilebanner} alt="gamingBanner" className="lg:hidden" />
          <div className="flex justify-center">
            <div className="gaming font-varino uppercase text-[140px] absolute -bottom-12 z-10 m-gaming">
              Tech Event
            </div>
          </div>
          <div className=" absolute w-[100vw] h-[100px] gamingbanneroverlay m-gamingbanneroverlay -bottom-[3rem] flex justify-center items-center"></div>
        </div>
        <div className="text-center text-neutral-300 text-opacity-90 text-[30px] font-medium font-readex mt-[7rem] z-10 m-gaming-desc">
    
        </div>
        <div className="flex flex-col text-white mb-10 flex-wrap m-gamecard gap-16 mt-[7rem]">
          <div className="flex flex-row justify-center gap-12 game-card-1 ">
            <div
              className="rounded-[66px] bgmigamingcard bgmi m-bgmi"
              onClick={handleTechTreasureHuntCardClick}
            >
              <div className="w-[550px] h-[400px] text-center  flex justify-center cursor-pointer relative grayscale hover:grayscale-0 transition-all duration-500 ease-in-out m-bgmi">
                <div className="overlay m-overlay"></div>
                <img
                  src={bgmi}
                  alt="tech-tre-hunt"
                  className="p-4 h-[400px] w-[550px] rounded-[70px] absolute m-bgmi-img "
                />
                <div className="flex text-center my-auto mx-auto text-[80px] z-10 bgmitext m-bgmitext">
                  
                </div>
              </div>
            </div>

            <div
              className="rounded-[66px] codmgamingcard codm m-codm "
              onClick={handleCodCardClick}
            >
              <div className="w-[550px] h-[400px] text-center flex justify-center cursor-pointer relative grayscale hover:grayscale-0 transition-all duration-500 ease-in-out m-codm ">
                <div className="overlay m-overlay"></div>
                <img
                  src={codm}
                  alt="codbanner"
                  className="p-4 h-[400px] w-[550px] rounded-[70px] absolute m-codm-img "
                />
                {/* <div className="flex text-center my-auto mx-auto text-[80px] z-10 codmtext m-codmtext">
                  CODM
                </div> */}
              </div>
            </div>
          </div>
          <div className="">
          </div>
          <div className="flex flex-row justify-center gap-12 game-card-1">
            <div
              onClick={handleFifaCardClick}
              className="rounded-[66px] fifagamingcard fifa m-fifa"
            >
              <div className="w-[550px] h-[400px] text-center  flex justify-center cursor-pointer  relative grayscale hover:grayscale-0 transition-all duration-[600ms] ease-in-out m-fifa">
                <div className="overlay m-overlay"></div>
                <img
                  src={fifa2k23}
                  alt="TechAdventure"
                  className="p-4 h-[400px] w-[550px] rounded-[80px] absolute m-fifa-img "
                />
               
              </div>
            </div>
            <div
              onClick={handleGt7CardClick}
              className="rounded-[66px] assetocorsagamingcard assetocorsa m-assetocorsa"
            >
              <div className="w-[550px] h-[400px] text-center  flex justify-center cursor-pointer  relative grayscale hover:grayscale-0 transition-all duration-500 ease-in-out m-assetocorsa">
                <div className="overlay m-overlay"></div>
                <img
                  src={gt7}
                  alt="CpuAssembly"
                  className="p-4 h-[400px] w-[550px] rounded-[80px] absolute m-assetocorsa-img "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[2rem] justify-center items-center align-middle mx-auto">

      <Footer/>
      </div>
      </>
      )}
    </div>
  );
};

export default transition(Tech);