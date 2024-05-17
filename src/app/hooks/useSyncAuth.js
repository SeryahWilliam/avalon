"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlice";

const useSyncAuth = () => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "authenticated" && session) {
      dispatch(setUser(session.user));
    } else if (status === "unauthenticated") {
      dispatch(setUser(null));
    }
  }, [session, status, dispatch]);
};

export default useSyncAuth;
