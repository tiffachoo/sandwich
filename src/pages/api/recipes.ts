import type { NextApiRequest, NextApiResponse } from 'next'

import recipes from '../../data/recipes.json'
 
type ResponseData = {
  $schema: string;
  data: typeof recipes;
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ 
    $schema: "/api/schemas?schema=recipe",
    data: recipes
  });
}