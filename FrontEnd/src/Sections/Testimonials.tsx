import CardSwap, { Card } from "../Components/CardSwap";
const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Project Manager",
      company: "TechCorp",
      avatar: "https://i.pravatar.cc/150?img=12",
      quote:
        "Working with you was an absolute pleasure. Your ability to translate ideas into smooth, functional applications is impressive, and your attention to detail made the project shine. I’d gladly collaborate again.",
    },
    {
      name: "Sarah Johnson",
      role: "UX Designer",
      company: "Creative Studio",
      avatar: "https://i.pravatar.cc/150?img=32",
      quote:
        "Your collaborative spirit made the entire process seamless. You not only brought the technical expertise but also listened carefully, adapting the product to meet both design goals and user needs. The result exceeded expectations.",
    },
    {
      name: "Michael Smith",
      role: "Software Engineer",
      company: "InnovateX",
      avatar: "https://i.pravatar.cc/150?img=45",
      quote:
        "I was impressed by your problem-solving approach and clean code structure. You consistently find elegant solutions to complex challenges, which makes working with you inspiring and highly productive.",
    },
  ];
  return (
    <div className="relative h-screen max-h-screen snap-start overflow-hidden">
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={true}
      >
        {testimonials.map((test, index) => (
          <Card key={index}>
            <div className="flex justify-start items-center gap-8">
              <img
                src={test.avatar}
                alt="avatar"
                className="rounded-full w-[100px] h-[100px]"
              />
              <div className="flex flex-col">
                <h1 className="text-[24px] text-stone-200">{test.name}</h1>
                <h1 className="text-[20px] text-stone-400">{test.company}</h1>
              </div>
            </div>
            <h1 className="red text-[24px]">{test.role}</h1>
            <p className="text-stone-400">{test.quote}</p>
          </Card>
        ))}
      </CardSwap>
      <div className="text-white absolute lg:top-[30%] top-[15%] left-[10%] lg:w-[400px] w-[80%] lg:text-left text-center h-[300px]">
        <h1 className="text-[24px] text-stone-200 flex flex-col lg:w-[400px] w-full mb-2 ">
          What People Say <span className="red">About Me</span>
        </h1>
        <p className="text-stone-400 lg:text-[20px]">
          The best measure of my work is the experience it creates for others.
          Here you’ll find words from people I’ve collaborated with teammates,
          mentors, and clients who share their perspectives on my approach,
          dedication, and the results we achieved together.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
