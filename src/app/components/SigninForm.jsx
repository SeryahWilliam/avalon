import React from "react";
import { signIn } from "next-auth/react";
import { useState } from "react";
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
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap- w-[40vw]"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="demo@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Password" />
          </div>
          <TextInput
            id="password1"
            value={password}
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default SigninForm;
