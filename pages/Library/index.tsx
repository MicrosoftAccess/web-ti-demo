
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { PrismaClient } from "@prisma/client";
import CategoriesButton from "../../components/CategoriesButton";
import Image from "next/image";
import { getSession, useSession } from "next-auth/react";
import authOptions from "../api/auth/[...nextauth]"
import { unstable_getServerSession } from "next-auth/next"
const prisma = new PrismaClient();
import { getCsrfToken } from "next-auth/react"
export default function Library({ library }: any) {
    const [currentGame, setGame] = useState(library[0].data)




    return (
        <Layout>
            <div className="flex h-full w-10/12 justify-center">
                <div className=" rounded-l-xl w-full flex flex-row h-full justify-center">
                    <div className="w-1/5 h-full bg-black rounded-l-xl">
                        <div className="h-10 w-full rounder-lt-xl text-white text-xl text-center">
                            Biblioteca
                        </div>
                        {library.map((data: any) => (
                            <button onClick={() => setGame(data.data)} key={data.data.appid} className="w-full bg-black border-none h-10 hover:bg-gray-500 text-white justify-center">{data.data.name}</button>

                        ))

                        }
                    </div>
                    <div className="w-4/12 bg-white rounded-r-xl h-full flex flex-col items-center">
                        <div className="h-2/5 flex items-center">

                            <Image width={375} height={200} src={currentGame.header_image} alt={currentGame.header_image} />
                        </div>
                        <div className="h-3/5 flex items-center">
                            <button className="h-10 w-24 bg-green-400 border-none rounded-md">Instalar</button>

                        </div>
                    </div>
                </div>
            </div>
        </Layout >

    );
}
export const getServerSideProps = async (context: any) => {
    // const { data, status } = useSession()
    // console.log(data);
    // const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions)
    // if (session) {
    //     // Signed in
    //     console.log("Session", JSON.stringify(session, null, 2))
    // }

    const session = await getSession(context)
    console.log(session);
    if (!session) {
        return {
            redirect: {
                destination: '/Login',
                permanent: false
            }
        }
    }


    let gamesArray: any = []
    const library: any = await prisma.userInfo.findFirst({
        where: {
            email: session.user?.email
        },
    });

    gamesArray = await Promise.all(library.library.map(async (game: number) => {
        const res: any = await fetch(`https://cs-steam-game-api.herokuapp.com/single-game/${game}`)
        const gameData = await res.json()
        return gameData;
    }));

    return {
        props: {
            library: gamesArray
        }
    }
}
// 636e81f88aa05ac9066ff57d