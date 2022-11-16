import NextAuth, {NextAuthOptions} from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials, req){
                console.log(credentials);
                
                const { email, password} = credentials as {
                    email: string;
                    password: string;
                }

                const user = await prisma.userInfo.findUniqueOrThrow({
                    where: {
                        email: email
                    }
                })
                console.log(user);
                
                if(user.password != password){
                    throw new Error('credenciales invalidas')
                }

                return user;
            },
        })
    ],
    pages: {
        signIn: '/Library'
    }
}

export default NextAuth(authOptions);