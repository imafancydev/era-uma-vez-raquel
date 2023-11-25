import Link from "next/link";
import React from "react";

const AboutMe = () => {
  return (
    <section className="w-full">
      <div className="max-w-6xl w-full m-auto px-4 py-16 flex gap-16 flex-col justify-center items-center">
        <h1 className="max-w-2xl bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold text-xl md:text-2xl">
          Quer falar comigo, ou me conhecer mais?
        </h1>
        <Link
          href={"./AboutMe/AboutMePage"}
          className="bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold px-5 text-5xl md:text-7xl cursor-pointer mb-10  hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] p-5 rounded-3xl transition duration-300 text-center"
        >
          minha biografia
        </Link>
      </div>
    </section>
  );
};

export default AboutMe;
