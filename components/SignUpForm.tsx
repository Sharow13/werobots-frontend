"use client";
import { useFormState, useFormStatus } from "react-dom";

import { registerUser } from "@/utils/actions";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SignUpButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      disabled={pending}
    >
      {pending ? "Signing Up..." : "Sign Up"}
    </button>
  );
};

function SignUpForm() {
  const router = useRouter();
  const [message, formAction] = useFormState(registerUser, null);

  useEffect(() => {
    if (message === "User created successfully") {
      setTimeout(() => {
        router.push("/");
      }, 2000); // wait for half a second before redirecting
    }
  }, [message, router]);

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
          Sign Up
        </h1>
        <form className="mt-6" action={formAction}>
          {message && <p>{message}</p>}
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              name="email"
              required
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              required
              name="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password-again"
              className="block text-sm font-semibold text-gray-800"
            >
              Password again
            </label>
            <input
              required
              name="password-again"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <SignUpButton />
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
