import React, { memo } from 'react'
import { FaEye, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Products = ({ id, image, title, price }) => {
    return (
        <div className='products group w-[300px] h-[430px] flex flex-col justify-between border-2 p-4 rounded-xl hover:shadow-lg hover:shadow-gray-500'>
            <div className="flex">
                <Link to={`/products/${id}`} className='w-[250px] h-[300px] flex items-center justify-center p-1 mx-auto'>
                    <img className='w-[250px] h-[300px] p-3 object-contain mx-auto' src={image} />
                </Link>
                <div className="h-[100px] group-hover:flex py-3 px-1 mr-[-5px] text-lg hidden flex-col justify-between gap-3">
                    <p className='p-2 rounded-full bg-gray-200'><FaHeart /></p>
                    <p className='p-2 rounded-full bg-gray-200'><FaEye /></p>
                </div>
            </div>
            <div className="products__body mb-3">
                <h3 className='font-semibold'>{title}</h3>
                <div className="flex items-center gap-3">
                    <p className='text-lg font-semibold text-red-500'>${price}</p>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Products)