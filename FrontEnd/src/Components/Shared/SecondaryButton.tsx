type SecondaryButtonProps = {
  text: string;
  children?: React.ReactNode;
  classes?: string;
};
const SecondaryButton = ({ text, children, classes }: SecondaryButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center text-[18px] rounded-md bg-white/10 backdrop-blur-md text-stone-200 px-6 py-3 font-semibold hover:scale-105 transition-transform duration-200 border-[1px] border-solid border-white/50 cursor-pointer ${classes}`}
    >
      {text}
      {children}
    </button>
  );
};

export default SecondaryButton;
