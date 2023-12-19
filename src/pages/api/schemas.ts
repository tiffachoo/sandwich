import type { NextApiRequest, NextApiResponse } from 'next'

import recipeSchema from '../../schemas/recipe.json'
import typeSchema from '../../schemas/type.json'
import ingredientSchema from '../../schemas/ingredient.json'

const schemas: any = {
  recipe: recipeSchema,
  type: typeSchema,
  ingredient: ingredientSchema
};
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const schema = req.query.schema as string
  if (!Object.keys(schemas).includes(schema)) {
    return res.status(400).json({ message: 'Invalid schema' })
  }
  res.status(200).json(schemas[schema])
}