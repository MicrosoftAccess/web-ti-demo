
import React, { useState } from "react";
import Layout from "../../components/Layout";
import Pill from "../../components/Pill";
import Review from "../../components/Review";
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from '../../slices/cartSlice'
import InCart from "../../components/InCart";
import Link from "next/link";
import { getSession, useSession } from "next-auth/react";
export default function Store() {
  const { data, status } = useSession();
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const postShop = async (event: any) => {
    event.preventDefault()
    const userLibrary: any = {
      library: cart.products,
      email: data.user.email
    };


    const response = await fetch('/api/boughtProduct/boughtProduct', {
      method: 'POST',
      body: JSON.stringify({ userLibrary }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const datajson = await response.json()
    console.log(datajson);


  }


  return (
    <Layout>
      <div className="w-full h-full  flex justify-center">
        <div className="w-1/5 rounded-xl h-full bg-white flex flex-col gap-3">
          <div className="text-center"><h1>Carrito de compras</h1></div>
          <div className="h-3/4 overflow-auto">

            {cart.products.length != 0 ?
              cart.products.map((item: any) => (
                <InCart key={item} item={item}></InCart>
              ))
              : <div className="text-black flex items-center justify-center h-full">

                Carrito vacio
              </div>
            }
          </div>
          {cart.products.length != 0 ? <div className="w-full flex justify-around h-24 ">
            <button onClick={() => dispatch(emptyCart())} className="w-10 flex items-center justify-center h-10 rounded-3xl text-white  bg-red-500 border-none"><AiOutlineClose /></button>
            <button onClick={postShop} className="w-10 h-10 rounded-3xl bg-green-400  flex items-center text-white justify-center border-none"><AiOutlineCheck /></button>

          </div> :
            <div></div>}
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
  return {
    props: {
      data: '1'
    }
  }
}
