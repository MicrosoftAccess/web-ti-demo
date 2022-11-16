// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import nextSession from "next-session";
const getSession = nextSession({ autoCommit: false });
import jwt from 'jsonwebtoken'

const KEY = 'demo'
type Data = {
    name: string
}

const prisma = new PrismaClient();

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    const postShop = async (params: any) => {
        const session: any = await getSession(req, res);
        // session.views = session.views ? session.views + 1 : 1;
        console.log(params);
        const currentUser:any = await prisma.userInfo.findFirst({
            where:{
                email : params.userLibrary.email
            }}
        )
        const newSet:any = new Set([...currentUser.library,...params.userLibrary.library])
        const user = await prisma.userInfo.update({
            where: {
                email:params.userLibrary.email
            },
            data:{
                library:[...newSet]
            }
        })
        console.log(user);
        
        
    }


    if (req.method === 'POST') {
        return postShop(req.body);
    }

}