// utils/Data.js
import {
  BiLogoAndroid,
  BiLogoAngular,
  BiLogoAws,
  BiLogoDocker,
  BiLogoFirebase,
  BiLogoGit,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";

export const SKILLS = [
  {
    category: "Frontend",
    skills: [
      { title: "JavaScript", icon: BiLogoJavascript, color: "yellow" },
      { title: "React", icon: BiLogoReact, color: "skyblue" },
      { title: "Tailwind CSS", icon: BiLogoTailwindCss, color: "blue" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { title: "Node.js", icon: BiLogoNodejs, color: "green" },
      { title: "Python", icon: BiLogoPython, color: "blue" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { title: "Docker", icon: BiLogoDocker, color: "blue" },
      { title: "AWS", icon: BiLogoAws, color: "orange" },
      { title: "Git", icon: BiLogoGit, color: "red" },
    ],
  },
  // Add more categories and skills as needed
];
