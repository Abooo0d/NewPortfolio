import { useEffect, useRef, useState } from "react";
import ProjectCard from "../Components/Cards/ProjectCard";
import { motion, useScroll } from "motion/react";
import ProjectDetails from "../Components/Cards/ProjectDetails";
const Portfolio = () => {
  const projects = [
    {
      title: "Project -1 ",
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
      title: "Project -2 ",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, omnis! Eum excepturi quos dolor, quisquam nam perspiciatis in laboriosam placeat molestias exercitationem dignissimos commodi error. Sunt at expedita quos enim.",
      type: "Fullstack App",
      imgUrl: "https://picsum.photos/500/504",
      links: {
        app: "https://google.com",
        git: "https://github.com",
      },
      skills: ["react", "tailwind", "laravel", "mysql"],
    },
    {
      title: "Project -3 ",
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
      title: "Project - ",
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
  const main = useRef(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    container: main,
    target: container,
    offset: ["start start", "end end"],
  });

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
          style={{ height: `${projects.length * 100}vh` }}
          ref={container}
          className="mt-[50%]"
        >
          {projects.map((project, index) => {
            const targetScale = 1 - (projects.length - index) * 0.03;
            const targetRotate = -(projects.length - index) * 4;
            return (
              <>
                <ProjectCard
                  project={project}
                  key={"p" + index}
                  index={index}
                  mainRef={main}
                  range={[index * 0.25, 1]}
                  targetScale={targetScale}
                  targetRotate={targetRotate}
                  scrollY={scrollYProgress}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
                <ProjectDetails
                  activeIndex={activeIndex}
                  index={index}
                  project={project}
                />
              </>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
