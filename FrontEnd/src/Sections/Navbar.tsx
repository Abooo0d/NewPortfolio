const Navbar = () => {
  return (
    <div className="fixed z-100 w-[600px] left-[50%] translate-x-[-50%] top-[10px] py-2 flex gap-4 justify-evenly items-center hover:border-white/10 hover:scale-110 hover:bg-black/30 duration-300 rounded-full h-[70px] border-transparent border-solid border-[1px] backdrop-blur-md drop-shadow-2xl">
      <span className="relative text-white/60 hover:text-white font-bold cursor-pointer w-[100px] h-full hover:scale-120 flex  justify-center items-center rounded-full duration-400 overflow-hidden group">
        Home
        <span className="absolute top-o right-0 h-full w-0 group-hover:w-full duration-300 bg-gradient-to-l from-stone-800/10 to-red-500/10 rounded-full " />
      </span>
      <span className="relative text-white/60 hover:text-white font-bold cursor-pointer w-[100px] h-full hover:scale-120 flex  justify-center items-center rounded-full duration-400 overflow-hidden group">
        Skills
        <span className="absolute top-o right-0 h-full w-0 group-hover:w-full duration-300 bg-gradient-to-l from-stone-800/10 to-red-500/10 rounded-full " />
      </span>
      <span className="relative text-white/80 hover:text-white font-bold cursor-pointer w-[100px] h-full hover:scale-120 flex  justify-center items-center rounded-full duration-400 overflow-hidden group">
        About
        <span className="absolute top-o right-0 h-full w-0 group-hover:w-full duration-300 bg-gradient-to-l from-stone-800/10 to-red-500/10 rounded-full " />
      </span>
      <span className="relative text-white/60 hover:text-white font-bold cursor-pointer w-[100px] h-full hover:scale-120 flex  justify-center items-center rounded-full duration-400 overflow-hidden group">
        Contact
        <span className="absolute top-o right-0 h-full w-0 group-hover:w-full duration-300 bg-gradient-to-l from-stone-800/10 to-red-500/10 rounded-full " />
      </span>
    </div>
  );
};

export default Navbar;
