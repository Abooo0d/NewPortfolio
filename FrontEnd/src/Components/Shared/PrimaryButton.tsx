type PrimaryButtonProps = {
  text: string;
  children?: React.ReactNode;
  classes?: string;
};
const PrimaryButton = ({ text, children, classes }: PrimaryButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center text-[18px] rounded-md bg-white text-stone-800 px-6 py-3 font-semibold hover:scale-105 transition-transform duration-200 cursor-pointer ${classes}`}
    >
      {text}
      {children}
    </button>
  );
};
export default PrimaryButton;
