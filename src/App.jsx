import React, { useState, useRef } from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Techy from "./components/Techy";
import Project from "./components/Project";

const App = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const projectRef = useRef(null); // Ref to scroll to the Project section
  const [hoveredMember, setHoveredMember] = useState(null); // Track hovered member

  // Function to scroll to the Projects section
  const scrollToProjects = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handling click on team member
  const handleMemberClick = (member) => {
    setSelectedMember(member); // Set the selected member on click
    scrollToProjects(); // Scroll to projects
  };

  // Handling hover on team member
  const handleMouseEnter = (member) => {
    if (!selectedMember) { // Show projects only if no member is selected
      setHoveredMember(member);
    }
  };

  // Handling mouse leave on team member
  const handleMouseLeave = () => {
    if (!selectedMember) { // Hide projects if no member is selected
      setHoveredMember(null);
    }
  };

  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Techy />
        <Contact
          onMemberClick={handleMemberClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <Project
          ref={projectRef}
          selectedMember={selectedMember || hoveredMember} // Use hovered member if no selected member
        />
      </main>
    </>
  );
};

export default App;