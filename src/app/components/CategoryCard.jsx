import Image from "next/image";
import React from "react";

function CategoryCard({ img, title }) {
  return (
    <div className="flex flex-col items-center h-[20rem] w-[15rem] m-4 border-solid border-2 border-grey rounded-lg hover:shadow-lg">
      <div className="w-full h-3/4 mb-10">
        <Image
          src={img}
          width={800}
          height={600}
          objectFit="cover"
          alt=""
          className="rounded-lg"
        />
      </div>
      <div>{title}</div>
    </div>
  );
}

export default CategoryCard;
