"use client";
import React from "react";
import { useParams } from "next/navigation";
import SubcategoryCard from "@/app/components/SubcategoryCard";
import ProtectedRoute from "@/app/components/ProtectedRoute";

function CategoryPage() {
  const { categoryId } = useParams();
  return (
    <ProtectedRoute>
      <div>{categoryId}</div>;
    </ProtectedRoute>
  );
}

export default CategoryPage;
