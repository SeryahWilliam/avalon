import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">
          <Link className="text-orange-500 hover:text-orange-300" href="/">
            Avalon
          </Link>
        </h1>
        <div>
          <Link className="mx-4 hover:text-orange-500" href="/shop">
            Shop
          </Link>
          <Link className="mx-4 hover:text-orange-500" href="/about">
            About
          </Link>
          <Link className="mx-4 hover:text-orange-500" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
