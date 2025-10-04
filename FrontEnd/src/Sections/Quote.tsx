import DotGrid from "../Components/DotGrid";

const Quote = () => {
  return (
    <div className="w-screen h-screen relative snap-start bg-black ">
      <DotGrid
        dotSize={3}
        gap={10}
        baseColor="#222222"
        activeColor="#ff0000"
        proximity={100}
        shockRadius={200}
        shockStrength={5}
        resistance={750}
        returnDuration={1}
      />
      <div className="text-white absolute inset-0 w-full h-screen bg-black/20 flex flex-col justify-between items-center">
        <div className="w-full h-[35%] bg-gradient-to-b from-black to-transparent" />
        <div className="w-full flex-1 flex justify-center items-center">
          ABood
        </div>
        <div className="w-full h-[35%] bg-gradient-to-t from-black to-transparent" />
      </div>
    </div>
  );
};

export default Quote;
