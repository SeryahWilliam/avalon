import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-custom-orange">404</h1>
        <p className="mt-4 text-gray-700 text-xl">Page Not Found</p>
        <p className="mt-2 text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link href="/">
          <div className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
            Go back home
          </div>
        </Link>
      </div>
    </div>
  );
}
