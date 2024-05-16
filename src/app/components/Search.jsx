"use client";
import React from "react";
import { TextInput } from "flowbite-react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div className="max-w-md">
      <div className="mb-2 block"></div>
      <TextInput
        id="searchbar"
        type="email"
        placeholder="Search..."
        className="w-[40vw]"
      />
    </div>
  );
}

export default Search;
