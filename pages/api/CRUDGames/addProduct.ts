// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const postProduct = async (params:any) => {
    
    console.log(params);
    
    const product = await prisma.product.create({data:{name:params.newProduct.name,price:params.newProduct.price,description:params.newProduct.description,images:params.newProduct.images}})
    console.log(product);
    res.status(200).json(product)
    return;
  }


  if(req.method === 'POST'){
    return postProduct(req.body);
  }

}
