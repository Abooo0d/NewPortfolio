import GlareHover from "../GlareHover";

type SecondaryButtonProps = {
  text: string;
  children?: React.ReactNode;
  classes?: string;
};
const SecondaryButton = ({ text, children, classes }: SecondaryButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center text-[18px] min-h-[50px] min-w-[200px] rounded-md bg-white/10 backdrop-blur-md text-stone-200 px-6 py-3 font-semibold hover:scale-105 transition-transform duration-200 border-[1px] border-solid border-white/50 cursor-pointer ${classes}`}
    >
      <div className="absolute inset-0 min-w-[200px] ">
        <GlareHover
          glareColor="#fff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={true}
          width="100%"
          height="100%"
          background="222"
        >
          <div className="flex justify-center items-center gap-2 mx-4">
            {text}
            {children}
          </div>
        </GlareHover>
      </div>
    </button>
  );
};

export default SecondaryButton;
