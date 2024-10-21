// utils/Data.js
import {
  BiLogoAngular,
  BiLogoAws,
  BiLogoCss3,
  BiLogoDocker,
  BiLogoFirebase,
  BiLogoGit,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoKubernetes,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";

import { AiOutlineDotNet } from "react-icons/ai";
import { SiKotlin, SiTerraform } from "react-icons/si";
import { SiMysql } from "react-icons/si";

export const SKILLS = [
  {
    category: "FullStack",
    skills: [
      { title: "JavaScript", icon: BiLogoJavascript, color: "yellow" },
      { title: "React", icon: BiLogoReact, color: "skyblue" },
      { title: "Node.js", icon: BiLogoNodejs, color: "green" },
      { title: "MongoDB", icon: BiLogoMongodb, color: "green" },
      { title: "FireBase", icon: BiLogoFirebase, color: "yellow" },
      { title: "Java", icon: BiLogoJava, color: "red" },
      { title: "Docker", icon: BiLogoDocker, color: "blue" },
      { title: ".Net", icon: AiOutlineDotNet, color: "purple" },
      {title: "My Sql", icon:SiMysql, color:"skyblue"}
      //add .not
    ],
  },
  {
    category: "Frontend",
    skills: [
      { title: "JavaScript", icon: BiLogoJavascript, color: "yellow" },
      { title: "React", icon: BiLogoReact, color: "skyblue" },
      { title: "Tailwind CSS", icon: BiLogoTailwindCss, color: "blue" },
      { title: "Css", icon: BiLogoCss3, color: "blue" },
      { title: "Angular JS", icon: BiLogoAngular, color: "cyan" },
    ],
  },
  {
    category: "Android",
    skills: [
      { title: "Java", icon: BiLogoJava, color: "red" },
      { title: "FireBase", icon: BiLogoFirebase, color: "yellow" },
      { title: "Kotlin", icon: SiKotlin, color: "Purple" },
      
    ],
  },
  {
    category: "Backend",
    skills: [
      { title: "Node.js", icon: BiLogoNodejs, color: "green" },
      { title: "Python", icon: BiLogoPython, color: "blue" },
      { title: "MongoDB", icon: BiLogoMongodb, color: "green" },
      { title: "Java", icon: BiLogoJava, color: "red" },
      { title: "FireBase", icon: BiLogoFirebase, color: "yellow" },
      { title: ".Net", icon: AiOutlineDotNet, color: "purple" },
      {title: "My Sql", icon:SiMysql, color:"skyblue"}
    ],
  },
  {
    category: "Database Design",
    skills: [
      { title: "MongoDB", icon: BiLogoMongodb, color: "green" },
      { title: "FireBase", icon: BiLogoFirebase, color: "yellow" },
      {title: "My Sql", icon:SiMysql, color:"skyblue"}
    ],
  },
  {
    category: "Web Application",
    skills: [
      { title: "JavaScript", icon: BiLogoJavascript, color: "yellow" },
      { title: "React", icon: BiLogoReact, color: "skyblue" },
      { title: "Tailwind CSS", icon: BiLogoTailwindCss, color: "blue" },
      { title: "FireBase", icon: BiLogoFirebase, color: "yellow" },
      { title: "Node.js", icon: BiLogoNodejs, color: "green" },
      { title: "MongoDB", icon: BiLogoMongodb, color: "green" },
      { title: "Java", icon: BiLogoJava, color: "red" },
      { title: ".Net", icon: AiOutlineDotNet, color: "purple" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { title: "Docker", icon: BiLogoDocker, color: "blue" },
      { title: "AWS", icon: BiLogoAws, color: "orange" },
      { title: "Git", icon: BiLogoGit, color: "red" },
      { title: "Kubernetes", icon: BiLogoKubernetes, color: "blue" },  
      { title: "TerraForm", icon: SiTerraform , color: "purple" },    
    ],
  },
];
