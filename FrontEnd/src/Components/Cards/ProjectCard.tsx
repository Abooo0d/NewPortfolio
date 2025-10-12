import type { ReactRef } from "@gsap/react";
import useFullyInView from "../../Hooks/useFullyInView";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
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
import { useEffect, useState } from "react";
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
  targetScale: number;
  targetRotate: number;
  range: [number, number];
  scrollY: MotionValue<number>;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

const ProjectCard = ({
  project,
  index,
  mainRef,
  targetScale,
  targetRotate,
  range,
  scrollY,
  activeIndex,
  setActiveIndex,
}: ProjectCardProps) => {
  const { ref, isActive: show } = useActiveOnScroll(0.5, mainRef);
  const scale = useTransform(scrollY, range, [1, targetScale]);
  const rotate = useTransform(scrollY, range, [1, targetRotate]);
  useEffect(() => {
    if (show) {
      setActiveIndex(index);
    } else {
      if (!!activeIndex && activeIndex > 0) {
        setActiveIndex(index - 1);
      } else {
        setActiveIndex(null);
      }
    }
  }, [show]);

  return (
    <div
      className={`h-[100vh] flex lg:justify-between justify-center lg:items-center items-end sticky top-0 z-10 lg:px-20 pb-10 lg:pb-0`}
      ref={ref}
    >
      <motion.div
        className={`flex justify-start items-center p-4 gap-4 relative w-[90%] md:w-[400px] h-[400px] lg:h-[500px] lg:w-[500px] max-w-[90vw] rounded-[20px] bg-gradient-to-bl from-stone-950/40 to-black/40 border-solid border-[2px] border-stone-800 duration-200 backdrop-blur-3xl [transform-style:preserve-3d] shadow-[0px_0px_20px_5px_#00000088]`}
        style={{
          scale: scale,
          rotateZ: rotate,
        }}
        initial={{ opacity: 0.8, filter: "blur(5px)" }}
        viewport={{ amount: 0.5, once: false }}
        whileInView={{ opacity: 1, filter: "none" }}
      >
        <div className="w-full h-full rounded-[20px] overflow-hidden relative border-[2px] border-solid border-stone-700/50 hover:border-[#ff0000] duration-300 group">
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
      </motion.div>
    </div>
  );
};

export default ProjectCard;
