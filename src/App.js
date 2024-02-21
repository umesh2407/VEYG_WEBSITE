import './App.css';
import {Routes,Route,useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Home from './components/home';
import Eventpage from './components/Eventpage';
import ScrollToTop from './components/ScrollToTop';

import Cod from './components/Gaming Events/JunkyardWars';
import TechTreasureHunt from './components/Gaming Events/TechTreasureHunt';
import TechAdventure from './components/Gaming Events/TechAdventure';
import CpuAssembly from './components/Gaming Events/CpuAssembly';
import Tech from './components/Events/Tech';
import NonTech from './components/Events/Non-Tech';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import ScrollComponent from './components/ScrollComponent';
// import LocomotiveScrollComponent from './components/LocomotiveScrollComponent';




function App() {
  
  const location = useLocation();
  return (
    <>
     {/* <ScrollComponent/> */}
     {/* <LocomotiveScrollComponent/> */}
     <ScrollToTop />
    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
      <Route path="/*" element={<Home/>}/>
      <Route path="/contact*" element={<Contact/>}/>
      <Route path="/about*" element={<About/>}/>
      <Route path="/events" element={<Eventpage/>} />
      <Route path="/events/technical" element={<Tech/>} />
      <Route path="/events/non-technical" element={<NonTech/>} />
    
      <Route path="/events/technical/JunkyardWars" element={<Cod/>} />
      <Route path="/events/technical/TechTreasureHunt" element={<TechTreasureHunt/>} />
      <Route path="/events/technical/TechAdventure" element={<TechAdventure/>} />
      <Route path="/events/technical/CpuAssembly" element={<CpuAssembly/>} />
   
      <Route path="/events/non-technical/callofduty" element={<Cod/>} />
      {/* <Route path="/events/non-technical/bgmi" element={<Bgmi/>} /> */}
      {/* <Route path="/events/non-technical/fifa2k23" element={<Fifa/>} /> */}
      {/* <Route path="/events/non-technical/granttruismo7" element={<Granturismo/>} /> */}
      
     </Routes> 
    </AnimatePresence>
   
    
     </>

  );
}

export default App;