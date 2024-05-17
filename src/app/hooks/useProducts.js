"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productsThunks";
import { setCurrentPage } from "../redux/slices/productSlice";

function useProducts() {
  const dispatch = useDispatch();
  const { products, currentPage, totalPages } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(fetchProducts(currentPage));
  }, [dispatch, currentPage]);

  const changePage = (page) => {
    dispatch(setCurrentPage(page));
  };

  return { products, currentPage, totalPages, changePage };
}

export default useProducts;
