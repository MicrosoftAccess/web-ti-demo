import React from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { AiOutlineDelete, AiOutlineEye, AiOutlineEdit } from 'react-icons/ai'
export default function CRUD() {
    return (
        <Layout>
            <div className='h-full w-full flex  justify-center container'>
                <div className='h-full w-10/12 justify-center items-center bg-white flex-row rounded-xl flex'>
                    <div className='flex flex-col w-full gap-3 justify-center items-center'>
                        <div className='w-4/5 justify-end flex'>
                            <Link href={'/CRUD/C'}>
                                <button className='h-10  text-white w-10 rounded-3xl bg-green-500 border-none'>+</button>
                            </Link>
                        </div>
                        <div className="overflow-x-auto relative">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">
                                            id
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Nombre producto
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Categorias
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Precio
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Descripcion
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white text-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            636f10b4b03dc8927902dfb8
                                        </th>
                                        <td className="py-4 px-6">
                                            Juego 1
                                        </td>
                                        <td className="py-4 px-6">
                                            accion,multijugador
                                        </td>
                                        <td className="py-4 px-6">
                                            $12.50
                                        </td>
                                        <td className="py-4 px-6">
                                            Juego multijugador de accion ...
                                        </td>
                                        <td className="py-4 px-6 flex flex-row gap-3 text-center">
                                            <Link href={'/CRUD/R'}>
                                                <AiOutlineEye style={{ cursor: 'pointer', color: 'white' }} />
                                            </Link>
                                            <Link href={'/CRUD/U'}>
                                                <AiOutlineEdit style={{ cursor: 'pointer', color: 'white' }} />
                                            </Link>
                                            <AiOutlineDelete style={{ cursor: 'pointer', color: 'white' }} />
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </Layout>
    )
}
