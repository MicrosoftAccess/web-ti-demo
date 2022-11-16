import Layout from "../../components/Layout";

import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { IoCloseOutline } from 'react-icons/io5'
import ModalReadProduct from "../../components/ModalReadProduct";
import { PrismaClient } from "@prisma/client";
import { Modal, Box, Typography } from "@mui/material";
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    height: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
const prisma = new PrismaClient();
export default function CRUDGame(props: any) {
    const [isVisible, setVisible] = useState(false)
    const [isVisibleR, setVisibleR] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [open, setOpen] = React.useState(false);
    const products = props.products
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOnClickRead = (product: any) => {
        setVisibleR(true);
        setVisible(false);

        setSelectedProduct(product);
    };
    const handleOnClickEdit = (product: any) => {
        setVisible(true);
        setVisibleR(false);

        setSelectedProduct(product);
    };
    const [productForm, setForm] = useState({
        name: '',
        price: 0,
        images: '',
        description: '',
    })
    const handleInputChange = (event: any) => {
        setForm({
            ...productForm,
            [event.target.name]: event.target.value

        })

    }
    const postProduct = async (event: any) => {
        event.preventDefault()
        const newProduct: any = productForm;

        const response = await fetch('/api/CRUDGames/addProduct', {
            method: 'POST',
            body: JSON.stringify({ newProduct }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data);

    }



    return (
        <Layout>
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-4/5 rounded-xl h-full flex justify-center items-center flex-row bg-indigo-500">
                    <div className="overflow-x-auto relative">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        ID
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Nombre
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Descripcion
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Precio
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product: any) => (
                                    <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {product.id}
                                        </th>
                                        <td className="py-4 px-6">
                                            {product.name}
                                        </td>
                                        <td className="py-4 px-6">
                                            {product.description}
                                        </td>
                                        <td className="py-4 px-6">
                                            {product.price}
                                        </td>

                                        <td className="py-4 px-6 flex flex-row gap-3">
                                            <AiOutlineEye className="hover:text-indigo-500" size={20} onClick={handleOpen} style={{ cursor: 'pointer' }} />
                                            <FiEdit className="hover:text-indigo-500" size={20} onClick={handleOpen} style={{ cursor: 'pointer' }} />
                                            <AiOutlineDelete className="hover:text-indigo-500" size={20} onClick={handleOpen} style={{ cursor: 'pointer' }} />
                                        </td>

                                    </tr>
                                ))
                                }

                            </tbody>
                        </table>
                    </div>


                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={{ ...style, }}>
                            <div style={{ display: 'flex', justifyContent: 'end' }}>
                                <button style={{ border: 'none', background: 'transparent' }} onClick={handleClose}><IoCloseOutline size={20} style={{ marginLeft: '100%', cursor: 'pointer' }} /></button>

                            </div>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                <div>
                                    <h1>Datos del juego</h1>
                                </div>
                            </Typography>
                            <Typography className="w-full h-full" id="modal-modal-description" sx={{ mt: 2, height: '70%' }}>
                                <div className="flex w-full h-full justify-center" style={{ height: '100%' }}>

                                    <form style={{ height: '100%' }}>

                                        <div style={{ height: '100%' }} className="flex flex-col w-full items-center justify-center h-full gap-3">
                                            <div style={{ height: '20%', width: '100%', display: 'flex', justifyContent: 'space-between' }} >

                                                <input style={{ height: '50%', width: '45%' }} name="name" type="text" className="w-2/4 h-10 border border-black rounded-md" value={productForm.name} placeholder="aaaaaaaa del videojuego" />
                                                <input style={{ height: '50%', width: '45%' }} name="price" type="text" className="w-2/4 h-10 border border-black rounded-md" placeholder="Precio" />
                                            </div>
                                            <div style={{ height: '20%', width: '100%' }}>
                                                <input style={{ height: '50%', width: '100%' }} name="image" type="text" className="w-full h-1/12 overflow-y-auto border border-black rounded-md text-center" placeholder="URL Imagen" />

                                            </div>
                                            <div style={{ height: '30%', width: '100%' }}>
                                                <input style={{ height: '100%', width: '100%' }} name="description" type="text" className="w-full h-2/4 overflow-y-auto border border-black rounded-md text-center" placeholder="Descripcion" />

                                            </div>
                                            <div style={{ height: '30%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                                <button style={{ color: 'white', border: 'none', background: 'lightgreen', borderRadius: '5%', width: '100%', height: '30%' }}>Añadir</button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </Typography>
                        </Box>
                    </Modal>

                </div>
                <ModalReadProduct product={products[0]} onClose={() => setVisibleR(false)} isVisibleR={isVisibleR}></ModalReadProduct>
            </div >
        </Layout >
    )
}


export async function getServerSideProps() {
    const products = await prisma.product.findMany();
    console.log(products);

    return {
        props: {
            products: products,
        },
    };
}
