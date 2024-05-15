import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Search from "./Search";
import CategoryDropDown from "./CategoryDropDown";

function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">
          <Link className="text-orange-500 hover:text-orange-300" href="/">
            Avalon
          </Link>
        </h1>
        <CategoryDropDown/>
        <Search />
        <div className="flex ">
          <Link className="mx-4 hover:text-orange-500" href="/login">
            Sign In
          </Link>
          {/* <FontAwesomeIcon icon={faHeart} size="md" /> */}
          <Link className="mx-4 hover:text-orange-500" href="/about">
            About
          </Link>
          <Link className="mx-4 hover:text-orange-500" href="/cart">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
