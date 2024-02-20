import './App.css';
import {Routes,Route,useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Home from './components/home';
import Eventpage from './components/Eventpage';
import ScrollToTop from './components/ScrollToTop';
import Valorant from './components/Gaming Events/Valorant';
import Cod from './components/Gaming Events/Cod';
import Bgmi from './components/Gaming Events/Bgmi';
import Fifa from './components/Gaming Events/Fifa';
import Granturismo from './components/Gaming Events/Granturismo';
import Gaming from './components/Events/Gaming';
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
      <Route path="/events/gaming" element={<Gaming/>} />
      <Route path="/events/gaming/valorant" element={<Valorant/>} />
      <Route path="/events/gaming/callofduty" element={<Cod/>} />
      <Route path="/events/gaming/bgmi" element={<Bgmi/>} />
      <Route path="/events/gaming/fifa2k23" element={<Fifa/>} />
      <Route path="/events/gaming/granttruismo7" element={<Granturismo/>} />
     
      
     </Routes> 
    </AnimatePresence>
   
    
     </>

  );
}

export default App;