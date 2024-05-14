import React, { memo } from 'react'
import ThreeCards from './components/ThreeCards'
import { FaTruck } from 'react-icons/fa'
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";
import { nanoid } from 'nanoid';
import Button from '../../components/form-components/Button';
import SectionIcon from '../../assets/icons/SectionIcon';
import Products from '../products/Products';
import request from '../../config/request';
import Hero from './components/Hero';

const Home = () => {
  const [limit, setLimit] = React.useState(false);
  const [data, setData] = React.useState([]);

  function getLimitData() {
    request.get(`/products?limit=${limit ? 20 : 8}`).then(res => setData(res.data)).catch(err => console.log(err))
  }

  React.useEffect(() => {
    getLimitData()
  }, [limit])

  const productItem = data?.map((product) => <Products key={product.id} {...product} />)

  return (
    <section className='home mx-auto'>
      <Hero />
      <div className="my-10 flex flex-col items-start justify-center gap-5">
        <div className="flex items-center justify-center gap-3 text-orange-500">
          <SectionIcon />
          <h1 className='text-2xl font-semibold'>Our Products</h1>
        </div>
        <div className="my-8 container grid grid-cols-4 items-start justify-center mx-auto gap-8">
          {productItem}
        </div>
        <Button onClick={() => setLimit(!limit)} className='w-[200px] mx-auto font-semibold text-lg border-transparent text-white bg-orange-500 hover:bg-green-500 active:bg-blue-500'>
          {!limit ? 'View All Products' : '8 Products'}
        </Button>
      </div>
      <div className="container my-5 flex items-center justify-center gap-8">
        <ThreeCards key={nanoid()} icon={<FaTruck />} title={'FREE AND FAST DELIVERY'} info={'Free delivery for all orders over $140.'} />
        <ThreeCards key={nanoid()} icon={<RiCustomerService2Fill />} title={'24/7 CUSTOMER SERVICE'} info={'Friendly 24/7 customer support'} />
        <ThreeCards key={nanoid()} icon={<SiAdguard />} title={'MONEY BACK GUARANTEE'} info={'We reurn money within 30 days'} />
      </div>
    </section>
  )
}

export default memo(Home)