"use client";
import React, { useState } from "react";
import { TextInput, Button } from "flowbite-react";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "../redux/actions/searchThunks";

function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query) {
      dispatch(fetchSearchResults(query));
      router.push(`/search?search=${query}`);
    }
  };

  return (
    <div className="max-w-md flex items-center">
      <TextInput
        id="searchbar"
        type="text"
        placeholder="Search..."
        className="w-[40vw]"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={handleSearch} className="ml-2">
        <BsSearch />
      </Button>
    </div>
  );
}

export default Search;
