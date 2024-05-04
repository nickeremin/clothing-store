import { motion, type Variants, MotionConfig } from "framer-motion";

import imgUrl from "../../../public/images/image-1.jpg";

const variants: Variants = {
  initial: {
    width: "75%",
  },
  animate: {
    width: "0",
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.4, 0, 0.6, 1],
    },
  },
};

function HomeBackground() {
  return (
    <MotionConfig>
      <div className="absolute top-0 left-0 h-screen w-screen">
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          className="absolute bg-white z-10 h-screen top-0 right-1/4 "
        />
        <img
          src={imgUrl}
          className="absolute left-0 top-0 w-[75vw] h-screen object-cover object-center"
        />
        <div className="absolute left-0 top-0 w-[75vw] h-screen bg-gradient-to-b from-black/50 to to-transparent" />
      </div>
    </MotionConfig>
  );
}

export default HomeBackground;
