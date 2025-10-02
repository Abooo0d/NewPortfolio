import RippleGrid from "../Components/RippleGrid";

const About = () => {
  return (
    <div className="min-h-screen bg-black w-screen overflow-hidden relative overflow-y-hidden snap-y snap-mandatory snap-start">
      <RippleGrid
        enableRainbow={false}
        gridColor="#ff0000"
        rippleIntensity={0.05}
        gridSize={20}
        gridThickness={10}
        mouseInteraction={false}
        mouseInteractionRadius={1.2}
        opacity={0.5}
      />
      {/* <div className="absolute inset-0 bg-black/50 z-10" /> */}
    </div>
  );
};

export default About;
