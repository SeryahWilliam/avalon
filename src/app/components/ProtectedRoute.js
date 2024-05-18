"use client";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "./Loader";

const ProtectedRoute = ({ children }) => {
  const { data: session, status } = useSession();
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if (!session && status !== "loading" && !user) {
      router.push("/auth/signin");
    }
  }, [session, status, user, router]);

  if (status === "loading" || !user) {
    return <Loader />;
  }

  return children;
};

export default ProtectedRoute;
