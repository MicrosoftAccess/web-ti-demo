import { Fragment, useState } from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export default function Signup() {
    const [isVisible, setVisible] = useState(true)

    const [registerForm, setForm] = useState({
        name: '',
        password: '',
        email: ''
    })

    const handleInputChange = (event: any) => {
        setForm({
            ...registerForm,
            [event.target.name]: event.target.value

        })
    }

    const postUser = async (event: any) => {
        event.preventDefault()
        const newUser: any = registerForm;
        if (newUser.confirmPassword != newUser.password) {
            return console.log('error');
        }
        delete newUser['confirmPassword'];
        const response = await fetch('/api/Signup/signUp', {
            method: 'POST',
            body: JSON.stringify({ registerForm }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data);


    }
    return (
        <Layout>

            <div className=' flex flex-row justify-center top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to bg-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden'>

                <div className='w-2/5 justify-center flex items-center'>
                    <div className='bg-white w-3/5 h-3/5 rounded-2xl shadow-2xl gap-4 flex flex-col'>
                        <div className='text-gray-500 text-2xl flex items-center justify-center w-full h-1/5 flex-col'>
                            <h1 >Registro de usuario</h1>

                        </div>
                        <form onSubmit={postUser}>
                            <div className='flex flex-col gap-5 items-center'>
                                <input onChange={handleInputChange} name="name" type="text" placeholder='Nombre de usuario' className=' w-4/5 h-10 text-center bg-gray-200 rounded-md focus-visible:ring  focus:ring-indigo-400 focus:border-indigo-400' />
                                <input onChange={handleInputChange} name="email" type="text" placeholder='Correo electronico' className=' w-4/5 h-10  text-center bg-gray-200 rounded-md  focus:ring-indigo-400 focus-visible:ring' />
                                <input type={isVisible ? "text" : "password"} onChange={handleInputChange} name="password" placeholder='Contraseña' className=' w-4/5 h-10   text-center bg-gray-200  rounded-l-md focus:ring-indigo-400 focus-visible:ring' />
                                <input name="confirmPassword" onChange={handleInputChange} type="text" placeholder='Confirmar contraseña' className=' w-4/5 h-10 text-center bg-gray-200  rounded-md  focus:ring-indigo-400 focus-visible:ring' />
                            </div>
                            <div className='flex w-full h-1/6 justify-center items-center '>
                                <button type="submit" className='text-white mt-6 background-animate w-4/5 h-10 bg-gradient-to-r rounded-xl from-purple-700 via-indigo-600 to-purple-700 animate-bounce'>Registrarse</button>
                            </div>
                        </form>


                        <div className='flex h-25 flex-col items-center text-indigo-500'>
                            <a href="/Login">¿Ya tienes una cuenta?</a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
