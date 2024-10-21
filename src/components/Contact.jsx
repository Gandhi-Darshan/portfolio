import React from "react";
import { motion } from "framer-motion";
import Darshan from "../../Image/Darshan.png";
import Car from "../../Image/CarRentalManagment.png";
import Car2 from "../../Image/car2.png";
import Car3 from "../../Image/car3.png";
import Car4 from "../../Image/car4.png";
import Car5 from "../../Image/car5.png";
import DarshanU from "../../Image/darshanU.png";
import Arjav from "../../Image/arjav.png";
import Hardik from "../../Image/hardik.png";
import Gaurang from "../../Image/gaurang.png";
import Gp1 from "/Project/portfolio/Image/1.webp";
import Gp2 from "/Project/portfolio/Image/2.webp";
import Gp3 from "/Project/portfolio/Image/3.webp";
import Gp4 from "/Project/portfolio/Image/4.webp";
import Gps1 from "/Project/portfolio/Image/Sudoku1.png";
import Gps2 from "/Project/portfolio/Image/Sudoku2.png";
import Gps3 from "/Project/portfolio/Image/Sudoku3.png";
import tappark1 from "/Project/portfolio/Image/1tapPark1.jpeg";
import tappark2 from "/Project/portfolio/Image/1tapPark4.jpeg";
import tappark3 from "/Project/portfolio/Image/1tapPark5.jpeg";
import tappark4 from "/Project/portfolio/Image/1tapPark6.jpeg";
import pro1 from "/Project/portfolio/Image/pro1.jpg";
import pro2 from "/Project/portfolio/Image/pro2.png";
import pro3 from "/Project/portfolio/Image/pro3.png";
import pro4 from "/Project/portfolio/Image/pro4.png";
import pro5 from "/Project/portfolio/Image/pro5.png";
import ims1 from "/Project/portfolio/Image/ims1.png";
import ims2 from "/Project/portfolio/Image/ims2.png";
import ims3 from "/Project/portfolio/Image/ims3.png";
import ims4 from "/Project/portfolio/Image/ims4.png";
import ims5 from "/Project/portfolio/Image/ims5.png";
import ims6 from "/Project/portfolio/Image/ims6.png";
import crm1 from "/Project/portfolio/Image/crm1.png";
import crm2 from "/Project/portfolio/Image/crm2.png";
import crm3 from "/Project/portfolio/Image/crm3.png";
import crm4 from "/Project/portfolio/Image/crm4.png";
import et1 from "/Project/portfolio/Image/et1.jpeg";
import et2 from "/Project/portfolio/Image/et2.jpeg";
import et3 from "/Project/portfolio/Image/et3.jpeg";
import et4 from "/Project/portfolio/Image/et4.jpeg";

const Contact = ({ onMemberClick }) => {
  const teamMembers = [
    {
      name: "Arjav Patel",
      description: "Humber IGS",
      Role: "FullStack Developer",
      image: Arjav,
      projects: [
        {
          type: "web",
          title: "Complain Master",
          description: "Complain Master is a web-based application for managing complaints.",
          tech: ["ASP.NET (C#)", "SQL Server", "Visual Studio"],
          image: [pro1, pro2, pro3, pro4, pro5],
          github: "https://github.com/ArjavJP/Complain_Management",
        },
        {
          type: "web",
          title: "Institute Management System",
          description: "Web app for managing institute data.",
          tech: ["ASP.NET Core", "SQL Server"],
          image: [ims1, ims2, ims3, ims4, ims5, ims6],
          github: "https://github.com/ArjavJP/QMS_Master",
        },
        {
          type: "web",
          title: "Health Sector CRM System",
          description:
            "A Full-Stack MERN CRM solution tailored for the healthcare sector to streamline customer, task, and employee management.",
          tech: ["React.js", "CSS", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Nodemailer"],
          image: [crm3, crm2, crm1, crm4],
          github: "https://github.com/ArjavJP/Project",
        },
      ],
    },
    {
      name: "Gaurang Dhameliya",
      image: Gaurang,
      Role: "Android Developer",
      description: "Android app built using Kotlin.",
      projects: [
        {
          type: "android",
          title: "Remote For Samsung TV",
          description: "An app for controlling Samsung TV using an IR blaster.",
          tech: ["XML", "JAVA", "SQLite"],
          image: [Gp1, Gp2, Gp3, Gp4],
          github: "https://play.google.com/store/apps/developer?id=Lapus+Infotech",
        },
        {
          type: "android",
          title: "Classic Sudoku Puzzle",
          description: "A Sudoku puzzle game for Android.",
          tech: ["XML", "JAVA", "SQLite"],
          image: [Gps1, Gps2, Gps3],
          github: "https://apkpure.com/store/apps/details?id=com.codextechnology.geniussudoku",
        },
      ],
    },
    {
      name: "Hardik Shah",
      image: Hardik,
      Role: "Backend/DB Developer",
      description: "A backend solution for team management.",
      projects: [
        {
          type: "web",
          title: "Car Rental Management",
          description: "Car rental management platform.",
          tech: ["C#", "Visual Studio", "SQL Server"],
          image: [Car,Car2,Car3,Car4,Car5],
          github: "https://github.com/hardikshah18/CarManagementSystem_Project.git",
        },
        {
          type: "web",
          title: "Expense Tracker",
          description: "An Expense Tracker app in C# allows users to manage their personal finances by recording daily expenses and income. The app features a simple and intuitive user interface for adding, viewing, and categorizing transactions. It stores data using a local database and enables users to view detailed reports and summaries. Users can set spending limits and receive alerts when they approach their budget. The app helps individuals track their financial habits, promoting better budgeting and saving decisions",
          tech: ["C# ", "SQL"],
          image: [et1,et2,et3,et4],
        },
        {
          type: "android",
          title: "1tapPark Application",
          description: "Online parking management system.",
          tech: ["React", "Node", "Express", "MongoDB"],
          image: [tappark1, tappark2, tappark3, tappark4],
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
          type: "web",
          title: "Expense Tracker",
          description: "An Expense Tracker app in C# allows users to manage their personal finances by recording daily expenses and income. The app features a simple and intuitive user interface for adding, viewing, and categorizing transactions. It stores data using a local database and enables users to view detailed reports and summaries. Users can set spending limits and receive alerts when they approach their budget. The app helps individuals track their financial habits, promoting better budgeting and saving decisions",
          tech: ["C# ", "SQL"],
          image: [et1,et2,et3,et4],
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
          type: "web",
          title: "Car Rental Management",
          description: "Car rental management platform.",
          tech: ["C#", "Visual Studio", "SQL Server"],
          image: [Car,Car2,Car3,Car4,Car5],
          github: "https://github.com/hardikshah18/CarManagementSystem_Project.git",
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-12 md:gap-32">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Meet Our Team
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full sm:w-[300px] md:w-[350px] lg:w-[400px]"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-[150px] h-[150px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 
                hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 object-cover"
                onClick={() => onMemberClick(member)} // Set the selected member on click
              />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
              className="flex max-w-[400px] flex-col gap-3 text-center"
            >
              <h1 className="text-yellow-200 bg-clip-text opacity-80 text-xl font-light md:text-2xl lg:text-3xl py-5">
                {member.name}
              </h1>
              <p className="text-teal-300  bg-clip-text opacity-80 text-md md:text-xl">
                {member.Role}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;