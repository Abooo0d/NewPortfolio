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
        className="relative flex justify-center items-center flex-col gap-4 text-red-500 h-[500px] w-[1000px] rounded-[20px] bg-stone-900/40 border-[2px] shadow-[0px_3px_20px_4px_#b50000] border-[#ff0000] border-solid backdrop-blur-lg"
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
