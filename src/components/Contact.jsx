import React from "react";
import { motion } from "framer-motion";
import Darshan from "/Project/portfolio/Image/Darshan.png";
import Car from "/Project/portfolio/Image/CarRentalManagment.png";
import DarshanU from "/Project/portfolio/Image/DarshanU.png";
import Arjav from "/Project/portfolio/Image/Arjav.png";
import Hardik from "/Project/portfolio/Image/Hardik.png";
import Gaurang from "/Project/portfolio/Image/Gaurang.png";

const Contact = ({ onMemberClick, onMouseEnter, onMouseLeave }) => {
  const teamMembers = [
    {
      name: "Arjav Patel",
      description: "Humber IGS",
      Role: "FullStack Developer",
      image: Arjav,
      projects: [
        {
          title: "Project A",
          description: "A full-stack application using React and Node.js.",
          tech: ["React", "Node", "Express", "MongoDB"],
          image: "/path/to/project-image.jpg",
        },
      ],
    },
    {
      name: "Gaurang Dhameliya",
      image: Gaurang,
      Role: "Android Developer",
      description: "An Android application built using Kotlin.",
      projects: [
        {
          title: "Project A",
          description: "A full-stack application using React and Node.js.",
          tech: ["React", "Node", "Express", "MongoDB"],
          image: "/path/to/project-image.jpg",
        },
      ],
    },
    {
      name: "Hardik Shah",
      image: Hardik,
      Role: "Backend/Database Developer",
      description: "A team management web application.",
      projects: [
        {
          title: "Project A",
          description: "A full-stack application using React and Node.js.",
          tech: ["React", "Node", "Express", "MongoDB"],
          image: "/path/to/project-image.jpg",
        },
      ],
    },
    {
      name: "Darshan Upadhiyay",
      image: DarshanU,
      Role: "Web Developer",
      description: "A personal portfolio website built with React.",
      projects: [
        {
          title: "Project A",
          description: "A full-stack application using React and Node.js.",
          tech: ["React", "Node", "Express", "MongoDB"],
          image: "/path/to/project-image.jpg",
        },
      ],
    },
    {
      name: "Darshan Gandhi",
      description: "Humber IGS",
      Role: "Frontend Developer",
      image: Darshan,
      projects: [
        {
          title: "Car Rental Management",
          description: "A Project to manage the car rental for those who need it",
          tech: ["React", "Redux", "Node.js"],
          image: Car,
        },
      ],
    },
  ];

  return (
    <div
      id="contact"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Meet Our Team
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            onMouseEnter={() => onMouseEnter(member)} // Show projects on hover
            onMouseLeave={onMouseLeave} // Hide projects on hover end
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="md:w-[150px] md:h-[150px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 
                hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 object-cover"
                onClick={() => onMemberClick(member)} // Set the selected member on click
              />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
              className="flex max-w-[600px] flex-col gap-3 text-center "
            >
              <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-xl font-light md:text-3xl">
                {member.name}
              </h1>

              <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-xl font-light md:text-xl">
                {member.Role}
              </h3>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;