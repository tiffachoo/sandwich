import type { NextApiRequest, NextApiResponse } from 'next'

import types from '../../data/types.json'
 
type ResponseData = {
  $schema: string;
  data: typeof types;
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ 
    $schema: "/api/schemas?schema=type",
    data: types
  });
}