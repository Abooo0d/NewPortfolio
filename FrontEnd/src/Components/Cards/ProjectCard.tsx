import type { ReactRef } from "@gsap/react";
import useFullyInView from "../../Hooks/useFullyInView";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useTransform,
} from "motion/react";

import useActiveOnScroll from "../../Hooks/useFullyInView";
import { useEffect, useState } from "react";
import { usePortfolioStore } from "../../lib/store";
import type { Project } from "../../Types/ProjectType";
import { urlFor } from "../../lib/sanity";
import PrimaryButton from "../Shared/PrimaryButton";
type ProjectCardProps = {
  project: Project;
  index: number;
  mainRef: ReactRef;
  targetScale: number;
  targetRotate: number;
  // targetBlur: number;
  range: [number, number];
  scrollY: MotionValue<number>;
};

const ProjectCard = ({
  project,
  index,
  mainRef,
  targetScale,
  targetRotate,
  // targetBlur,
  range,
  scrollY,
}: ProjectCardProps) => {
  // const CheckIcon = (skill: string) => {
  //   switch (skill) {
  //     case "react":
  //       return <FaReact className="text-[#00d8ff] text-[50px]" />;
  //     case "laravel":
  //       return <FaLaravel className="text-[#ff0000] text-[50px]" />;
  //     case "mysql":
  //       return <SiMysql className="text-[#85ccde] text-[50px]" />;
  //     case "tailwind":
  //       return <SiTailwindcss className="text-[#00bcff] text-[50px]" />;
  //     case "html":
  //       return <FaHtml5 className="text-[#e34f26] text-[50px]" />;
  //     case "sass":
  //       return <FaSass className="text-[#cc6699] text-[50px]" />;
  //     case "css":
  //       return <FaCss3Alt className="text-[#0000ff] text-[50px]" />;
  //     case "js":
  //       return <FaJsSquare className="text-[#f7df1e] text-[50px]" />;
  //     case "ts":
  //       return <BiLogoTypescript className="text-[#3178c6] text-[50px]" />;
  //     case "appwrite":
  //       return <SiAppwrite className="text-[#FD366E] text-[50px]" />;
  //     case "github":
  //       return <FaGithub className="text-[#ffffff] text-[50px]" />;
  //     case "photoshop":
  //       return <SiAdobephotoshop className="text-[#00a4e4] text-[50px]" />;
  //   }
  // };
  // const { activeIndex, setActiveIndex } = usePortfolioStore();
  // const { ref, isActive: show } = useActiveOnScroll(0.9, mainRef);
  const scale = useTransform(scrollY, range, [1, targetScale]);
  const rotate = useTransform(scrollY, range, [1, targetRotate]);
  // const blur = useTransform(scrollY, range, [0, targetBlur]);
  // const blurFilter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <>
      <div
        className={`h-[100vh] flex lg:justify-between justify-center lg:items-center items-end sticky top-0 z-10 lg:px-20 pb-10 lg:pb-0`}
        // ref={ref}
      >
        {/* <AnimatePresence mode="sync">
          <motion.div
            // initial={{ opacity: 0 }}
            // animate={{
            //   opacity: show ? 100 : 0,
            // }}
            transition={{ duration: 0.6 }}
            className={`flex lg:max-w-[500px] lg:h-[400px] h-[300px] max-w-[90vw] w-full flex-col justify-start items-start z-[1] absolute lg:top-[50%] top-[5%] lg:translate-y-[-50%] lg:right-[25%] right-[50%] translate-x-[50%] duration-500`}
          >
            <div className="absolute top-[-100px] h-[100px] w-full left-0 bg-gradient-to-t from-black to-transparent" />
            <div className="flex-1 bg-black flex flex-col lg:justify-between justify-start items-center px-4 py-4 h-full cursor-default">
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
                  {project.techs?.map((tech, index) => (
                    <div key={index}>{CheckIcon(tech)}</div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence> */}
        <motion.div
          className={`flex justify-center items-center p-4 w-[80%] max-w-[90vw] max-h-[90vh] relative mx-auto rounded-[20px] bg-gradient-to-bl from-stone-950/40 to-black/40 border-solid border-[2px] border-stone-800 hover:border-[#ff0000] duration-200 backdrop-blur-3xl [transform-style:preserve-3d] shadow-[0px_0px_20px_5px_#00000088]`}
          style={{
            scale: scale,
            rotateZ: rotate,
            // filter: blurFilter,
          }}
          whileInView={{ opacity: 1, filter: "none" }}
        >
          <div className="flex-1 flex-col  overflow-hidden relative flex duration-300">
            <img
              src={urlFor(project.mainImage.asset).url() || ""}
              className="w-full h-full max-h-[70vh] max-w-[80vw] rounded-[10px] object-center object-cover"
            />
            <div className="w-full h-[10vh] flex justify-between items-center px-8">
              <div>
                <h1 className="red text-[20px] ">{project.title}</h1>
                <h1 className="text-stone-200">{project.type}</h1>
              </div>
              <div className="text-stone-300 cursor-pointer relative group p-4">
                Go For Details
                <div className="absolute bottom-[5px] right-[30px] group-hover:right-[-8px]  w-[70px] h-[20px] opacity-0 group-hover:opacity-100 duration-200">
                  <span className="absolute w-[50px] h-[2px] top-[50%] translate-y-[-50%] bg-[#ff0000]" />
                  <span className="absolute right-0 border-[10px] border-solid border-transparent border-l-[#ff0000]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectCard;
