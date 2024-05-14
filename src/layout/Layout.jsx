import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Header />
            <main className='main container mx-auto py-10 px-[100px] text-black bg-white'> <Outlet /> </main>
            <Footer />
        </div>
    )
}

export default Layout