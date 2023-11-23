import React from "react";

import BookBox from "@/fragments/BookBox";
const BooksSections = () => {
  return (
    <section id="#BookSection" className="flex w-full">
      <div className="max-w-7xl w-full m-auto mt-80 flex justify-center items-center gap-5">
        <BookBox />
      </div>
    </section>
  );
};

export default BooksSections;
