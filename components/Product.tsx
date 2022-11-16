import ProductOnSlide from "./ProductOnSlide";
import Image from 'next/image';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Pill from "./Pill";
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from "../slices/cartSlice";
import type { RootState } from '../store'

export default function Product({ props }: any) {
  const cart = useSelector((state: RootState) => state.cart.products)
  const productData = props.appid
  console.log(cart);

  const dispatch = useDispatch();
  return (

    <div className="flex flex-col text-gray-900 h-68 w-68 text-center justify-center rounded-xl text-xs bg-white">
      <Link className="cursor-pointer" href={`/Store/${encodeURIComponent(props.appid)}`}>
        <div className="flex overflow-hidden rounded-t-xl" style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image src={props.header_image} alt={props.header_image}
            layout="responsive"
            width={100}
            height={100}
            objectFit='contain'></Image>
        </div>
      </Link>

      <div className="w-full flex flex-col gap-10 text-xl justify-center py-6">
        <div className="flex justify-center">
          <div className="w-6/12 truncate pl-12">
            <span className="text-gray-900">
              {props.name}
            </span>
          </div>
          <div className="w-6/12">
            <span className="text-gray-500">
              {props.price != "0" ? `$${props.price}` : 'Gratis'}
            </span>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          {props.genres.slice(0, 3).map((genre: string, index: number) => {
            return <Pill key={index} text={genre} />
          })}
        </div>
        <div className="flex space-x-2 justify-center">
          <div>
            <button onClick={() => dispatch(addProduct(productData))} type="button" className="border-none gap-3 px-6 items-center pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center">
              <AiOutlineShoppingCart size={20} />
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>



  );
}
