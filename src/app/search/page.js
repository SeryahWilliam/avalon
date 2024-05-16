"use client";
import React from "react";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import ProductCard from "../components/ProductCard";
import products from "../productList";

function page() {
  return (
    <div className="flex flex-col m-8">
      <div className="flex flex-row w-full justify-between my-4">
        <Filters />
        <Sort />
      </div>
      <div className="flex flex-wrap justify-center w-full">
        {products.map((product) => (
          <ProductCard key={product.id} product_data={product} />
        ))}
      </div>
    </div>
  );
}

export default page;
