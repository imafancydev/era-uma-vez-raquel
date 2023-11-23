import Image from "next/image";

const MainSection = () => {
  return (
    <section id="#inicio" className="w-full">
      <div className="mt-20 mb-20 max-w-7xl w-full m-auto flex justify-center items-center relative">
        <Image
          width={800}
          height={400}
          className="floating"
          alt={"image"}
          src="/privacida.png"
        />
      </div>
    </section>
  );
};

export default MainSection;
