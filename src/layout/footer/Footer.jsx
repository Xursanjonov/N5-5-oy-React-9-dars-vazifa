import React from 'react'
import NextIcon from '../../assets/icons/NextIcon'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Qrcode from '../../assets/icons/Qrcode'
import GooglePlay from '../../assets/icons/GooglePlay'
import Appstore from '../../assets/icons/Appstore'

const Footer = () => {
    return (
        <footer className='footer container mx-auto flex items-center flex-col gap-0 bg-black'>
            <div className="footer__top container px-24 py-20 flex items-start justify-between gap-2 text-white">
                <div className="footer__top__logo w-[250px] flex flex-col items-start justify-center gap-5">
                    <Link to={'/'} className='text-2xl font-bold text-white'> Exclusive </Link>
                    <p>Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <label className="input input-info flex items-center gap-1 bg-black">
                        <input type="search" className="grow font-semibold" placeholder="Enter your email" />
                        <NextIcon color='white' />
                    </label>
                </div>
                <div className="footer__top__support flex flex-col items-start justify-center gap-4">
                    <h1 className='text-2xl font-semibold'>Support</h1>
                    <p>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div className="footer__top__account flex flex-col items-start justify-center gap-4">
                    <h1 className='text-2xl font-semibold'>Account</h1>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
                <div className="footer__top__quick flex flex-col items-start justify-center gap-4">
                    <h1 className='text-2xl font-semibold'>Quick Link</h1>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="footer__top__app flex flex-col items-start justify-center gap-4">
                    <h1 className='text-2xl font-semibold'>Download App</h1>
                    <p>Save $3 with App New User Only</p>
                    <div className="flex gap-3">
                        <Qrcode />
                        <div className="py-[1px] flex items-center justify-between flex-col">
                            <GooglePlay />
                            <Appstore />
                        </div>
                    </div>
                    <div className="mt-2 flex items-center justify-center gap-8 text-xl">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
            <div className="footer__bottom w-full mt-5">
                <p className='bg-gray-500 w-full h-[1px]'></p>
                <div className="footer__bottom-div w-full flex items-center justify-center gap-4 px-24 py-1 pb-3.5 text-gray-500">
                    <p>Copyright Rimel 2022. All right reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer