import React, { useState } from 'react'
import { FaRegThumbsUp, FaRegThumbsDown, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';


export default function Review({ text }: any) {
    const [isClicked, setClick] = useState(false)
    const [isClicked2, setClick2] = useState(false)

    const toggleUpVote = () => {
        if (isClicked2 === true && isClicked === false) {
            setClick(true)
            setClick2(false)
        }

        else {
            setClick(true)
        }
    }
    const toggleDownVote = () => {
        if (isClicked === true && isClicked2 === false) {
            setClick2(true)
            setClick(false)
        }

        else {
            setClick2(true)
        }
    }
    return (
        <div className="w-full h-1/4 flex flex-col">

            <div className="p-3 text-lg flex flex-row gap-5 items-center ">
                <img height="40" width="40" className="border border-white" src="https://i.pinimg.com/736x/bf/52/5c/bf525c526834d976f2b26b9f3c6e0fed.jpg" alt="" />
                <h3>Usuario123</h3>
            </div>

            <div className="overflow-y-auto h-auto p-3 " id="style-3">

                <p className="">
                    {text}
                </p>
            </div>
            <div className="flex flex-row w-full h-auto gap-3 mt-3 justify-center items-center">



                <button className='bg-transparent border-none' onClick={toggleUpVote}>{

                    isClicked ? <FaThumbsUp></FaThumbsUp> : <FaRegThumbsUp></FaRegThumbsUp>
                }
                </button>
                <button className='bg-transparent border-none' onClick={toggleDownVote}>{

                    isClicked2 ? <FaThumbsDown></FaThumbsDown> : <FaRegThumbsDown></FaRegThumbsDown>
                }
                </button>
            </div>

            <div className="w-full h-0.5 roundedn-xl bg-indigo-600"></div>
        </div>
    )
}
