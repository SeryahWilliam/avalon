"use client";
import { useParams } from "next/navigation";
import React from "react";

function UseerProfile() {
  const { userId } = useParams();
  return <div>UseerProfile</div>;
}

export default UseerProfile;
