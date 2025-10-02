import PrimaryButton from "../Components/Shared/PrimaryButton";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import SecondaryButton from "../Components/Shared/SecondaryButton";
import DarkVeil from "../Components/DarkVeil";
import BlurText from "../Components/Shared/BlureText";
import AnimatedContent from "../Components/AnimatedContent";
import FadeContent from "../Components/FadeContent";
const LandingPage = () => {
  return (
    <div className="relative min-h-screen max-h-screen w-screen max-w-screen bg-black flex justify-end items-end group h-screen overflow-y-hidden snap-y snap-mandatory snap-start">
      <div className="w-full min-h-screen absolute z-0 top-0 left-0">
        <div className="absolute w-full h-full z-0">
          <DarkVeil speed={1} hueShift={240} />
          <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
        </div>
      </div>
      <div className="absolute top-0 left-[200px] flex flex-col justify-center min-h-screen max-w-[800px] gap-12 z-10 mt-8">
        <h1 className="landing-h1 text-stone-200 text-[120px] leading-[100px] cursor-default">
          <BlurText
            text="Your Vision"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-[120px] mb-8"
          />
          <BlurText
            text="My Mission"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-[120px] mb-8 ml-10"
          />
        </h1>
        <div className="flex flex-col gap-8 pl-10 w-full">
          <FadeContent
            blur={true}
            duration={1000}
            delay={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <p className="text-stone-400 text-lg max-w-[700px] cursor-default">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              quibusdam eveniet quidem nobis nemo sapiente. Voluptates, quas. Id
              asperiores facere tempore eius iusto ducimus! Quos dignissimos in
              aperiam ipsa veniam.
            </p>
          </FadeContent>
        </div>
        <div className="w-full flex justify-start items-center gap-4 z-10">
          <AnimatedContent
            distance={50}
            direction="horizontal"
            reverse={true}
            duration={1.2}
            ease="out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            delay={2}
          >
            <PrimaryButton text="Explore My Portfolio" classes="gap-2">
              <FaArrowDown />
            </PrimaryButton>
          </AnimatedContent>
          <AnimatedContent
            direction="horizontal"
            reverse={true}
            duration={1.2}
            ease="out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            delay={2.5}
          >
            <SecondaryButton text="Hire Me" classes="gap-2">
              <FaArrowRight />
            </SecondaryButton>
          </AnimatedContent>
        </div>
      </div>
      <div className="relative min-h-screen min-w-[50%] z-0">
        <img
          src="./../Assets/LandingPageImage.png"
          alt="LandingPageImage"
          className="relative object-cover flex-1 max-h-screen min-h-screen min-w-full z-10 "
        />
        <div className="absolute bottom-0 left-0 w-full z-10 h-[200px] bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
    </div>
  );
};

export default LandingPage;
