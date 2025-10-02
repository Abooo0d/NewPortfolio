import { useRef } from "react";
import ProjectCard from "../Components/Cards/ProjectCard";
import { motion } from "motion/react";
const Portfolio = () => {
  const projects = [
    {
      title: "Matthias Leidinger",
      description:
        "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      src: "rock.jpg",
      link: "https://picsum.photos/200/301",
      color: "#BBACAF",
    },
    {
      title: "Clément Chapillon",
      description:
        "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
      src: "tree.jpg",
      link: "https://picsum.photos/200/302",
      color: "#977F6D",
    },
    {
      title: "Zissou",
      description:
        "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
      src: "water.jpg",
      link: "https://picsum.photos/200/303",
      color: "#C2491D",
    },
  ];
  const container = useRef(null);
  return (
    <motion.section
      className="mt-[50vh] h-screen overflow-y-auto snap-start"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.4 }}
      ref={container}
    >
      {projects.map((project, index) => (
        <ProjectCard
          project={project}
          key={"p" + index}
          index={index}
          mainRef={container}
        />
      ))}
    </motion.section>
  );
};

export default Portfolio;
