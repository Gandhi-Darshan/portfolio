import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi';
import DarshanU from "/Project/portfolio/Image/DarshanU.png";
import Arjav from "/Project/portfolio/Image/arjav.png";
import Hardik from "/Project/portfolio/Image/hardik.png";
import Gaurang from "/Project/portfolio/Image/gaurang.png";
import Darshan from "/Project/portfolio/Image/Darshan.png";

const Info = ({ onMemberClick }) => {
  const teamMembers = [
    {
      name: "Arjav Patel",
      description: "Humber IGS",
      Role: "FullStack Developer",
      image: Arjav, // Replace this with actual image path or URL
      linkedin: "https://www.linkedin.com/in/arjavpatel",
      github: "https://github.com/arjavpatel",
    },
    {
      name: "Gaurang Dhameliya",
      image: Gaurang, // Replace with actual image path or URL
      Role: "Android Developer",
      description: "An Android application built using Kotlin.",
      linkedin: "https://www.linkedin.com/in/gaurangdhameliya",
      github: "https://github.com/gaurangdhameliya",
    },
    {
      name: "Hardik Shah",
      image: Hardik, // Replace with actual image path or URL
      Role: "Backend/DB Developer",
      description: "A team management web application.",
      linkedin: "https://www.linkedin.com/in/hardikshah",
      github: "https://github.com/hardikshah",
    },
    {
      name: "Darshan Upadhiyay",
      image: DarshanU, // Replace with actual image path or URL
      Role: "Web Developer",
      description: "A personal portfolio website built with React.",
      linkedin: "https://www.linkedin.com/in/darshanupadhiyay",
      github: "https://github.com/darshanupadhiyay",
    },
    {
      name: "Darshan Gandhi",
      description: "Humber IGS",
      Role: "Frontend Developer",
      image: Darshan, // Replace with actual image path or URL
      linkedin: "https://www.linkedin.com/in/darshangandhi",
      github: "https://github.com/darshangandhi",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen w-full">
        {/* Meet Our Team Header */}
        <div className="flex items-center justify-center py-28 mt-32">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-4xl font-light"
          >
            Meet Our Team
          </motion.h1>
        </div>

        {/* Team Members Section */}
        <div className="flex-grow flex flex-wrap justify-center gap-6 md:gap-6 mt-10 px-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <img
                  src={member.image} // Assuming you will provide correct image paths
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
                className="flex flex-col items-center gap-3 text-center mt-4"
              >
                <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-xl font-light md:text-3xl">
                  {member.name}
                </h1>

                <h4 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-xl font-light md:text-xl">
                  {member.Role}
                </h4>

                <h4 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-xl font-light md:text-xl">
                  {member.description}
                </h4>

                {/* Social Icons */}
                <div className="flex gap-4 mt-2">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 transition-all duration-300 hover:scale-105"
                    >
                      <BiLogoLinkedin size={30} />
                    </a>
                  )}

                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 transition-all duration-300 hover:scale-105"
                    >
                      <BiLogoGithub size={30} color="orange"/>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Info;