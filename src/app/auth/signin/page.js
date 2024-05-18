// "use client";
// import SigninForm from "@/app/components/SigninForm";

// export default function SignIn() {
//   return (
//     <div className="flex w-full h-[60vh] justify-center">
//       <h1>Sign In</h1>
//       <SigninForm />
//     </div>
//   );
// }

"use client";
import SigninForm from "@/app/components/SigninForm";

export default function SignIn() {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-gray-100">
      <SigninForm />
    </div>
  );
}
