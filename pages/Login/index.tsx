import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { getSession, signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Router from 'next/router';




export default function Login() {
    const { data, status } = useSession()

    useEffect(function (): void {
        if (status === "authenticated")
            Router.replace("/");
    }, [status])

    const [loginForm, setForm] = useState({
        email: '',
        password: '',
    })


    const handleInputChange = (event: any) => {
        setForm({
            ...loginForm,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const res = await signIn('credentials', {
            email: loginForm.email,
            password: loginForm.password,
            redirect: false
        })
    }

    if (status != 'unauthenticated' && !data) {
        return <div>Loading...</div>
    }


    return (
        <Layout>
            <div className=' flex justify-center flex-row top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to bg-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden'>
                <div className='w-2/5 h-11/12 justify-center flex items-center'>
                    <div className='bg-white w-6/12 h-2/5 rounded-2xl shadow-2xl flex flex-col gap-6'>
                        <div className='text-gray-500 text-2xl flex items-center justify-center w-full h-1/5 flex-col'>
                            <h1 >Inicio de sesión</h1>
                            <div className='flex gap-2 flex-row'>
                                <span className='text-sm' >¿No tienes una cuenta?</span>
                                <a className='text-sm text-indigo-600' href="/Signup">Aqui</a>
                            </div>
                        </div>
                        <div className='flex w-full flex-col gap-5 items-center'>
                            <form className='flex flex-col justify-center gap-3 items-center' onSubmit={handleSubmit}>
                                <input name='email' onChange={handleInputChange} type="text" placeholder='Usuario' className='w-full h-10 border text-center bg-gray-300 rounded-md ' />
                                <input name='password' onChange={handleInputChange} type="password" placeholder='Contraseña' className='w-full h-10 border text-center bg-gray-300  rounded-md ' />
                                <div className='flex w-full h-1/6 justify-center items-center mt-3'>
                                    <button type='submit' className='text-white background-animate w-full h-10 bg-gradient-to-r rounded-xl from-purple-700 via-indigo-600 to-purple-700'>Iniciar sesión</button>
                                </div>
                            </form>
                        </div>
                        <div className='flex h-25 flex-col gap-4 items-center text-indigo-500'>
                            <a href="">¿Has olvidado tu contraseña?</a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
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
    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return {
        props: {
            games: session
        }
    }
}