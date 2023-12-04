import React from "react";
import Image from "next/image";

const AboutMePage = () => {
  return (
    <div className="mx-auto flex flex-col max-w-5xl justify-between gap-10 overflow-hidden px-5 py-8 xl:px-0">
      <h1 className="flex bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold items-start text-4xl">
        Sobre mim
      </h1>
      <div className="flex flex-col md:flex-row align-center justify-between w-full gap-5">
        <Image
          width={400}
          height={900}
          alt={"image"}
          src={require("@/public/raquelImg.jpeg")}
        />
        <div className="flex flex-col gap-5 max-w-lg text-[#37383f] text-base leading-relaxed">
          <p>
            Meu nome é <i className="text-white">Raquel</i> e tenho{" "}
            <span className="text-white font-bold">19</span> anos.
          </p>
          <p>
            Sou um Lorem, ipsum dolor.{" "}
            <span className="italic font-bold">0</span> Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Maiores hic similique molestiae
            harum perspiciatis deserunt cupiditate ipsa alias enim? Nihil.:{" "}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              fuga.
            </span>
            .
          </p>
          <p>
            Ao longo da minha trajetória como Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Error laboriosam nisi tenetur
            blanditiis sit accusamus facilis eum ratione. Aut, magni.
          </p>
          <p>
            Além disso, gosto de Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, fuga.
            <i>
              <a
                className="underline text-white"
                href="https://birobirobiro.dev/mediakit"
                target="_blank"
              >
                {" "}
                redes sociais
              </a>
              .
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
