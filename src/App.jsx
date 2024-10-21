import React, { useState, useRef } from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Techy from "./components/Techy";
import Project from "./components/Project";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Info from "./info";
import Tech from "./components/Techy";

const App = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleMouseEnter = (member) => {
    if (!selectedMember) {
      setHoveredMember(member);
    }
  };

  const handleMouseLeave = () => {
    if (!selectedMember) {
      setHoveredMember(null);
    }
  };

  return (
    <>
      {/* Background with custom radial gradient */}
      <div
        className="fixed -z-10 min-h-screen w-full bg-cover bg-center"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
          backgroundSize: "cover",
        }}
      />
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16 w-full">
        <Router>
          <Navbar /> {/* Add responsive Navbar */}
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />

            {/* Add other components that will be routed here */}
            <Route path="/tech" element={<Techy />} />

            <Route
              path="/contact"
              element={
                <Contact
                  onMemberClick={handleMemberClick}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              }
            />

            <Route
              path="/projects"
              element={
                <Project
                  selectedMember={selectedMember || hoveredMember} // Use hovered member if no selected member
                />
              }
            />
          </Routes>
        </Router>
      </main>
    </>
  );
};

export default App;