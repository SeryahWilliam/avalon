"use client";
import React from "react";
import { TextInput } from "flowbite-react";
import { BsSearch } from "react-icons/bs";

function Search() {
  return (
    <div className="max-w-md">
      <div className="mb-2 block"></div>
      <TextInput
        id="searchbar"
        type="email"
        placeholder="Search..."
        className="w-[40vw]"
        icon={BsSearch}
      />
    </div>
  );
}

export default Search;
