import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function CategoryDropDown() {
  return (
    <button>
      <FontAwesomeIcon size="xl" icon={faBars} className="text-white" />
    </button>
  );
}

export default CategoryDropDown;
