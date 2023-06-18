import { NextApiRequest, NextApiResponse } from 'next'
import survey from "../../survey-sample.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(survey)
}