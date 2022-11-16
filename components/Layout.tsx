import { PropsWithChildren } from 'react'
import Navbar from './Navbar'
export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className='flex flex-row h-full'>
            <div className='flex flex-col gap-3 w-full h-full '>
                <Navbar></Navbar>
                <div className='py-6 h-full flex justify-center'>
                    {children}
                </div>
            </div>
        </div>
    )
}
