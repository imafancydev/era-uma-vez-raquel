"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
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
        <h1 className="bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 bg-clip-text text-transparent text-4xl">
          Nome do Livro da Raquel
        </h1>
        <p className="text-[#37383f] text-xl">
          Lore do Livro Lore do Livro Lore do Livro Lore do Livro Lore do Livro
          Lore do Livro Lore do Livro Lore do Livro Lore do Livro Lore do Livro{" "}
          Lore do Livro Lore do Livro Lore do Livro Lore do Livro Lore do Livro
          Lore do Livro{" "}
        </p>
      </motion.div>
      <motion.div
        className="box shadow-2xl shadow-blue-500/20 p-5 rounded-3xl cursor-pointer"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h1 className="bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 bg-clip-text text-transparent text-4xl">
          Nome do Livro da Raquel
        </h1>
        <p className="text-[#37383f] text-xl">
          Lore do Livro Lore do Livro Lore do Livro Lore do Livro Lore do Livro
          Lore do Livro Lore do Livro Lore do Livro Lore do Livro Lore do Livro{" "}
          Lore do Livro Lore do Livro Lore do Livro Lore do Livro Lore do Livro
          Lore do Livro{" "}
        </p>
      </motion.div>
    </>
  );
};

export default BookBox;
