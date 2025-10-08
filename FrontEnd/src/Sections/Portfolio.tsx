import { useRef } from "react";
import ProjectCard from "../Components/Cards/ProjectCard";
import { motion } from "motion/react";
const Portfolio = () => {
  const projects = [
    {
      title: "Matthias Leidinger",
      description:
        "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      type: "Fullstack App",
      imgUrl: "https://picsum.photos/500/504",
      links: {
        app: "https://google.com",
        git: "https://github.com",
      },
      skills: ["react", "tailwind", "laravel", "mysql"],
    },
    {
      title: "Matthias Leidinger",
      description:
        "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      type: "Fullstack App",
      imgUrl: "https://picsum.photos/500/504",
      links: {
        app: "https://google.com",
        git: "https://github.com",
      },
      skills: ["react", "tailwind", "laravel", "mysql"],
    },
    {
      title: "Matthias Leidinger",
      description:
        "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      type: "Fullstack App",
      imgUrl: "https://picsum.photos/500/504",
      links: {
        app: "https://google.com",
        git: "https://github.com",
      },
      skills: ["react", "tailwind", "laravel", "mysql"],
    },
    {
      title: "Matthias Leidinger",
      description:
        "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      type: "Fullstack App",
      imgUrl: "https://picsum.photos/500/504",
      links: {
        app: "https://google.com",
        git: "https://github.com",
      },
      skills: ["react", "tailwind", "laravel", "mysql"],
    },
  ];
  const container = useRef(null);
  return (
    <div className="w-screen min-h-screen h-full relative snap-start">
      {/* <div className="absolute top-0 left-0 w-full h-[100px] flex justify-center items-center">
        <div className="flex justify-evenly items-center gap-4 rounded-full w-[500px] h-[60px] border-[2px] border-solid border-stone-900/50 hover:border-[#ff000055] z-[100] hover:shadow-[0px_0px_10px_0px_#ff000088] duration-300 group">
          <span className="text-stone-600 cursor-pointer px-4 py-2 rounded-full border-[2px] border-transparent hover:border-[#ff0000] hover:bg-stone-950 duration-200 hover:shadow-[0px_0px_10px_0px_#ff000088] group-hover:text-stone-200">
            UI/UX
          </span>
          <span className="text-stone-600 cursor-pointer px-4 py-2 rounded-full border-[2px] border-transparent hover:border-[#ff0000] hover:bg-stone-950 duration-200 hover:shadow-[0px_0px_10px_0px_#ff000088] group-hover:text-stone-200">
            Full Stack
          </span>
          <span className="text-stone-600 cursor-pointer px-4 py-2 rounded-full border-[2px] border-transparent hover:border-[#ff0000] hover:bg-stone-950 duration-200 hover:shadow-[0px_0px_10px_0px_#ff000088] group-hover:text-stone-200">
            Frontend
          </span>
        </div>
      </div> */}
      <div className="absolute lg:top-[150px] top-[5%] lg:right-[80px] right-[50%] translate-x-[50%] lg:translate-x-0 w-[350px] h-[400px] flex justify-start flex-col items-start">
        <h1 className="lg:text-[24px] text-[30px] lg:text-left text-center w-full text-stone-200 flex lg:flex-col justify-center lg:justify-start mb-2 gap-x-2">
          Some Of My<span className="red">Creations</span>
        </h1>
        <div className="text-stone-400 hidden lg:block text-[20px] lg:text-left text-center">
          My portfolio is a reflection of both my technical skills and creative
          approach to problem-solving. Each project represents more than code —
          it’s about crafting meaningful digital experiences. From responsive
          interfaces to scalable backends, these works highlight my ability to
          transform ideas into functional, impactful solutions.
        </div>
      </div>
      <motion.section
        className="h-screen overflow-y-auto relative "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        ref={container}
      >
        {projects.map((project, index) => (
          <ProjectCard
            project={project}
            key={"p" + index}
            index={index}
            mainRef={container}
          />
        ))}
      </motion.section>
    </div>
  );
};

export default Portfolio;
