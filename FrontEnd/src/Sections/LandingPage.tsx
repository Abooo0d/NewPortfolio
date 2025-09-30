import PrimaryButton from "../Components/Shared/PrimaryButton";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import SecondaryButton from "../Components/Shared/SecondaryButton";
const LandingPage = () => {
  return (
    <div className="relative min-h-screen max-h-screen bg-black flex justify-end items-start">
      <div className="absolute top-0 left-[200px] flex flex-col justify-center min-h-screen z-10 max-w-[800px] gap-16 z-10">
        <h1 className="landing-h1 text-stone-200 text-[120px] leading-[100px]">
          <span>Your Vision </span>
          <span className="pl-10"> My Mission</span>
        </h1>
        <div className="flex flex-col gap-8 pl-10 w-full">
          <p className="text-stone-400 text-lg max-w-[700px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            quibusdam eveniet quidem nobis nemo sapiente. Voluptates, quas. Id
            asperiores facere tempore eius iusto ducimus! Quos dignissimos in
            aperiam ipsa veniam.
          </p>
          <div className="w-full flex justify-start items-center gap-4">
            <PrimaryButton text="Explore My Portfolio" classes="gap-2">
              <FaArrowDown />
            </PrimaryButton>
            <SecondaryButton text="Hire Me" classes="gap-2">
              <FaArrowRight />
            </SecondaryButton>
          </div>
        </div>
      </div>
      <div className="relative min-h-screen min-w-[50%] z-0">
        <span className="absolute w-[150px] h-[200px] bg-stone-500/50 top-[200px] left-[300px] blur-[100px] z-0" />
        <span className="absolute w-[500px] h-[100px] bg-red-700/30 top-[400px] left-[400px] blur-[100px] z-0" />
        <img
          src="./../Assets/LandingPageImage.png"
          alt="LandingPageImage"
          className="relative object-cover flex-1 max-h-screen min-h-screen min-w-full z-10"
        />
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
    </div>
  );
};

export default LandingPage;
