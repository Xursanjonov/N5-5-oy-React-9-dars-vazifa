import React, { memo } from 'react'
import { FaEye, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import request from '../../config/request'
import Button from '../../components/form-components/Button'

const Products = ({ id, image, title, price }) => {
    return (
        <div className='products group w-[300px] h-[450px] mx-auto flex flex-col justify-between border-2 p-4 rounded-xl hover:shadow-lg hover:shadow-gray-500'>
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
export const ShopAll = () => {
    const [data, setData] = React.useState([]);
    const [alldata, setAllData] = React.useState([]);
    const [category, setCategory] = React.useState(null);
    
    const getAllData = () => {
        request.get(`/products`).then(res => setAllData(res.data)).catch(err => console.error(err))
    }
    const getCategoryData = () => {
        request.get(`/products/category/${category}`).then(res => setData(res.data)).catch(err => console.error(err))
    }
    React.useEffect(() => {
        getCategoryData()
    }, [category])

    React.useEffect(() => {
        getAllData()
    }, [])

    return (
        <div className='flex flex-col items-start justify-center gap-8'>
            <h1 className='text-4xl font-bold text-orange-400'>All Products</h1>
            <div className="flex items-center justify-center gap-4">
                <Button onClick={() => setCategory(null)} className={'font-bold bg-white text-black active:bg-green-500 hover:btn-secondary'}>All Products</Button>
                <Button onClick={() => setCategory('electronics')} className={'font-bold bg-white text-black active:bg-green-500 hover:btn-secondary'}>Electronics</Button>
                <Button onClick={() => setCategory('jewelery')} className={'font-bold bg-white text-black active:bg-green-500 hover:btn-secondary'}>Jewelery</Button>
                <Button onClick={() => setCategory("men's clothing")} className={'font-bold bg-white text-black active:bg-green-500 hover:btn-secondary'}>Men's clothing</Button>
                <Button onClick={() => setCategory(`women's clothing`)} className={'font-bold bg-white text-black active:bg-green-500 hover:btn-secondary'}>Women's clothing</Button>
            </div>
            <div className="w-full mx-auto grid grid-cols-4 items-center justify-center gap-8">
                {
                    category ? data?.map(product => <Products key={product.id} {...product} />) : (alldata?.map(product => <Products key={product.id} {...product} />))
                }
            </div>
        </div>
    )
}

export default memo(Products)