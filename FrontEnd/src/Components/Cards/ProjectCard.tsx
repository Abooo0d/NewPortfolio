import type { ReactRef } from "@gsap/react";
import useFullyInView from "../../Hooks/useFullyInView";
import { motion } from "motion/react";
type ProjectCardProps = {
  project: {
    title?: string;
    description?: string;
    src: string;
    link: string;
    color: string;
  };
  index: number;
  mainRef: ReactRef;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { ref, isFullyVisible } = useFullyInView(0.9);
  return (
    <div
      className="h-[100vh] flex justify-center items-center sticky top-0"
      ref={ref}
    >
      <motion.div
        className="relative flex justify-center items-center flex-col gap-4 text-red-500 h-[500px] w-[1000px] rounded-[20px] bg-gradient-to-l from-stone-800/40 to-[#880000]/40 border-[2px] shadow-[0px_3px_40px_4px_#b5000088] border-[#ff0000]/80 border-solid backdrop-blur-2xl"
        animate={{
          scale: isFullyVisible ? 0.8 : 1,
          translateX: isFullyVisible ? 200 - index * 20 : 0,
        }}
        style={{ top: `calc(-10% + ${index * 40}px)` }}
      >
        {project.title}
        <img
          src={project.link}
          alt=""
          className="w-[200px] h-[300px] object-contain"
        />
      </motion.div>
    </div>
  );
};

export default ProjectCard;
