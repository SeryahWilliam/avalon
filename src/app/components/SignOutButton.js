import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "flowbite-react";

function SignOutButton() {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
}

export default SignOutButton;
