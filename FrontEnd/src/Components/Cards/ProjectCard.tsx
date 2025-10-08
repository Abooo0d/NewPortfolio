import type { ReactRef } from "@gsap/react";
import useFullyInView from "../../Hooks/useFullyInView";
import { motion } from "motion/react";
import {
  FaCss3Alt,
  FaGithub,
  FaGlobe,
  FaHtml5,
  FaLaravel,
  FaReact,
  FaSass,
} from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiAdobephotoshop,
  SiAppwrite,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";
import useMediaQuery from "../../Hooks/UseMediaQuery";
import useScrollInOutView from "../../Hooks/useFullyInView";
import useActiveOnScroll from "../../Hooks/useFullyInView";
type ProjectCardProps = {
  project: {
    title?: string;
    description?: string;
    type?: string;
    imgUrl: string;
    links: {
      app: string;
      git: string;
    };
    skills: string[];
  };
  index: number;
  mainRef: ReactRef;
};

const ProjectCard = ({ project, index, mainRef }: ProjectCardProps) => {
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
  const { ref, isActive } = useActiveOnScroll(0.99, mainRef);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  return (
    <div
      className={`md:h-[100vh] h-[100vh] flex justify-center lg:items-center items-center sticky top-0 z-10  ${
        !!isActive ? "lg:pt-[100px] pt-[10px]" : "pt-[0px]"
      } ${index == 0 ? "mt-[80%]" : "mt-0"}`}
      ref={ref}
    >
      <motion.div
        className={`flex justify-start items-center p-4 gap-4 relative h-[500px] w-[1000px] rounded-[20px] bg-gradient-to-bl from-stone-950/40 to-black/40 border-solid border-[4px] duration-200 backdrop-blur-3xl [transform-style:preserve-3d] shadow-[0px_0px_20px_5px_#00000088] ${
          !!isActive ? " border-stone-900/50" : "border-[#ff0000]"
        }`}
        animate={{
          scale: isActive ? index * 0.04 + 0.7 : 1,
          rotateY: isLargeScreen ? (isActive ? "20deg" : "0") : "0",
          rotateX: isLargeScreen ? (isActive ? "-10deg" : "0deg") : "0",
          rotateZ: isLargeScreen ? (isActive ? "-2deg" : "0") : "0",
          translateX: isLargeScreen ? (isActive ? -300 + index * 30 : 0) : 0,
        }}
        style={{
          top: isLargeScreen
            ? `calc(-20% + ${index * 40}px)`
            : isMediumScreen
            ? `calc(5% + ${index * 40}px)`
            : isActive
            ? `calc(${index * 30}px)`
            : "0",
        }}
      >
        <div className="max-w-[400px] w-full h-full rounded-[20px] overflow-hidden relative border-[2px] border-solid border-stone-700/50 hover:border-[#ff0000] duration-300 group">
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 duration-300 backdrop-blur-md flex justify-center items-center gap-4">
            <a href={project.links.git}>
              <FaGithub className="text-[#ffffff]/80 text-[70px] hover:text-[#ff0000]/80 duration-200 cursor-pointer hover:text-[75px]" />
            </a>
            <a href={project.links.app}>
              <FaGlobe className="text-[#ffffff]/80 text-[70px] hover:text-[#ff0000]/80 duration-200 cursor-pointer hover:text-[75px]" />
            </a>
          </div>
          <img
            src={project.imgUrl}
            alt=""
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between items-start px-4 py-4 h-full cursor-default">
          <div>
            <h1 className="red text-[30px] font-bold">{project.title}</h1>
            <p className="text-stone-400 text-[20px] max-h-[300px] overflow-scroll">
              {project.description}
            </p>
          </div>
          <div className="flex flex-col justify-start items-start">
            <h1 className="red text-[24px] font-bold">{project.type}</h1>
            <h1 className="red text-[20px] font-bold">Techs:</h1>
            <div className="flex gap-2 justify-start items-center px-4 h-[70px] w-full">
              {project.skills?.map((skill, index) => (
                <div key={index}>{CheckIcon(skill)}</div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
{
  /**
  
   animate={{
          scale: isLargeScreen
            ? isActive
              ? 0.7
              : 1
            : isActive
            ? index * 0.02 + 0.6
            : 1,
          rotateY: isActive ? "20deg" : "0deg",
          rotateX: isLargeScreen ? (isActive ? "-10deg" : "0deg") : "0deg",
          rotateZ: isActive ? "-2deg" : "0deg",
          translateX: isLargeScreen
            ? isActive
              ? -200 + index * 20
              : 0
            : isActive
            ? -150 + index * 30
            : 0,
        }}
        style={{
          top: !!isLargeScreen
            ? !!isActive
              ? `calc(-10% + ${index * 40}px)`
              : "0"
            : !!isActive
            ? `calc(-10% + ${index * 30}px)`
            : "0",
        }}*/
}
