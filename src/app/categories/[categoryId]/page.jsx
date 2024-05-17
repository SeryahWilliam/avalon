"use client";
import React from "react";
import { useParams } from "next/navigation";
import SubcategoryCard from "@/app/components/SubcategoryCard";

function CategoryPage() {
  const { categoryId } = useParams();
  return <div>{categoryId}</div>;
}

export default CategoryPage;
