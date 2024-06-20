"use client";
import { useFormState, useFormStatus } from "react-dom";

import { loginUser } from "@/utils/actions";

const SignInButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="mt-6 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      disabled={pending}
    >
      {pending ? "Signing in..." : "Sign In"}
    </button>
  );
};

function SignInForm() {
  const [message, formAction] = useFormState(loginUser, null);

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        {message && message !== "Bad credentials" ? (
          <>
            <h1 className="text-3xl font-semibold text-center text-blue-700">
              Logged in as {message}
            </h1>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
              Sign In
            </h1>
            <p className="text-red-600">{message}</p>
            <form className="mt-6" action={formAction}>
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
              <p className="mt-8 text-xs font-light text-center text-gray-700">
                Not a member yet?
                <a
                  href="/register"
                  className="font-medium text-blue-700 hover:underline"
                >
                  Sign up
                </a>
              </p>
              <SignInButton />
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default SignInForm;
