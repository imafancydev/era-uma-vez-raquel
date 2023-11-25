import React from "react";

import BookBox from "@/fragments/BookBox";
const BooksSections = () => {
  return (
    <section id="BookSection" className="w-full">
      <div className="max-w-6xl w-full m-auto px-4 py-16 flex gap-16 flex-col justify-center items-center md:mt-96 sm:mt">
        <BookBox />
      </div>
    </section>
  );
};

export default BooksSections;
