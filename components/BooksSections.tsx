import React from "react";

import BookBox from "@/fragments/BookBox";
const BooksSections = () => {
  return (
    <section id="BookSection" className="w-full">
      <div className="max-w-6xl w-full m-auto mt-96 px-4 py-16 flex flex-col gap-16 justify-center items-center md:mt-60 md:grid md:grid-cols-2 md:place-items-center">
        <BookBox />
        <BookBox />
      </div>
    </section>
  );
};

export default BooksSections;
