import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ThemeProvider from "./components/ThemeProvider";
import AccessibilityMenu from "./components/AccessibilityMenu.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import "./index.css";
import "./App.css";

function App() {
  const [isAccessibilityEnabled, setIsAccessibilityEnabled] = useState(false);

  return (
    <ThemeProvider>
      <Header isAccessibilityEnabled={isAccessibilityEnabled} 
          setIsAccessibilityEnabled={setIsAccessibilityEnabled}/>
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home isAccessibilityEnabled={isAccessibilityEnabled} />} />
          <Route path="/about" element={<About isAccessibilityEnabled={isAccessibilityEnabled}/>} />
        </Routes>
        <AccessibilityMenu setIsAccessibilityEnabled={setIsAccessibilityEnabled} />
        <Footer />
      {/* </Router> */}
    </ThemeProvider>
  );
}
export default App;