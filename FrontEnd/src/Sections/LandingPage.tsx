import PrimaryButton from "../Components/Shared/PrimaryButton";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import SecondaryButton from "../Components/Shared/SecondaryButton";
import BlurText from "../Components/Shared/BlureText";
import { motion } from "motion/react";
const LandingPage = () => {
  return (
    <div className="relative min-h-screen max-h-screen w-screen max-w-screen bg-black flex justify-end items-end h-screen overflow-y-hidden snap-y snap-mandatory snap-start">
      <div className="w-full min-h-screen absolute z-0 top-0 left-0">
        <div className="absolute w-full h-full z-0">
          {/* <DarkVeil speed={1} hueShift={240} /> */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
        </div>
      </div>
      <div className="absolute top-0 left-[200px] flex flex-col justify-center min-h-screen max-w-[800px] gap-8 z-10 mt-8">
        <h1 className="landing-h1 text-stone-200 text-[120px] leading-[100px] cursor-default">
          <BlurText
            text="Your Vision"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-[120px] mb-8"
          />
          <BlurText
            threshold={0.5}
            delay={500}
            text=" My Mission"
            animateBy="words"
            direction="top"
            className="text-[120px] mb-8 ml-10"
          />
        </h1>
        <div className="flex flex-col pl-16 w-full">
          <motion.div
            className="text-stone-300 text-[20px] max-w-[700px] cursor-default"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
          >
            Welcome to a space where ideas take shape and creativity meets
            technology. This is more than just a portfolio — it’s a showcase of
            passion, problem-solving, and the art of building experiences that
            inspire. Let’s explore what’s possible, together.
          </motion.div>
        </div>
        <div className="w-full flex justify-start items-center gap-4 z-10 pl-16">
          <motion.div
            className="text-stone-400 text-lg max-w-[700px] cursor-default"
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, ease: "easeOut", delay: 2.4 }}
          >
            <PrimaryButton text="Explore My Portfolio" classes="gap-2">
              <FaArrowDown />
            </PrimaryButton>
          </motion.div>
          <motion.div
            className="text-stone-400 text-lg max-w-[700px] cursor-default"
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: "easeOut", delay: 3 }}
          >
            <SecondaryButton text="Hire Me" classes="gap-2">
              <FaArrowRight />
            </SecondaryButton>
          </motion.div>
        </div>
      </div>
      <div className="relative min-h-screen min-w-[50%] z-0">
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
            className="relative object-cover flex-1 max-h-screen min-h-screen min-w-full z-10 "
          />
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full z-10 h-[200px] bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
    </div>
  );
};

export default LandingPage;
