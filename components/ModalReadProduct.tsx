import { useState } from "react"
import { PrismaClient } from "@prisma/client";

export default function ModalAddProduct({ isVisibleR }: any, { onClose }: any) {

    const [productForm, setForm] = useState({
        name: '',
        price: '',
        images: '',
        description: '',
    })
    const handleInputChange = (event: any) => {
        setForm({
            ...productForm,
            [event.target.name]: event.target.value

        })

    }
    const getUser = async (event: any) => {
        event.preventDefault()
        const newProduct: any = productForm;

        const response = await fetch('/api/CRUDProducts/addProduct', {
            method: 'POST',
            body: JSON.stringify({ newProduct }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data);

    }


    if (!isVisibleR) return null;
    return (

        <div className="z-50 absolute top-[30%] right-[35%] bg-white w-1/4 h-2/4 flex flex-col items-center rounded-xl">
            <div className="w-full justify-end flex ">
                <button onClick={onClose} className="mr-4">X</button>

            </div>

        </div >

    )
}

