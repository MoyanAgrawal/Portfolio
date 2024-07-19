import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer";
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
  { icons: <FaGithub />, path: "" },
  { icons: <FaLinkedinIn />, path: "" },
  { icons: <FaInstagram />, path: "" },
  { icons: <FaYoutube />, path: "" },
  { icons: <FaTwitter />, path: "" },
];

export const stats = [
  { num: 1, text: "Years of experience" },
  { num: 5, text: "Projects" },
  { num: 10, text: "Technologies Used" },
  { num: 500, text: "Code commits" },
];

export const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quibusdam",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX developer",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quibusdam",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quibusdam",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quibusdam",
    href: "",
  },
];

export const about = [
  {
    title: "About Me",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, pariatur debitis eligendi doloribus temporibus dolorum ratione nisi nesciunt ",
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
        fieldValue: "1+ Years",
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
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, pariatur debitis eligendi doloribus temporibus dolorum ratione nisi nesciunt ",
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
    ],
  },
];

export const education = [
  {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, pariatur debitis eligendi doloribus temporibus dolorum ratione nisi nesciunt ",
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
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, pariatur debitis eligendi doloribus temporibus dolorum ratione nisi nesciunt ",
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
        icon: <FaFigma />,
        name: "figma",
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
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ad ",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image:"/assets/work/thumb1.png",
    live:'',
    github:'',
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ad ",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image:"/assets/work/thumb2.png",
    live:'',
    github:'',
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ad ",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image:"/assets/work/thumb3.png",
    live:'',
    github:'',
  },
];
