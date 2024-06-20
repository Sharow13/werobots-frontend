import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function registerApi(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const { email, password } = req.body;
  await axios
    .post("http://localhost:3000/register", { email, password })
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      if (error.response.status === 409) {
        res.status(error.response.status).send(error.response.data);
      }
    });
}
