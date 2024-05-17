import React from "react";
import { Spinner } from "flowbite-react";

function Loader() {
  return (
    <Spinner
      color="warning"
      className="w-full h-40"
      aria-label="Loading spinner"
    />
  );
}

export default Loader;
