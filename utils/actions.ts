"use server";
import axios from "axios";

export const registerUser = async (prevState: any, formData: FormData) => {
  "use server";

  await new Promise((resolve) => setTimeout(resolve, 2000));
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const passwordAgain = formData.get("password-again") as string;

  if (password !== passwordAgain) {
    return "Passwords do not match";
  }

  const message = await axios
    .post("http://localhost:3001/api/register", {
      email,
      password,
      passwordAgain,
    })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      return error.response.data;
    });

  return message;
};

export const loginUser = async (prevState: any, formData: FormData) => {
  "use server";

  await new Promise((resolve) => setTimeout(resolve, 2000));
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const message = await axios
    .post("http://localhost:3001/api/login", {
      email,
      password,
    })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      return error.response.data;
    });

  return message;
};
