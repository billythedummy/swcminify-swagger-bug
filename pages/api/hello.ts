// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

/**
 * @swagger
 * /api/hello:
 *  get:
 *    description: hello world
 *    responses:
 *      200:
 *        description: says hello
 *  parameters:
 *    - name: param1
 *      in: query
 *    - name: param2
 *      in: query
 *    - name: param3
 *      in: query
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
