import React from 'react'
import Layout from '../../../components/Layout'
export default function R() {
    return (
        <Layout>
            <div className='h-full w-full flex  justify-center container'>
                <div className='h-full w-10/12 justify-center items-center bg-white flex-row rounded-xl flex'>
                    <div className='flex flex-col w-3/5 gap-3 justify-center items-center'>
                        <img className="w-3/4 h-3/4" src="https://i0.wp.com/regionps.com/wp-content/uploads/2022/06/Call-of-Duty-Modern-Warfare-II.jpg?resize=1140%2C641&ssl=1" alt="" />
                        <h3>Añadir videojuego</h3>
                        <div className='w-full flex flex-row justify-between'>

                            <input disabled className='w-5/12 h-10 rounded' placeholder='Juego 1' type="text" />
                            <input disabled className='w-5/12 h-10 rounded' placeholder='$12.50' type="text" />
                        </div>

                        <input disabled className='w-full h-24 rounded' placeholder='Juego multijugador de accion ...' type="text" />
                        <input disabled className='w-full h-10 rounded' placeholder='accion,multijugador' type="text" />
                    </div>

                </div>

            </div>
        </Layout>
    )
}
