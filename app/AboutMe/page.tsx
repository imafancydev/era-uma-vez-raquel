import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutMePage = () => {
  return (
    <div
      id="about"
      className="relative bg-[hsl(231,33%,83%)] overflow-hidden mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-[hsl(231,33%,83%)] sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 bg-clip-text text-transparent text-4xl font-bold sm:text-3xl md:text-4xl">
                About me
              </h2>

              <p className="text-[#37383f]">
                Donec porttitor, enim ut dapibus lobortis, lectus sem tincidunt
                dui, eget ornare lectus ex non libero. Nam rhoncus diam ultrices
                porttitor laoreet. Ut mollis fermentum ex, vel viverra lorem
                volutpat sodales. In ornare porttitor odio sit amet laoreet. Sed
                laoreet, nulla a posuere ultrices, purus nulla tristique turpis,
                hendrerit rutrum augue quam ut est. Fusce malesuada posuere
                libero, vitae dapibus eros facilisis euismod. Sed sed lobortis
                justo, ut tincidunt velit. Mauris in maximus eros.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="flex items-center justify-center lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          width={400}
          height={900}
          alt={"image"}
          src={require("@/public/raquelImg.jpeg")}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <Link
          href="./"
          className="my-6 bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 bg-clip-text text-transparent text-4xl font-bold sm:text-3xl md:text-4xl hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-3xl transition duration-300 text-center"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default AboutMePage;
