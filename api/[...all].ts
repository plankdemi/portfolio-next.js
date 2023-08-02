import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Your API logic goes here
  res.status(200).json({ message: "API route works!" });
}
