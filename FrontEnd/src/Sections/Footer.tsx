import { motion } from "motion/react";
import TextInput from "../Components/Shared/TextInput";
import PrimaryButton from "../Components/Shared/PrimaryButton";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { useState } from "react";
const Footer = () => {
  const [showEmail, setShowEmail] = useState<boolean>(true);
  const [showPhone, setShowPhone] = useState<boolean>(true);
  const copyEmail = () => {
    navigator.clipboard
      .writeText("abdsadalden2001@gmail.com")
      .then(() => {
        setShowEmail(false);
        setTimeout(() => {
          setShowEmail(true);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  const copyPhone = () => {
    navigator.clipboard
      .writeText("+963951745564")
      .then(() => {
        setShowPhone(false);
        setTimeout(() => {
          setShowPhone(true);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <section className="bg-black min-h-screen w-screen snap-start flex flex-col md:flex-row gap-4 min-[1100px]:gap-0 justify-between items-center lg:px-[100px] px-4 py-8 lg:py-0 relative">
      <div className="absolute w-full bottom-[0px] hidden min-[1100px]:block left-[0%] h-[80px] bg-gradient-to-t from-transparent bg-stone-900 border-t-[2px] border-t-solid border-t-stone-700/50" />
      <img
        src="./../../Assets/FooterImage.png"
        className="absolute bottom-[0px] right-[50%] invisible min-[1100px]:visible translate-x-[50%] h-[700px] object-contain z-10"
      />
      <div className="min-[1100px]:min-w-[35%] flex-1 min-[1100px]:flex-0 max-[1100px]:h-[70%] rounded-[20px] p-[1px] z-0 relative bg-stone-600 min-[1100px]:bg-gradient-to-br from-stone-500 via-stone-800 to-bg-black">
        <div className="absolute w-[calc(100%-2px)] h-[calc(100%-2px)] top-[1px] bg-black left-[1px] rounded-[20px] z-0" />
        <div className="py-4 px-8 flex flex-col flex-1 bg-gradient-to-br from-stone-800 via-stone-900/50 to-bg-black rounded-[20px] w-full min-h-full z-[10] relative">
          <h1 className="text-stone-300 flex flex-col text-center w-full text-[20px]">
            <span>
              Take a Coffee <span className="red">&</span>
            </span>
            Chat With Me
          </h1>
          <motion.div className="flex flex-col gap-0 justify-center items-start w-full ">
            <h1 className="red text-[26px] cursor-default">Email</h1>
            <TextInput />
          </motion.div>
          <motion.div className="flex flex-col gap-0 justify-center items-start w-full ">
            <h1 className="red text-[26px]  cursor-default">Message</h1>
            <TextInput textarea={true} />
          </motion.div>
          <motion.div className="w-fit mx-auto mt-4">
            <PrimaryButton text="Send" />
          </motion.div>
        </div>
      </div>
      <div className="min-[1100px]:min-w-[35%] flex-1 min-[1100px]:flex-0 max-[1100px]:h-[70%] rounded-[20px] p-[1px] z-0 relative bg-stone-600 min-[1100px]:bg-gradient-to-bl from-stone-500 via-stone-800 to-bg-black">
        <div className="absolute w-[calc(100%-2px)] h-[calc(100%-2px)] top-[1px] bg-black left-[1px] rounded-[20px] z-0" />
        <div className="py-4 px-8 flex flex-col flex-1 justify-center items-center gap-4 bg-gradient-to-bl from-stone-800 via-stone-900/50 to-bg-black rounded-[20px] w-full h-full z-[10] relative">
          <h1 className="text-stone-300 flex text-center w-full justify-center items-center text-[20px] gap-1">
            <span className="red">OR </span> Text Me Here
          </h1>
          <div className="w-full flex flex-col justify-center items-center gap-4 text-stone-400">
            <h1
              className="w-full h-[50px] flex justify-center cursor-pointer relative items-center bg-gradient-to-r from-stone-700/50 to-stone-900 border-[1px] border-solid border-stone-600/50 px-4 py-2 rounded-[10px]"
              onClick={() => {
                copyEmail();
              }}
            >
              <span
                className={`flex justify-center items-center absolute w-full h-full duration-200 ${
                  showEmail ? "opacity-100" : "opacity-0"
                }`}
              >
                abdsadalden2001
                <span className="red">@</span>gmail.com
              </span>
              <span
                className={` ${
                  !showEmail ? "opacity-100" : " opacity-0"
                } flex justify-center items-center absolute w-full h-full duration-200`}
              >
                Email Copied!
              </span>
            </h1>
            <h1
              className="w-full h-[50px] flex justify-center relative cursor-pointer items-center bg-gradient-to-r from-stone-700/50 to-stone-900 border-[1px] border-solid border-stone-600/50 px-4 py-2 rounded-[10px]"
              onClick={() => {
                copyPhone();
              }}
            >
              <span
                className={`flex justify-center items-center absolute w-full h-full duration-200
                 ${showPhone ? "opacity-100" : "opacity-0"}`}
              >
                <span className={`red mr-2`}>+963</span>
                951-745-564
              </span>
              <span
                className={` ${
                  !showPhone ? "opacity-100" : " opacity-0"
                } flex justify-center items-center absolute w-full h-full duration-200`}
              >
                Phone Copied!
              </span>
            </h1>
          </div>
          <div className="w-[80%] h-[1px] bg-stone-700/50 mx-auto" />
          <h1 className="text-stone-300 flex text-center w-full justify-center items-center text-[20px] gap-1">
            <span className="red">And </span>Visit Me Here
          </h1>
          <div className="flex justify-center items-center flex-wrap gap-4 h-fit">
            <div className="flex justify-center items-center gap-4">
              <div className="w-[70px] h-[70px] rounded-full p-2 flex justify-center items-center bg-stone-900 border-[1px] hover:bg-[#1877f2] border-solid border-transparent cursor-pointer hover:border-[#1877f2] duration-200 hover:shadow-[0px_0px_20px_5px_#1877f288] group">
                <FaFacebook className="text-[50px] p-0 m-0 text-stone-300 group-hover:text-white" />
              </div>
              <div className="w-[70px] h-[70px] rounded-full p-2 flex justify-center items-center bg-stone-900 hover:bg-gradient-to-br to-[#833ab4] to-100% from-[#e1306c] border-[1px] border-solid border-transparent cursor-pointer hover:border-[#e1306c] duration-200 hover:shadow-[0px_0px_20px_5px_#e1306c88] group">
                <FaInstagram className="text-[50px] p-0 m-0 text-stone-300 group-hover:text-white" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="w-[70px] h-[70px] rounded-full p-4 flex justify-center items-center bg-stone-900 hover:bg-black border-[1px] border-solid border-transparent cursor-pointer hover:border-black duration-200 hover:shadow-[0px_0px_20px_5px_#d6d3d188]">
                <BsTwitterX className="text-[50px] p-0 m-0 text-stone-300 group-hover:text-white" />
              </div>
              <div className="w-[70px] h-[70px] rounded-full p-2 flex justify-center items-center bg-stone-900  border-[1px] hover:bg-[#0a66c2] border-solid border-transparent cursor-pointer hover:border-[#0a66c2] duration-200 hover:shadow-[0px_0px_20px_5px_#0a66c288] group">
                <CiLinkedin className="text-[50px] p-0 m-0 text-stone-300 group-hover:text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[20px] hidden min-[1100px]:block right-[50%] translate-x-[50%] w-[500px] h-[150px] bg-black z-1 blur-[30px]" />
    </section>
  );
};

export default Footer;
