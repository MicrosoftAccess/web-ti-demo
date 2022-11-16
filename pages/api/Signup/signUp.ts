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
  const postUser = async (params:any) => {
    const user = await prisma.userInfo.create({data:params.registerForm})
    res.status(200).json(user)
  }

  if(req.method === 'POST'){
    return postUser(req.body);
  }

}
