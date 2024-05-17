"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "flowbite-react";

function CategoryCard({ img, title, display }) {
  return (
    <Link key={title} href={`/categories/${title.toLowerCase()}`}>
      <Card
        className="max-w-sm w-[14rem] m-4 h-82 hover:shadow-lg"
        imgAlt={display}
        imgSrc={img}
      >
        <h5 className="text-lg text-center font-semibold tracking-tight text-gray-900 dark:text-white">
          {display}
        </h5>
      </Card>
    </Link>
  );
}

export default CategoryCard;
