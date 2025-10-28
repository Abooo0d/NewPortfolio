import RollingGallery from "../Components/RollingGallery";
const Testimonials = () => {
  return (
    <div className="relative h-screen max-h-screen snap-start overflow-hidden flex justify-evenly lg:justify-center items-center flex-col lg:pt-16 pt-4">
      <div className="text-white w-[80%] text-center h-[200px]">
        <h1 className="text-[30px] text-stone-200 flex flex-col w-full mb-2 ">
          What People Say <span className="red">About Me</span>
        </h1>
        <p className="text-stone-400 lg:text-[20px] lg:w-[80%] w-full mx-auto">
          The best measure of my work is the experience it creates for others.
          Here you’ll find words from people I’ve collaborated with teammates,
          mentors, and clients who share their perspectives on my approach,
          dedication, and the results we achieved together.
        </p>
      </div>
      <RollingGallery autoplay={true} pauseOnHover={false} />
    </div>
  );
};

export default Testimonials;
