"use client";
import { useParams } from "next/navigation";
import React from "react";

function CategoryPage() {
  const { categoryId } = useParams();
  return <div>{categoryId}</div>;
}

export default CategoryPage;
