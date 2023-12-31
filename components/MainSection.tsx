import Image from "next/image";

const MainSection = () => {
  return (
    <section className="w-full">
      <div className="mt-20 mb-20 w-full m-auto flex justify-center items-center relative">
        <Image
          width={801}
          height={426}
          className="floating"
          alt={"image"}
          src="/privacidade2.png"
          priority
        />
      </div>
    </section>
  );
};

export default MainSection;
