const TextInput = ({ textarea }: { textarea?: boolean }) => {
  return (
    <div
      className={`p-[1px] rounded-[10px] overflow-hidden bg-stone-600 relative group duration-500 hover:shadow-[0px_0px_15px_5px_#ff000088] w-full ${
        !!textarea && "h-[150px]"
      }`}
    >
      <div className="p-[1px] bg-[#ff0000] absolute top-[0px] left-[0px] w-[50%] h-full z-0 group-hover:w-[150%] duration-500">
        <div className="bg-gradient-to-l from-stone-600 to-[#ff0000] w-[40%] h-full top-0 right-0 absolute group-hover:opacity-0 duration-500" />
      </div>
      <div className=" bg-black group-hover:bg-black/80 rounded-[10px] relative duration-500 flex flex-col justify-start items-center">
        {!!textarea ? (
          <textarea className="px-4 py-2 bg-black outline-none w-full rounded-[10px] text-[20px] text-stone-500 h-[148px] resize-none"></textarea>
        ) : (
          <input
            type="text"
            className="px-4 py-2 bg-black outline-none w-full rounded-[10px] text-[20px] text-stone-500"
          />
        )}
      </div>
    </div>
  );
};

export default TextInput;
