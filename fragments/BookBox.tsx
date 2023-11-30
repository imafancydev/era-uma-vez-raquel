"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const BookBox = ({ num }: any) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <motion.div
        className="box shadow-2xl shadow-blue-500/20 p-5 rounded-3xl cursor-pointer"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h1 className="bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 bg-clip-text text-transparent text-4xl font-bold">
          Cruz de Cristo
        </h1>
        <p className="text-[#37383f] text-xl">
          O teólogo John Stott apresenta em ''A cruz de Cristo'' respostas a
          questões inquietantes ao analisar: A cruz como o próprio Senhor Jesus
          a entendia, à luz dos Evangelhos; A profundidade da expressão "Cristo
          em nosso lugar"; O feito realizado pela cruz; O que significa viver
          submetido à cruz de Cristo.
        </p>
      </motion.div>
    </>
  );
};

export default BookBox;
