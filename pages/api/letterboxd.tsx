import { NextApiResponse } from "next";
import letterboxd from "letterboxd";

export default async function lboxd(_, res: NextApiResponse) {
  try {
    res.status(200).json(await letterboxd("justsharan"));
  } catch (err) {
    res.status(500);
  }
}
