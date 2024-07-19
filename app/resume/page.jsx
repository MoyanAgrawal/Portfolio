"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { delay, motion } from "framer-motion";

import { about, education, experience, skills } from "@/constants/path";
import { Scroll } from "lucide-react";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {experience.map((exp, idx) => {
              return (
                <TabsContent value="experience" className="w-full" key={idx}>
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{exp.title}</h3>
                    <p className="max-w-[600px] text-white mx-auto xl:mx-0">
                      {exp.description}
                    </p>
                    <ScrollArea className="h-[300px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {exp.items.map((item, idx) => {
                          return (
                            <li
                              key={idx}
                              className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                            >
                              <span className="text-accent">
                                {item.duration}
                              </span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                {item.position}
                              </h3>
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{item.company}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
              );
            })}

            {education.map((edu, idx) => {
              return (
                <TabsContent value="education" className="w-full" key={idx}>
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{edu.title}</h3>
                    <p className="max-w-[600px] text-white mx-auto xl:mx-0">
                      {edu.description}
                    </p>
                    <ScrollArea className="h-[300px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {edu.items.map((item, idx) => {
                          return (
                            <li
                              key={idx}
                              className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                            >
                              <span className="text-accent">
                                {item.duration}
                              </span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                {item.degree}
                              </h3>
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">
                                  {item.institution}
                                </p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
              );
            })}
            {skills.map((skill, idx) => {
              return (
                <TabsContent value="skills" className="w-full h-full" key={idx}>
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skill.title}</h3>
                    <p className="max-w-[600px] text-white mx-auto xl:mx-0">
                      {skill.description}
                    </p>
                  </div>
                  <ScrollArea className="h-[300px]">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {skill.skillList.map((item, idx) => {
                        return (
                          <li key={idx}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                    {item.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{item.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </TabsContent>
              );
            })}
            {about.map((ab, idx) => {
              return (
                <TabsContent
                  value="about"
                  className="w-full h-full text-center xl:text-left"
                  key={idx}
                >
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl font-bold">{ab.title}</h3>
                    <p className="'max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {ab.description}
                    </p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w[620px] mx-auto xl:mx-0">
                      {ab.info.map((item, idx) => {
                        return (
                          <li
                            key={idx}
                            className="flex items-center justify-center xl:justify-start gap-1"
                          >
                            <span className="text-white/60">
                              {item.fieldName + ":"}
                            </span>
                            <span className="lg:text-xl">{item.fieldValue}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
