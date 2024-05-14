import React from 'react'

const ThreeCards = ({ icon, title, info }) => {
    return (
        <div className='w-[330px] h-[280px] px-3 flex flex-col items-center justify-center gap-2 rounded-xl hover:shadow-md hover:shadow-gray-500'>
            <p className='w-[60px] h-[60px] rounded-full flex items-center border-[8px] border-gray-500 justify-center text-2xl text-white bg-black'> {icon} </p>
            <h3 className='mt-8 text-xl font-bold'>{title}</h3>
            <p>{info}</p>
        </div>
    )
}

export default ThreeCards