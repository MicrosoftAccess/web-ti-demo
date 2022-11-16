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

    const loginUser = async (params: any) => {
        const session: any = await getSession(req, res);
        // session.views = session.views ? session.views + 1 : 1;
        console.log(params);

        const user = await prisma.userInfo.findUniqueOrThrow({
            where: {
                email: params.currentUser.email
            }
        })
        if(user.password!=params.currentUser.password){
            res.status(400).json({message:"error",params:params})
            return

        }
        const token: any = jwt.sign({user}, KEY);
        session.token = token;
        res.json({token: token});
    }


    if (req.method === 'POST') {
        return loginUser(req.body);
    }

}


export const config = {
    api: {
      externalResolver: true,
    },
  };
