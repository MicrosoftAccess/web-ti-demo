import React from 'react'
import Layout from '../../../components/Layout'
export default function C() {
    return (
        <Layout>
            <div className='h-full w-full flex  justify-center container'>
                <div className='h-full w-10/12 justify-center items-center bg-white flex-row rounded-xl flex'>
                    <div className='flex flex-col w-2/5 gap-3 justify-center items-center'>
                        <h3>Añadir videojuego</h3>
                        <div className='w-full flex flex-row justify-between'>

                            <input className='w-5/12 h-10 rounded' placeholder='Nombre videojuego' type="text" />
                            <input className='w-5/12 h-10 rounded' placeholder='Precio' type="text" />
                        </div>

                        <input className='w-full h-24 rounded' placeholder='Descripcion' type="text" />
                        <input className='w-full h-10 rounded' placeholder='Categorias' type="text" />
                        <input className='w-full h-10 rounded' placeholder='URL imagen' type="text" />
                        <button className='w-full text-white h-10 bg-green-400 rounded border-none'>Añadir</button>
                    </div>

                </div>

            </div>
        </Layout>
    )
}
