import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaLaravel,
} from "react-icons/fa6";
import { FaGitSquare, FaGithub } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiAdobephotoshop,
} from "react-icons/si";
import LogoLoop from "./../Components/LogoLoop";
import type { ReactElement } from "react";
type Tech = {
  node: ReactElement;
  title: string;
  href: string;
};
const TechsData: Tech[] = [
  {
    node: <FaHtml5 className="hover:text-[#e34f26]" />,
    title: "React JS",
    href: "/",
  },
  {
    node: <FaCss3Alt className="hover:text-[#0000ff]" />,
    title: "React JS",
    href: "/",
  },
  {
    node: <FaJsSquare className="hover:text-[#f7df1e]" />,
    title: "React JS",
    href: "/",
  },
  {
    node: <BiLogoTypescript className="hover:text-[#3178c6]" />,
    title: "React JS",
    href: "/",
  },
  {
    node: <FaReact className="hover:text-[#00d8ff]" />,
    title: "React JS",
    href: "/",
  },
  {
    node: <RiNextjsFill className="hover:text-[#ffffff]" />,
    title: "React JS",
    href: "/",
  },
  {
    node: <SiTailwindcss className="hover:text-[#00bcff]" />,
    title: "React JS",
    href: "/",
  },
  {
    node: <FaBootstrap className="hover:text-[#7008e7]" />,
    title: "React JS",
    href: "/",
  },
  {
    node: <SiPhp className="hover:text-[#8892be]" />,
    title: "React JS",
    href: "/",
  },
  {
    node: <FaLaravel className="hover:text-[#ff0000]" />,
    title: "React JS",
    href: "/",
  },
  {
    node: <SiMysql className="hover:text-[#85ccde]" />,
    title: "React JS",
    href: "/",
  },
  {
    node: <FaGitSquare className="hover:text-[#c9510c]" />,
    title: "React JS",
    href: "/",
  },
  {
    node: <FaGithub className="hover:text-[#ffffff]" />,
    title: "React JS",
    href: "/",
  },
  {
    node: <SiAdobephotoshop className="hover:text-[#00a4e4]" />,
    title: "React JS",
    href: "/",
  },
];
const Techs = () => {
  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
      className="snap-end mb-[50px] py-[50px]"
    >
      <LogoLoop
        logos={TechsData}
        speed={100}
        direction="left"
        logoHeight={80}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Technology partners"
      />
    </div>
  );
};

export default Techs;
