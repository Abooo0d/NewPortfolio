import { useEffect, useRef, useState } from "react";
import ProjectCard from "../Components/Cards/ProjectCard";
import { motion, useScroll } from "motion/react";
import { client } from "../lib/sanity";
import type { Project } from "../Types/ProjectType";
const Portfolio = () => {
  const [allProjects, setAllProjects] = useState<Project[] | null>([]);
  const [projects, setProjects] = useState<Project[] | null>([]);
  const [activeState, setActiveState] = useState("Frontend");
  useEffect(() => {
    client
      .fetch(`*[_type == "project"] | order(createdAt desc)`)
      .then((data) => {
        setAllProjects(data);
      })
      .catch(console.error);
  }, []);

  const container = useRef<HTMLDivElement>(null);
  const main = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: main,
    target: container,
    offset: ["start start", "end end"],
  });
  useEffect(() => {
    setProjects(allProjects?.filter((project) => project.type == activeState));
  }, [activeState]);
  return (
    <div className="w-screen min-h-screen h-full relative overflow-hidden snap-start">
      <motion.section
        className="overflow-y-auto relative"
        style={{
          height: "100vh",
          scrollSnapType: "y mandatory",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        ref={main}
      >
        <motion.div
          className="w-screen h-screen flex justify-center flex-col items-center z-[100]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.6, once: false }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className="lg:text-[40px] text-[30px] lg:text-center text-center w-full text-stone-200 flex gap-2 justify-center lg:justify-center mb-2 gap-x-2">
            Some Of My<span className="red">Creations</span>
          </h1>
          <div className="text-stone-400 text-[26px] lg:text-center text-center lg:max-w-[600px] max-w-[90vw]">
            My portfolio is a reflection of both my technical skills and
            creative approach to problem-solving. Each project represents more
            than code — it’s about crafting meaningful digital experiences. From
            responsive interfaces to scalable backends, these works highlight my
            ability to transform ideas into functional, impactful solutions.
          </div>
        </motion.div>
        <div
          style={{ height: `${!!projects && projects.length * 100}vh` }}
          ref={container}
          className="relative"
        >
          <div className="sticky flex justify-evenly items-center top-4 left-[50%] translate-x-[-50%] h-[60px] max-w-[80vw] w-[500px] rounded-full border-[2px] border-solid border-stone-900/50 z-100 backdrop-blur-md hover:border-[#ff0000] hover:hover:shadow-[0px_0px_15px_5px_#ff000088] duration-300 overflow-hidden">
            <span
              className="text-stone-300 relative z-10 cursor-pointer text-[22px] font-bold duration-200 flex-1 h-full flex justify-center items-center bg-black/40"
              onClick={() => {
                setActiveState("Frontend");
                container?.current?.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span
                className={`absolute w-full h-full z-0 bg-gradient-to-l from-transparent to-[#ff0000] rounded-full duration-400 ${
                  activeState == "Frontend"
                    ? "opacity-100 left-[0%]"
                    : "opacity-0 left-[100px]"
                }`}
              />
              <span className="relative"> UI/UX</span>
            </span>
            <span
              className="text-stone-300 relative cursor-pointer text-[22px] font-bold duration-200 flex-1 h-full flex justify-center items-center bg-black/40"
              onClick={() => {
                setActiveState("Fullstack");
                container?.current?.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span
                className={`absolute w-full h-full z-0 bg-gradient-to-r from-transparent to-[#ff0000] rounded-full duration-400 ${
                  activeState == "Fullstack"
                    ? "opacity-100 right-[0%]"
                    : "opacity-0 right-[100px]"
                }`}
              />
              <span className="relative"> Fullstack</span>
            </span>
          </div>
          {projects &&
            projects.map((project, index) => {
              const targetScale = 1 - (projects.length - index) * 0.03;
              const targetRotate = -(projects.length - index) * 2;
              return (
                <ProjectCard
                  project={project}
                  key={"project" + index}
                  index={index}
                  mainRef={main}
                  range={[index / projects.length, 1]}
                  targetScale={Math.round(targetScale * 100) / 100}
                  targetRotate={Math.round(targetRotate)}
                  scrollY={scrollYProgress}
                />
              );
            })}
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
