import GlareHover from "../GlareHover";

type PrimaryButtonProps = {
  text: string;
  children?: React.ReactNode;
  classes?: string;
};
const PrimaryButton = ({ text, children, classes }: PrimaryButtonProps) => {
  return (
    <button
      className={`relative flex justify-center items-center text-[18px] min-h-[50px] min-w-[250px] rounded-md bg-white text-stone-800 px-6 py-3 font-semibold hover:scale-105 transition-transform duration-200 cursor-pointer ${classes}`}
    >
      <div className="absolute inset-0 min-w-[200px] ">
        <GlareHover
          glareColor="#333"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={true}
          width="100%"
          height="100%"
          background="white"
        >
          <div className="flex justify-center items-center gap-2 mx-4">
            {text}
            {children}
          </div>
        </GlareHover>
      </div>
    </button>
  );
  // return (
  //   // <!-- From Uiverse.io by S4tyendra -->
  //   <div className="flex items-center justify-center h-screen">
  //     <div className="relative group">
  //       <button className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600">
  //         <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
  //         <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
  //           <div className="relative z-10 flex items-center space-x-3">
  //             <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">
  //               {text}
  //             </span>
  //             {children}
  //           </div>
  //         </span>
  //       </button>
  //     </div>
  //   </div>
  // );
};
export default PrimaryButton;
