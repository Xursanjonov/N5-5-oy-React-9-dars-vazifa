import React from 'react'
// import { useParams } from 'react-router-dom'

const ProductsDetails = () => {
    // const {id} = useParams()

  return (
      <section className='products-details w-[1519px] my-10 mx-auto flex items-center justify-center gap-4'>
        <h1 className='text-3xl font-semibold'>Product Details</h1>
          <div className="w-[800px] h-[600px] flex items-center justify-center gap-5"></div>
          <div className="product-details-title w-[420px] px-2 flex flex-col gap-6"></div>
      </section>
  )
}

export default ProductsDetails