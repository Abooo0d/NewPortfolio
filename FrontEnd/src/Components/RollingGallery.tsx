import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "motion/react";
import type { PanInfo, ResolvedValues } from "motion/react";

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
  {
    name: "Michael Smith",
    role: "Software Engineer",
    company: "InnovateX",
    avatar: "https://i.pravatar.cc/150?img=45",
    quote:
      "I was impressed by your problem-solving approach and clean code structure. You consistently find elegant solutions to complex challenges, which makes working with you inspiring and highly productive.",
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

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({
  autoplay = false,
  pauseOnHover = false,
}) => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(
    window.innerWidth <= 640
  );
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth: number = isScreenSizeSm ? 2000 : 3000;
  const faceCount: number = testimonials.length;
  const radius: number = cylinderWidth / (2 * Math.PI);

  const dragFactor: number = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val: number) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 50,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest: ResolvedValues) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <div className="flex h-full items-center justify-center [perspective:2000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {testimonials.map((test, i) => (
            <div
              key={i}
              className="group flex flex-col justify-start items-start p-4 rounded-xl border-solid border-[2px] border-stone-900 hover:border-stone-400 backdrop-blur-2xl duration-400 hover:shadow-[0px_0px_36px_13px_#00000088] bg-gradient-to-bl from-stone-800/40 to-stone-900/40 absolute h-[250px] lg:w-[400px] w-[300px] overflow-hidden [backface-visibility:hidden]"
              style={{
                // width: `${faceWidth}px`,
                transform: `rotateY(${
                  (360 / faceCount) * i
                }deg) translateZ(${radius}px)`,
              }}
            >
              <div className="flex justify-start items-center gap-4">
                <img
                  src={test.avatar}
                  alt="avatar"
                  className="rounded-full w-[50px] h-[50px]"
                />
                <div className="flex flex-col">
                  <h1 className="text-[16px] text-stone-200">{test.name}</h1>
                  <h1 className="text-[16px] text-stone-400">{test.company}</h1>
                </div>
              </div>
              <h1 className="red mb-1">{test.role}</h1>
              <p className="text-stone-400 text-sm">{test.quote}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
