import { FaArrowDown } from "react-icons/fa6";
import Techs from "./Techs";
import { motion } from "motion/react";
import SecondaryButton from "../Components/Shared/SecondaryButton";
const About = () => {
  return (
    <>
      <div className="min-h-screen bg-black w-screen overflow-hidden relative overflow-y-hidden snap-y snap-mandatory snap-start">
        <div className="text-stone-300 max-h-screen absolute inset-0 max-w-[80%] mx-auto flex flex-col justify-center items-center gap-4 pt-4">
          <motion.div
            className="md:max-w-[95%] max-w-screen w-full about-h1 lg:text-[50px] md:text-[35px] text-[24px] text-center mx-auto lg:leading-[50px] md:leading-[35px] font-extrabold"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 1, once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="lg:ml-[340px]"> For me</span>
            <span className="red font-bold">
              {" "}
              coding is storytelling every function a sentence,every design a
              chapter
            </span>
            . I craft digital experiences that inspire, connect, and bring
            imagination to life in meaningful ways
          </motion.div>
          <motion.div
            className="full flex flex-col lg:justify-start justify-start lg:items-start items-center text-stone-400 gap-8 lg:w-[50%] md:w-[80%] w-screen px-4 md:px-0 lg:ml-auto "
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.8, once: true }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className=" text-[18px] text-center lg:text-left">
              Hey, I’m a digital creator who blends design and code to craft
              experiences that feel alive. For me, every project is more than
              just pixels on a screen — it’s a story, an emotion, and a chance
              to inspire. I thrive on experimenting, learning, and pushing
              boundaries to build interfaces that not only work but also wow.
            </div>
            <motion.div
              className="text-stone-400 text-lg lg:max-w-[700px] max-w-full cursor-default z-10"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 2.4 }}
              viewport={{ once: true }}
            >
              <SecondaryButton text="Explore My Portfolio" classes="gap-2">
                <FaArrowDown />
              </SecondaryButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Techs />
    </>
  );
};

export default About;
