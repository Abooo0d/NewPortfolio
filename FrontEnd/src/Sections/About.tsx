import Techs from "./Techs";
import { motion } from "motion/react";
const About = () => {
  return (
    <>
      <div className="min-h-screen bg-black w-screen overflow-hidden relative overflow-y-hidden snap-y snap-mandatory snap-start">
        <div className="text-stone-200 max-h-screen absolute inset-0 max-w-[80%] mx-auto pt-[0px] ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
            viewport={{ once: true }}
            className="md:max-w-[350px] hidden md:block absolute text-[20px] lg:top-[35%] top-[30%] lg:left-[0px] left-0 w-[100%] text-stone-300 text-center bg-black gray border-[2px] border-solid border-stone-800/50 rounded-[30px] p-[20px] hover:border-[#ff000088] hover:scale-110 hover:rotate-z-[-5deg] transition-all duration-300 z-10 cursor-default "
          >
            <div>
              Hey, I`m a digital creator who blends design and code to craft
              experiences that feel alive.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2.6 }}
            viewport={{ once: true }}
            className="md:max-w-[600px] hidden md:block absolute text-[20px] lg:top-[65%] md:top-[60%] md:left-[100px] w-full text-stone-300 text-center bg-black gray border-[2px] border-solid border-stone-800/50 rounded-[30px] p-[20px] hover:border-[#ff000088] hover:scale-110 hover:rotate-z-[-5deg] transition-all duration-300 z-10 cursor-default "
          >
            <div>
              For me, every project is more than just pixels on a screen — it`s
              a story, an emotion, and a chance to inspire. I thrive on
              experimenting, learning, and pushing boundaries to build
              interfaces that not only work but also wow.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2.2 }}
            viewport={{ once: true }}
            className="md:max-w-[600px] md:hidden absolute text-[20px] top-[30%] left-0 w-full text-stone-300 text-center bg-black gray border-[2px] border-solid border-stone-800/50 rounded-[30px] p-[20px] hover:border-[#ff000088] hover:scale-110 hover:rotate-z-[-5deg] transition-all duration-300 z-10 cursor-default "
          >
            <div>
              Hey, I`m a digital creator who blends design and code to craft
              experiences that feel alive.
            </div>
            <div>
              For me, every project is more than just pixels on a screen — it`s
              a story, an emotion, and a chance to inspire. I thrive on
              experimenting, learning, and pushing boundaries to build
              interfaces that not only work but also wow.
            </div>
          </motion.div>
          <div className="lg:text-[76px] xl:text-[86px] md:text-[56px] text-center md:text-left text-[35px] cursor-default absolute top-[20px] right-0 about-h1 w-full flex flex-col md:justify-end md:items-end items-center justify-center ">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Bringing <span className="red">ideas</span> to life
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
            >
              one line of <span className="red">code</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
              viewport={{ once: true }}
            >
              at a time.
            </motion.div>
          </div>
        </div>
      </div>
      <Techs />
    </>
  );
};

export default About;
