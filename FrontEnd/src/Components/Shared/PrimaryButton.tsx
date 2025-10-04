type PrimaryButtonProps = {
  text: string;
  children?: React.ReactNode;
  classes?: string;
};
const PrimaryButton = ({ text, children, classes }: PrimaryButtonProps) => {
  return (
    <div className="p-[1px] rounded-full overflow-hidden bg-stone-600 relative group duration-500 hover:shadow-[0px_0px_15px_5px_#ff000088]">
      <div className="p-[1px] bg-[#ff0000] absolute top-[0px] left-[0px] w-[50%] h-full z-0 group-hover:w-[150%] duration-500">
        <div className="bg-gradient-to-l from-stone-600 to-[#ff0000] w-[40%] h-full top-0 right-0 absolute group-hover:opacity-0 duration-500" />
      </div>
      <div className=" bg-black group-hover:bg-black/80 rounded-full relative duration-500">
        <button
          className={`relative flex justify-center items-center text-[18px] min-h-[50px] min-w-[300px] rounded-full bg-gradient-to-r from-[#aa0000]/40 via-stone-800/50 to-stone-800/50 text-stone-300 px-6 py-3 font-semibold cursor-pointer ${classes}`}
        >
          <div className="flex justify-center items-center gap-2 mx-3">
            {text}
            {children}
          </div>
        </button>
      </div>
    </div>
  );
};
export default PrimaryButton;
