import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";

function page() {
  return (
    <ProtectedRoute>
      <div>About</div>;
    </ProtectedRoute>
  );
}

export default page;
