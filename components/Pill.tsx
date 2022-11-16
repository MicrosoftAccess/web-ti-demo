import React from 'react'

export default function Pill(props: any) {

    return (
        <>
            <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full">{props.text}</span>
        </>
    )
}
