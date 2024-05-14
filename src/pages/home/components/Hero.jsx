import React from 'react'
import appleLogo from '../../../assets/images/apple-logo.png'
import heroLogo from '../../../assets/images/hero-img.png'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="w-[1350px] mx-auto my-10 flex items-center justify-start gap-16 bg-black text-white">
            <div className="ms-20 flex flex-col gap-2">
                <div className="flex items-center gap-5"> <img src={appleLogo} alt="" /> <p>iPhone 14 Series</p> </div>
                <p className="w-[280px] font-bold text-5xl">Up to 10% off Voucher</p>
                <Link to={"/shop"} className="w-[90px] flex items-center gap-2 font-semibold border-b text-xl text-white">
                    ShopNow
                    <i className="mt-2 fa-solid fa-arrow-right"></i>
                </Link>
            </div>
            <figure className="flex ms-10 mt-7"><img src={heroLogo} alt="" /></figure>
        </div>
    )
}

export default Hero