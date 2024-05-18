"use client";
import React, { useEffect, useRef } from "react";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";
import Loader from "../components/Loader";
import ProtectedRoute from "../components/ProtectedRoute";

function Page() {
  const { products, currentPage, totalPages, changePage } = useProducts();
  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [products]);

  return (
    <ProtectedRoute>
      <div className="flex flex-col m-8" ref={topRef}>
        <div className="flex flex-row w-full justify-between my-4">
          <Filters />
          <Sort />
        </div>
        <div className="flex flex-wrap justify-center w-full">
          {products.length === 0 ? (
            <Loader />
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} product_data={product} />
            ))
          )}
        </div>
        <div className="flex justify-center my-4">
          <button
            disabled={currentPage === 1}
            onClick={() => changePage(currentPage - 1)}
            className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2">
            {currentPage} / {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => changePage(currentPage + 1)}
            className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default Page;
