"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import { categories } from "../categoryList";

function CategoryDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button onClick={handleClick}>
        <FontAwesomeIcon size="xl" icon={faBars} className="text-white" />
      </button>
      {isOpen && (
        <ul className="absolute p-4 w-60 z-10 top-full left-0 bg-white border border-gray-300 rounded-lg shadow-lg text-black">
          {categories.map((category, idx) => (
            <Link key={idx} href={`/${category.title.toLowerCase()}`}>
              <li
                key={idx}
                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
              >
                {category.title}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryDropDown;
