import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Eventpage from "./components/Eventpage";
import Valorant from "./components/Gaming Events/Valorant";
import ScrollToTop from "./components/ScrollToTop";
import Gaming from "./components/Events/Gaming";
import Cod from "./components/Gaming Events/Cod";
import Bgmi from "./components/Gaming Events/Bgmi";
import Fifa from "./components/Gaming Events/Fifa";
import Granturismo from "./components/Gaming Events/Granturismo";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/events" element={<Eventpage />} />
        <Route path="/events/gaming" element={<Gaming />} />
        <Route path="/events/gaming/valorant" element={<Valorant />} />
        <Route path="/events/gaming/callofduty" element={<Cod />} />
        <Route path="/events/gaming/bgmi" element={<Bgmi />} />
        <Route path="/events/gaming/fifa2k23" element={<Fifa />} />
        <Route path="/events/gaming/granttruismo7" element={<Granturismo />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
