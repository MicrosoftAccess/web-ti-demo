// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

type Data = {
  name: string
}

const prisma = new PrismaClient();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const postReview = async (params:any) => {
    console.log(params);
    
    const review = await prisma.gameReview.create({data:params.review})
    res.status(200).json(review)
  }

  if(req.method === 'POST'){
    return postReview(req.body);
  }

}
