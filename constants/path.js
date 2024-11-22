import {
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiCanva,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const socials = [
  { icons: <FaGithub />, path: "https://github.com/MoyanAgrawal" },
  {
    icons: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/moyan-agrawal-549121227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    icons: <FaInstagram />,
    path: "https://www.instagram.com/moyan_agrawal?igsh=MWI5bGU0N3k3cGY1cQ==",
  },
  { icons: <FaYoutube />, path: "" },
  { icons: <FaTwitter />, path: "" },
];

export const stats = [
  { num: 1, text: "Years of internship experience" },
  { num: 5, text: "Projects" },
  { num: 10, text: "Technologies Used" },
  { num: 500, text: "Code commits" },
];

export const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Next.js, React.js, Node.js, MongoDB, etc...",
    href: "",
    value: "wdt",
  },
  {
    num: "02",
    title: "UI/UX developer",
    description: "Figma, Canva, Html, CSS, Javascript, etc...",
    href: "",
    value: "udt",
  },
  {
    num: "03",
    title: "App Development",
    description: "React-Native, other libraries, etc...",
    href: "",
    value: "adt",
  },
  {
    num: "04",
    title: "DBA",
    description: "SQL, PostresQL, Oracle, etc...",
    href: "",
    value: "dat",
  },
  // {
  //   num: "04",
  //   title: "Data Analyst",
  //   description: "SQL, PostresQL, Oracle, etc...",
  //   href: "",
  //   value: "dat",
  // },
];

export const about = [
  {
    title: "About Me",
    description:
      "Innovative IT professional with 1+ years of internship experience. Known for a proactive attitude, problem-solving skills, and a collaborative spirit. Enthusiastic about learning and adapting to new challenges.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Moyan Agrawal",
      },
      {
        fieldName: "Phone",
        fieldValue: "+91 7818827392",
      },
      {
        fieldName: "Experience",
        fieldValue: "1+ Years(internship)",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Indian",
      },
      {
        fieldName: "Email",
        fieldValue: "moyanagrawal144@gmail.com",
      },
      {
        fieldName: "Language",
        fieldValue: "English, Hindi",
      },
    ],
  },
];

export const experience = [
  {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description:
      "Dedicated IT professional with over a year of internship experience in software development. Adept at problem-solving, learning new technologies, and contributing to team success.",
    items: [
      {
        company: "Linked List Solutions",
        position: "Front-End Developer Intern",
        duration: "Oct 2023 - Apr 2024",
      },
      {
        company: "AppSquadz Software Pvt. Ltd.",
        position: "Full Stack Developer Intern",
        duration: "May 2023 - Jul 2023",
      },
      {
        company: "Webzit",
        position: "Full Stack Developer Intern",
        duration: "Sept 2024 - Oct 2024",
      },
    ],
  },
];

export const education = [
  {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description:
      "Persuaing a Bachelor's degree in Computer Science. Skilled in software development, database management, and IT support. Passionate about continuous learning and applying academic knowledge to real-world challenges. ",
    items: [
      {
        institution: "GLA University",
        degree: "B.Tech CSE",
        duration: "2025",
      },
      {
        institution: "St. Dominic's Sr. Sec. School",
        degree: "Intermediate",
        duration: "2021",
      },
      {
        institution: "St. Dominic's Sr. Sec. School",
        degree: "High School",
        duration: "2019",
      },
    ],
  },
];

export const skills = [
  {
    title: "My Skills",
    description:
      "Experienced in full-stack web development using Next.js, React.js and Node.js. Proficient in creating and maintaining databases with SQL and MongoDB. Skilled in debugging and optimizing code for performance. ",
    skillList: [
      {
        icon: <SiMongodb />,
        name: "MongoDb",
      },
      {
        icon: <SiExpress />,
        name: "express.js",
      },
      {
        icon: <FaReact />,
        name: "react.js",
      },
      {
        icon: <FaNodeJs />,
        name: "node.js",
      },
      {
        icon: <SiNextdotjs />,
        name: "next.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind.css",
      },
      {
        icon: <FaReact />,
        name: "react-native",
      },
      {
        icon: <TbSql />,
        name: "SQL",
      },
      {
        icon: <BiLogoPostgresql />,
        name: "postgreSQL",
      },
      {
        icon: <SiCanva />,
        name: "canva",
      },
      {
        icon: <FaHtml5 />,
        name: "html 5",
      },
      {
        icon: <FaCss3 />,
        name: "CSS 3",
      },
      {
        icon: <FaJs />,
        name: "Javascript",
      },
    ],
  },
];

export const projects = [
  {
    num: "01",
    category: "Internship",
    title: "School ERP System",
    description:
      "Developed a web application to address the challenge of managing school tasks effectively.",
    stack: [
      { name: "React.js" },
      { name: "Bootstrap.css" },
      { name: "SpringBoot" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://magenta-froyo-ab5a4b.netlify.app/school",
    github: "",
  },
  {
    num: "02",
    category: "Personal",
    title: "Task Manager",
    description:
      "Developed a comprehensive Task Manager web application to facilitate efficient organization,tracking, and management of tasks or projects depending upon their status and priority allotted to them.",
    stack: [
      { name: "MongoDb" },
      { name: "express.js" },
      { name: "React.js" },
      { name: "Node.js" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://660af2dcf4b89bdd72637b84--peppy-paletas-864d23.netlify.app/",
    github: "https://github.com/MoyanAgrawal/Task_Manager_FrontEnd/tree/master",
  },
  {
    num: "03",
    category: "Perosnal",
    title: "Travel Log",
    description:
      "Travel logs are personal accounts that chronicle the experiences,insights, and discoveries made during journeys. They serve as a way to document and reflect on the transformative power of trave",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React.js" },
      { name: "Node.js" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/Arunodaya9027/Travel-Log",
  },
];

export const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 7818827392",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "moyanagrawal144@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Mathura, Uttar Pradesh, India",
  },
];
