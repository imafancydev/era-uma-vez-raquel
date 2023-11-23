"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

const NextboxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
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
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h1 className="text-gray-600 text-4xl">Olá raquel</h1>
        <p className="text-gray-600 text-xl">
          Gosto de fazer ótimas paginas como essa que você está vendo, aprender
          programação e programar são coisas prazerosas para mim, TypeScript,
          React, Tailwind e para mim as tecnologias mais divertidas hoje no
          mundo tech, espero que nós se divirta junto!
        </p>
      </motion.div>
      <motion.div
        className="box"
        ref={ref}
        variants={NextboxVariant}
        initial="hidden"
        animate={control}
      >
        <h1 className="text-gray-600 text-4xl">Olá raquel</h1>
        <p className="text-gray-600 text-xl">
          Gosto de fazer ótimas paginas como essa que você está vendo, aprender
          programação e programar são coisas prazerosas para mim, TypeScript,
          React, Tailwind e para mim as tecnologias mais divertidas hoje no
          mundo tech, espero que nós se divirta junto!
        </p>
      </motion.div>
    </>
  );
};

export default BookBox;
