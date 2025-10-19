import { AnimatePresence } from "motion/react";
import React, { useEffect } from "react";
import { motion } from "motion/react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaJsSquare } from "react-icons/fa";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaLaravel,
  FaReact,
  FaSass,
} from "react-icons/fa6";
import {
  SiAdobephotoshop,
  SiAppwrite,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

type ProjectDetailsType = {
  activeIndex: number | null;
  index: number;
  project: {
    title: string;
    type: string;
    description: string;
    skills: string[];
  };
};
const ProjectDetails = ({
  project,
  index,
  activeIndex,
}: ProjectDetailsType) => {
  const CheckIcon = (skill: string) => {
    switch (skill) {
      case "react":
        return <FaReact className="text-[#00d8ff] text-[50px]" />;
      case "laravel":
        return <FaLaravel className="text-[#ff0000] text-[50px]" />;
      case "mysql":
        return <SiMysql className="text-[#85ccde] text-[50px]" />;
      case "tailwind":
        return <SiTailwindcss className="text-[#00bcff] text-[50px]" />;
      case "html":
        return <FaHtml5 className="text-[#e34f26] text-[50px]" />;
      case "sass":
        return <FaSass className="text-[#cc6699] text-[50px]" />;
      case "css":
        return <FaCss3Alt className="text-[#0000ff] text-[50px]" />;
      case "js":
        return <FaJsSquare className="text-[#f7df1e] text-[50px]" />;
      case "typescript":
        return <BiLogoTypescript className="text-[#3178c6] text-[50px]" />;
      case "appwrite":
        return <SiAppwrite className="text-[#FD366E] text-[50px]" />;
      case "github":
        return <FaGithub className="text-[#ffffff] text-[50px]" />;
      case "photoshop":
        return <SiAdobephotoshop className="text-[#00a4e4] text-[50px]" />;
    }
  };

  return (
    <AnimatePresence mode="sync">
      {activeIndex == index && (
        <motion.div
          key={project.title}
          initial={{ translateX: -100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          className={`flex lg:max-w-[500px] lg:h-[400px] h-[300px] max-w-[90vw] w-full flex-col justify-start items-start duration-900 z-[1] fixed lg:top-[50%] top-[5%] lg:translate-y-[-50%] lg:right-[25%] right-[50%] translate-x-[50%]`}
        >
          <div className="flex-1 flex flex-col lg:justify-between justify-start items-center px-4 py-4 h-full cursor-default">
            <div>
              <h1 className="red text-[30px] font-bold text-center duration-200">
                {project.title}
              </h1>
              <p className="text-stone-400 text-[20px] lg:max-h-[300px] max-h-[200px] overflow-scroll text-center">
                {project.description}
              </p>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col justify-start items-center">
              <h1 className="red text-[20px] font-bold">Techs:</h1>
              <div className="flex gap-2 justify-start items-center px-4 h-[70px] w-full">
                {project.skills?.map((skill, index) => (
                  <div key={index}>{CheckIcon(skill)}</div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails;
