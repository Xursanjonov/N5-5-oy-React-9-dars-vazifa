import React from 'react'
import { FaHeart, FaTruck } from 'react-icons/fa'
import { FiRefreshCcw } from "react-icons/fi";
import request from '../../config/request';
import { useParams } from 'react-router-dom'

const ProductsDetails = () => {
    const { id } = useParams()
    const [productItem, setProductItem] = React.useState([]);
    
    React.useEffect(()=> {
        request.get(`/products/${id}`).then(res => setProductItem(res.data)).catch(err => console.error(err))
    },[productItem])

    return (
        <section className='products-details container my-10 mx-auto flex items-center justify-center gap-4'>
            <div className="w-[800px] h-[600px] flex items-center justify-center gap-5">
                <div className="w-[170px] h-[600px] flex flex-col items-center justify-center gap-4">
                    <img className='w-[170px] h-[138px] object-contain p-5 rounded-tl-lg rounded-bl-lg shadow-md shadow-primary' src={productItem.image} />
                    <img className='w-[170px] h-[138px] object-contain p-5 rounded-tl-lg rounded-bl-lg shadow-md shadow-primary' src={productItem.image} />
                    <img className='w-[170px] h-[138px] object-contain p-5 rounded-tl-lg rounded-bl-lg shadow-md shadow-primary' src={productItem.image} />
                    <img className='w-[170px] h-[138px] object-contain p-5 rounded-tl-lg rounded-bl-lg shadow-md shadow-primary' src={productItem.image} />
                </div>
                <div className="w-[560px] h-[600px] bg-white flex items-center justify-center rounded-md shadow-md shadow-info">
                    <img className='w-[540px] h-[600px] p-4 object-contain' src={productItem.image} alt="" />
                </div>
            </div>
            <div className="product-details-title w-[420px] px-2 flex flex-col gap-6">
                <h3 className="text-2xl font-bold">Havic HV G-92 Gamepad</h3>
                <div className="w-[550px] flex items-center gap-3">
                    <div className="rating flex items-start gap-1">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>(150 Reviews) | <span className="text-green-500 font-semibold">In Stock</span></p>
                </div>
                <h4 className="text-xl font-bold text-red-500">${productItem.price}</h4>
                <p className="w-[390px]">
                    PlayStation 5 Controller Skin High quality vinyl with air channel
                    adhesive for easy bubble free install & mess free removal Pressure sensitive.
                </p>
                <hr className="h-[3px] bg-gray-200 rounded-xl" />
                <ul className="text-xl font-semibold flex items-center gap-4">
                    Colours:
                    <li className="w-[18px] h-[18px] border-2 border-black bg-blue-200 rounded-full"></li>
                    <li className="w-[18px] h-[18px] border-2 border-orange-500 bg-orange-500 rounded-full"></li>
                </ul>
                <ul className="flex items-center gap-2 font-semibold">
                    <li className="mr-3 text-2xl">Size:</li>
                    <li className="w-[30px] h-[30px] text-sm flex items-center justify-center border-2 border-gray-400 rounded-md">XS</li>
                    <li className="w-[30px] h-[30px] text-sm flex items-center justify-center border-2 border-gray-400 rounded-md">S</li>
                    <li className="w-[30px] h-[30px] text-sm flex items-center justify-center border-2 border-gray-400 bg-orange-500 text-white rounded-md">M</li>
                    <li className="w-[30px] h-[30px] text-sm flex items-center justify-center border-2 border-gray-400 rounded-md">L</li>
                    <li className="w-[30px] h-[30px] text-sm flex items-center justify-center border-2 border-gray-400 rounded-md">XL</li>
                </ul>
                <div className="w-[380px] flex items-center justify-between gap-4">
                    <ul className="flex items-center justify-center">
                        <li className="w-[40px] p-1 text-center border-2 border-gray-400 font-bold rounded-s-md">-</li>
                        <li className="w-[80px] p-1 text-center font-bold border-2 border-gray-400">2</li>
                        <li className="w-[40px] p-1 text-center border-2 border-gray-400 font-bold bg-orange-500 text-white rounded-e-md">+</li>
                    </ul>
                    <button className="px-5 py-1 font-semibold rounded-md border-2 border-orange-500 text-white bg-orange-500">Buy Now</button>
                    <p className='p-1.5 border-2 rounded-md border-gray-400'> <FaHeart /> </p>
                </div>
                <div className="flex flex-col">
                    <div className="py-2 px-4 flex items-center justify-start gap-5 border-2 border-gray-400 rounded-t-lg">
                        <p className="text-2xl"> <FaTruck /> </p>
                        <div className="flex flex-col justify-center font-semibold">
                            <p className="text-lg">Free Delivery</p>
                            <p className="text-sm">Enter your postal code for Delivery Availability</p>
                        </div>
                    </div>
                    <div className="py-2 px-4 flex items-center justify-start gap-5 border-2 border-gray-400 rounded-b-lg">
                        <p className="text-2xl"> <FiRefreshCcw /> </p>
                        <div className="flex flex-col justify-center font-semibold">
                            <p className="text-lg">Return Delivery</p>
                            <p className="text-sm">Free 30 Days Delivery Returns. Details</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsDetails