import Techs from "./Techs";
import { motion } from "motion/react";
const About = () => {
  return (
    <>
      <div className="min-h-screen bg-black w-screen overflow-hidden relative overflow-y-hidden snap-y snap-mandatory snap-start">
        {/* <RippleGrid
        enableRainbow={false}
        gridColor="#ff0000"
        rippleIntensity={0.05}
        gridSize={20}
        gridThickness={10}
        mouseInteraction={false}
        mouseInteractionRadius={1.2}
        opacity={0.5}
      /> */}
        <div className="text-stone-200 max-h-screen absolute inset-0 max-w-[80%] mx-auto pt-[150px] ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
            viewport={{ once: true }}
            className="max-w-[350px] absolute top text-[20px] top-[35%] left-[50px] text-stone-300 text-center bg-black gray border-[2px] border-solid border-stone-900/50 rounded-[30px] p-[20px] hover:border-[#ff000088] hover:scale-110 hover:rotate-z-[-5deg] transition-all duration-300 z-10 cursor-default "
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
            className="max-w-[600px] absolute top text-[20px] top-[65%] left-[150px] text-stone-300 text-center bg-black gray border-[2px] border-solid  border-stone-900/50 rounded-[30px] p-[20px] hover:border-[#ff000088] hover:scale-110 hover:rotate-z-[-5deg] transition-all duration-300 z-10 cursor-default "
          >
            <div>
              For me, every project is more than just pixels on a screen — it`s
              a story, an emotion, and a chance to inspire. I thrive on
              experimenting, learning, and pushing boundaries to build
              interfaces that not only work but also wow.
            </div>
          </motion.div>
          <div className="text-[90px] cursor-default absolute top-[100px] right-0 about-h1 flex flex-col justify-end items-end ">
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
