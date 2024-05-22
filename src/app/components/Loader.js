import React from "react";
import { Spinner } from "flowbite-react";

function Loader() {
  return (
    <div className="flex items-center justify-center h-[66vh]">
      <Spinner
        color="warning"
        className="w-full h-40"
        aria-label="Loading spinner"
      />
    </div>
  );
}

export default Loader;
