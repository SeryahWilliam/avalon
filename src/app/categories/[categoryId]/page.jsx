"use client";
import React from "react";
import { useParams } from "next/navigation";
import ProtectedRoute from "@/app/components/ProtectedRoute";
import CarouselComponent from "@/app/components/Carousel";
import ProductCard from "@/app/components/ProductCard";
import sampleCategoryItems from "@/app/categorySampleItems";

function CategoryPage() {
  const { categoryId } = useParams();
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const capitalizedCategoryId = capitalizeFirstLetter(categoryId);

  const carouselImages = [
    "https://realale.co/wp-content/uploads/2019/06/Beats-by-dre-show-yor-colour-OOH-B.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/73fbe271026179.5bb6e7af358b6.jpg",
    "https://i.ytimg.com/vi/SWH0_AUwAfg/maxresdefault.jpg",
  ];
  const categoryItems = sampleCategoryItems;

  return (
    <ProtectedRoute>
      <div className="container mx-auto p-6 min-h-[66vh]">
        <h1 className="text-3xl font-semibold mb-6 text-center text-custom-orange">
          {capitalizedCategoryId}
        </h1>
        <CarouselComponent images={carouselImages} />
        <div className="flex flex-wrap justify-center">
          {categoryItems.length === 0 ? (
            <p>No items found.</p>
          ) : (
            categoryItems.map((item) => (
              <ProductCard key={item._id} product_data={item} />
            ))
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default CategoryPage;
