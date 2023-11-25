"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import BooksSections from "@/components/BooksSections";
import MainSection from "@/components/MainSection";
import FloatingButton from "@/fragments/FloatingButton";
import AboutMe from "@/components/AboutMe";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <FloatingButton />
      <MainSection />
      <BooksSections />
      <AboutMe />
    </main>
  );
};

export default Home;
