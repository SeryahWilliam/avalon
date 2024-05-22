"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/actions/categoriesThunk";

function useCategories() {
  const dispatch = useDispatch();
  const { categories, status, error } = useSelector((state) => state.category);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, status]);

  return { categories, status, error };
}

export default useCategories;
