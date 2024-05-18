"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser, setLoading, setError } from "@/app/redux/slices/authSlice";
import SigninForm from "@/app/components/SigninForm";

export default function SignIn() {
  return (
    <div className="flex w-full h-[60vh] justify-center">
      <h1>Sign In</h1>
      <SigninForm />
    </div>
  );
}
