"use client";
import React from "react";
import { Dropdown } from "flowbite-react";

function Sort() {
  const handleSort = () => {
    console.log("sorting");
  };
  return (
    <Dropdown pill color="light" label="Sort">
      <Dropdown.Item onClick={handleSort}>Price: low to high</Dropdown.Item>
      <Dropdown.Item onClick={handleSort}>Price: high to low</Dropdown.Item>
      <Dropdown.Item onClick={handleSort}>Top reviews</Dropdown.Item>
      <Dropdown.Item onClick={handleSort}>Newest</Dropdown.Item>
    </Dropdown>
  );
}

export default Sort;
