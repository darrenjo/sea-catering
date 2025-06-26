import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Menu from "./components/Menu";
import Subscription from "./components/Subscription";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <SpeedInsights />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="*" element={<Homepage />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>
            &copy; 2024 SEA Catering. All rights reserved. | Healthy Meals,
            Anytime, Anywhere
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
