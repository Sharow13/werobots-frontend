import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function loginApi(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const { email, password } = req.body;
  await axios
    .post("http://localhost:3000/login", { email, password })
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      if (error.response.status === 400) {
        res.status(error.response.status).send(error.response.data);
      }
    });
}
