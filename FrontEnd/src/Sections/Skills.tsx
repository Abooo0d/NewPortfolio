import MagicBento from "../Components/MagicBento";
import { motion } from "motion/react";

const Skills = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden max-h-screen max-w-screen w-screen flex justify-center items-center snap-start">
      <motion.div
        className="h-screen w-full flex items-center justify-center rounded-xl "
        initial={{ opacity: 0, y: 50 }} // Start hidden + pushed down
        whileInView={{ opacity: 1, y: 0 }} // Animate when scrolled into view
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="200, 0, 0"
        />
      </motion.div>
    </div>
  );
};

export default Skills;
