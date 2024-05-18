import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";

function ShoppingCart() {
  return (
    <ProtectedRoute>
      <div>ShoppingCart</div>;
    </ProtectedRoute>
  );
}

export default ShoppingCart;
