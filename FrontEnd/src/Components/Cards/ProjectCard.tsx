import type { ReactRef } from "@gsap/react";
import { motion, MotionValue, useTransform } from "motion/react";

import type { Project } from "../../Types/ProjectType";
import { urlFor } from "../../lib/sanity";
type ProjectCardProps = {
  project: Project;
  index: number;
  mainRef: ReactRef;
  targetScale: number;
  targetRotate: number;
  range: [number, number];
  scrollY: MotionValue<number>;
};

const ProjectCard = ({
  project,
  index,
  targetScale,
  targetRotate,
  range,
  scrollY,
}: ProjectCardProps) => {
  const scale = useTransform(scrollY, range, [1, targetScale]);
  const rotate = useTransform(scrollY, range, [1, targetRotate]);

  return (
    <>
      <div
        className={`min-h-[100vh] flex lg:justify-between justify-center lg:items-center items-end sticky top-0 z-10 lg:px-20 ${
          index == 0 ? "mt-[500px]" : "mt-0"
        } `}
      >
        <motion.div
          className={`flex justify-center items-center p-4 w-[80%] max-w-[90vw] max-h-[80vh] relative mx-auto rounded-[20px] bg-gradient-to-bl from-stone-950/40 to-black/40 border-solid border-[1px] border-stone-800 hover:border-stone-500 duration-200 backdrop-blur-3xl [transform-style:preserve-3d] shadow-[0px_0px_20px_5px_#00000088]
          }`}
          style={{
            scale: scale,
            rotateZ: rotate,
          }}
          whileInView={{ opacity: 1, filter: "none" }}
        >
          <div className="flex-1 flex-col  overflow-hidden relative flex duration-300">
            <img
              src={urlFor(project.mainImage.asset).url() || ""}
              className="w-full h-full max-h-[60vh] max-w-[80vw] rounded-[10px] object-center object-cover"
            />
            <div className="w-full h-[10vh] flex justify-between items-center px-8 cursor-default">
              <div>
                <h1 className="text-[#ff0000] text-[20px] ">{project.title}</h1>
                <h1 className="text-stone-200">{project.type}</h1>
              </div>
              <div className="text-stone-300 cursor-pointer relative group p-4">
                Go For Details
                <div className="absolute bottom-[5px] right-[30px] group-hover:right-[-8px] w-[70px] h-[20px] opacity-0 group-hover:opacity-100 duration-200">
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
