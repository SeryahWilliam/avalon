import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { clearUser } from "../redux/slices/authSlice";

function SignOutButton() {
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    await signOut();
    dispatch(clearUser());
  };
  return <Button onClick={handleSignOut}>Sign Out</Button>;
}

export default SignOutButton;
