"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { fetchSearchResults } from "../redux/actions/searchThunks";

function SearchResultsPage() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search");
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.search);

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchSearchResults(searchTerm));
    }
  }, [searchTerm, dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center text-custom-orange">
        Search Results
      </h1>
      <div className="flex flex-wrap justify-center">
        {items.length === 0 ? (
          <p>No items found.</p>
        ) : (
          items.map((item) => (
            <ProductCard key={item._id} product_data={item} />
          ))
        )}
      </div>
    </div>
  );
}

export default SearchResultsPage;
