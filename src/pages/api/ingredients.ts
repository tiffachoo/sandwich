import type { NextApiRequest, NextApiResponse } from 'next'

import ingredients from '../../data/ingredients.json'
 
type ResponseData = {
  $schema: string;
  data: typeof ingredients;
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ 
    $schema: "/api/schemas?schema=recipe",
    data: ingredients
  });
}