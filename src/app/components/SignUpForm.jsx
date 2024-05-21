import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Label, TextInput } from "flowbite-react";
import { signIn } from "next-auth/react";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      username,
      isSignUp: true,
    });

    if (result.error) {
      setError(result.error);
    } else {
      router.push("/auth/signin");
    }
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="flex justify-center mb-4">
        <img src="/images/logo.png" alt="Logo" className="h-16" />
      </div>
      <h1 className="text-2xl font-semibold mb-6 text-center text-blue-800">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="username"
              value="Username"
              className="text-blue-800"
            />
          </div>
          <TextInput
            id="username"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" className="text-blue-800" />
          </div>
          <TextInput
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Password"
              className="text-blue-800"
            />
          </div>
          <TextInput
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="confirmPassword"
              value="Confirm Password"
              className="text-blue-800"
            />
          </div>
          <TextInput
            id="confirmPassword"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <Button
          type="submit"
          className="mt-4 bg-blue-800 hover:bg-blue-900 text-white"
        >
          Sign Up
        </Button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/auth/signin" className="text-blue-800 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
