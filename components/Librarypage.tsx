import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function Librarypage() {
    return (
        <div className="w-full h-full">

        </div>
    )
}
export const getServerSideProps = async (context: any) => {
    const id = context.query


    // const res = await fetch('https://cs-steam-game-api.herokuapp.com/single-game/:[id]')
    const res = await fetch(`https://cs-steam-game-api.herokuapp.com/single-game/${id.gameid}`)
    const game = await res.json()

    //test

    return {
        props: {
            game: game,
        }
    }
}
