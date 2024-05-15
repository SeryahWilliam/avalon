import React from "react";

function Footer() {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-blue-800 text-white p-4">
      <div className="flex justify-evenly">
        <div>
          <a href="/shop" className="block hover:text-gray-300">
            Shop
          </a>
        </div>
        <div>
          <a href="/sell" className="block hover:text-gray-300">
            Sell
          </a>
        </div>
        <div className="relative group">
          <span className="cursor-pointer">About</span>
          <div className="absolute hidden group-hover:block bg-gray-700 mt-1">
            <a
              href="/about/policies"
              className="block px-4 py-2 hover:text-gray-300"
            >
              Policies
            </a>
            <a
              href="/about/careers"
              className="block px-4 py-2 hover:text-gray-300"
            >
              Careers
            </a>
            <a
              href="/about/investors"
              className="block px-4 py-2 hover:text-gray-300"
            >
              Investors
            </a>
          </div>
        </div>
        <div className="relative group">
          <span className="cursor-pointer">Help</span>
          <div className="absolute hidden group-hover:block bg-gray-700 mt-1">
            <a
              href="/help/help-center"
              className="block px-4 py-2 hover:text-gray-300"
            >
              Help Center
            </a>
            <a
              href="/help/privacy-settings"
              className="block px-4 py-2 hover:text-gray-300"
            >
              Privacy Settings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
