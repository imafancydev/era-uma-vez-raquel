import BooksSections from "@/components/BooksSections";
import MainSection from "@/components/MainSection";
import FloatingButton from "@/fragments/FloatingButton";

const Home = () => {
  return (
    <main>
      <FloatingButton />
      <MainSection />
      <BooksSections />
    </main>
  );
};

export default Home;
