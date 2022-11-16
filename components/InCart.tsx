import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import { emptyCart } from '../slices/cartSlice'
import { useDispatch, useSelector } from "react-redux";
export default function InCart({ item, props }: any) {

    return (
        <div className="flex flex-row gap-3">
            <div className="hover:bg-gray-400 w-full flex flex-row">
                <div className="w-full text-center ">
                    {item}
                </div>


            </div>

        </div>
    )
}
export const getServerSideProps = async (context: any) => {



    // const res = await fetch(`https://cs-steam-game-api.herokuapp.com/single-game/${id}`)
    // const games = await res.json()


    return {
        props: {
            data: context
        }
    }
}
