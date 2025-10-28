import PrimaryButton from "../Components/Shared/PrimaryButton";
import { FaArrowDown } from "react-icons/fa6";
import BlurText from "../Components/Shared/BlureText";
import { motion } from "motion/react";
const LandingPage = () => {
  return (
    <div className="relative min-h-screen max-h-screen w-screen max-w-screen flex justify-end items-end h-screen overflow-y-hidden snap-y snap-start">
      <div className="absolute top-0 lg:left-[200px] lg:translate-x-0 left-[50%] translate-x-[-50%] flex flex-col lg:justify-center justify-start items-center min-h-screen lg:max-w-[800px] max-w-[90%] w-full gap-8 z-10 lg:mt-8 mt-16">
        <h1 className="landing-h1 text-stone-200 text-center leading-[100px] cursor-default">
          <BlurText
            text="Your Vision"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-[60px] md:text-[80px] lg:text-[120px] lg:mb-8 text-center"
          />
          <BlurText
            delay={150}
            text=" My Mission"
            animateBy="words"
            direction="top"
            className="text-[60px] md:text-[80px] lg:text-[120px] lg:mb-8 lg:ml-10"
          />
        </h1>
        <div className="flex flex-col lg:pl-16 lg:w-full w-[90%]">
          <motion.div
            className="lg:text-stone-300 text-stone-400 text-[20px] lg:max-w-[700px] max-w-full text-center lg:text-left cursor-default"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            Welcome to a space where ideas take shape and creativity meets
            technology. This is more than just a portfolio — it’s a showcase of
            passion, problem-solving, and the art of building experiences that
            inspire. Let’s explore what’s possible, together.
          </motion.div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-4 z-10 lg:pl-16">
          <motion.div
            className="text-stone-400 text-lg lg:max-w-[700px] max-w-full cursor-default z-10"
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, ease: "easeOut", delay: 2.4 }}
          >
            <PrimaryButton text="Explore My Portfolio" classes="gap-2">
              <FaArrowDown />
            </PrimaryButton>
          </motion.div>
          {/* <motion.div
            className="text-stone-400 text-lg max-w-[700px] cursor-default"
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, ease: "easeOut", delay: 3 }}
          >
            <SecondaryButton text="Hire Me" classes="gap-2">
              <FaArrowRight />
            </SecondaryButton>
          </motion.div> */}
        </div>
      </div>
      <div className="relative min-h-screen lg:min-w-[50%] min-w-full z-0">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="absolute w-[200px] h-[200px] bottom-[100px] right-[350px] bg-[#ff0000]/50 blur-[100px] animate-pulse" />
          <div className="absolute w-[150px] h-[300px] bottom-[100px] right-[150px] bg-[#333333] blur-[100px] animate-pulse" />
          <img
            src="./../Assets/LandingPageImage.png"
            alt="LandingPageImage"
            className="lg:relative absolute bottom-0 left-1/2 transform -translate-x-1/2 h-full w-auto object-cover object-center flex-1 max-h-screen lg:min-h-screen z-[10]"
          />
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full z-10 h-[200px] bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
    </div>
  );
};

export default LandingPage;
