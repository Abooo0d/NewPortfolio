import RippleGrid from "../Components/RippleGrid";
import { motion } from "motion/react";
const Quote = () => {
  return (
    <div className="w-screen h-screen relative snap-start bg-black ">
      {/* <DotGrid
        dotSize={3}
        gap={10}
        baseColor="#222222"
        activeColor="#ff0000"
        proximity={100}
        shockRadius={200}
        shockStrength={5}
        resistance={750}
        returnDuration={1}
      /> */}
      <RippleGrid
        enableRainbow={false}
        gridColor="#ff0000"
        rippleIntensity={0.05}
        gridSize={25}
        gridThickness={8}
        mouseInteraction={false}
        mouseInteractionRadius={1.2}
        opacity={0.5}
      />
      <div className=" absolute inset-0 w-full h-screen bg-black/40 flex flex-col justify-center items-center">
        <div className="w-full h-[35%] bg-gradient-to-b from-black to-transparent" />
        <motion.div
          className="w-full flex-1 flex flex-col justify-center items-center text-center text-[35px] max-w-[60vw] font-semibold flex-wrap text-stone-300 cursor-default"
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <span>
            <span className="red">For me</span> coding is storytelling
          </span>{" "}
          <span>every function a sentence, </span>
          <span>every design a chapter.</span>
          <span>I craft digital experiences that inspire,</span>{" "}
          <span className="block">connect, and bring imagination to life </span>
          <span className="red block mx-auto">in meaningful ways</span>
        </motion.div>
        <div className="w-full h-[35%] bg-gradient-to-t from-black to-transparent" />
      </div>
    </div>
  );
};

export default Quote;
