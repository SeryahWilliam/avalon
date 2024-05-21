import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser, setLoading, setError } from "@/app/redux/slices/authSlice";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrorState] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      dispatch(setError(result.error));
      setErrorState(result.error);
    } else {
      dispatch(setUser(result.user));
      router.push("/");
    }

    dispatch(setLoading(false));
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="flex justify-center mb-4">
        <img src="/images/logo.png" alt="Logo" className="h-16" />
      </div>
      <h1 className="text-2xl font-semibold mb-6 text-center text-blue-800">
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email" className="text-blue-800" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="demo@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Password"
              className="text-blue-800"
            />
          </div>
          <TextInput
            id="password1"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-blue-800">
            Remember me
          </Label>
        </div>
        <Button
          type="submit"
          className="mt-4 bg-blue-800 hover:bg-blue-900 text-white"
        >
          Submit
        </Button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/auth/signup" className="text-blue-800 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default SigninForm;
