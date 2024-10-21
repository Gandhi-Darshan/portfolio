import React, { useState, useRef, useEffect } from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Techy from "./components/Techy";
import Project from "./components/Project";
import {Achivment} from "./components/Achivment";

const Home = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const projectRef = useRef(null); // Ref to scroll to the Project section

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
  };

  // Automatically scroll to the Projects section when selectedMember changes
  useEffect(() => {
    if (selectedMember) {
      scrollToProjects(); // Scroll to the Projects section after selection
    }
  }, [selectedMember]);

  return (
    <>
      <Navbar />
      <Hero />
      <Techy />
      <Contact onMemberClick={handleMemberClick} />
      <Project ref={projectRef} selectedMember={selectedMember} />
      <Achivment/>
    </>
  );
};

export default Home;