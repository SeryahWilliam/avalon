"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, updateUser } from "@/app/redux/actions/userThunk";
import { useSession } from "next-auth/react";
import { TextInput, Button } from "flowbite-react";
import Loader from "@/app/components/Loader";
import ProtectedRoute from "@/app/components/ProtectedRoute";

function UserProfile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const { data: session, status } = useSession();
  const user = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (session) {
      dispatch(fetchUser(session.user.id));
    }
  }, [session, dispatch]);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  const handleUpdate = () => {
    dispatch(
      updateUser({ userId: session.user.id, userData: { username, email } })
    );
  };

  if (status === "loading") {
    return <Loader />;
  }

  if (!session) {
    return null;
  }

  return (
    <ProtectedRoute>
      <div className="container mx-auto p-6 min-h-[66vh]">
        <h1 className="text-3xl font-semibold mb-6 text-center text-custom-orange">
          {session.user.name}
        </h1>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
          <div className="mb-4">
            <TextInput
              id="username"
              placeholder="Update username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <TextInput
              id="email"
              placeholder="Update email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button
            onClick={handleUpdate}
            className="w-full bg-blue-800 hover:bg-blue-900 text-white"
          >
            Update Profile
          </Button>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default UserProfile;
