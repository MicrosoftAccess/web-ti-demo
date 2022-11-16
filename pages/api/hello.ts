// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import getProducts from './CRUDGames/getProduct'

type Data = {
  name: string
}

const prisma = new PrismaClient();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const postUser = async () => {
    await prisma.$connect()
    const user = prisma.example.create({data:{email:"ejemplo@gmail.com",name:"JuanPablo",password:"contra123"}})
    console.log(user);
    res.status(200).json(user)
    return;
  }


  if(req.method === 'POST'){
    return postUser();
  }

}

export async function getStaticProps(){
  const products = await getProducts()
  console.log(products);
  
  return {
    props:{
      products:products
    }
  }
}