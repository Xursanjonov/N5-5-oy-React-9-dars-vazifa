import React, { Fragment } from 'react'
import Button from '../../components/form-components/Button'
import { Link, NavLink } from 'react-router-dom'
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  const [profil, setProfil] = React.useState('hidden')
  const token = localStorage.getItem('x-auth-token')

  function getToken() {
    if (token) {
      setProfil('block')
    } else {
      setProfil('hidden')
    }
  }

  React.useEffect(() => {
    getToken()
  }, [token])

  return (
    <Fragment>
      <div className='header__top container hidden mx-auto py-1 xl:flex items-center justify-end pe-[5rem] gap-56 bg-black text-white'>
        <div className="flex items-center justify-center gap-2">
          <p className='text-md font-light'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <Button className='bg-transparent border-0 text-white hover:text-black hover:bg-blue-400' ><Link className='hover:text-black' to={'/products'}>Shop Now</Link> </Button>
        </div>
        <select className="select select-info w-[200px]">
          <option>English</option>
          <option>Uzbek</option>
          <option>Ruscha</option>
        </select>
      </div>
      <header className='header top-0 sticky z-50 container mx-auto flex items-center justify-between px-24 py-3 shadow-md bg-white'>
        <Link to={'/'} className="logo font-bold text-3xl text-black">Exclusive</Link>
        <div className="flex items-center justify-center gap-5">
          <NavLink className={'font-medium text-lg border-b-[2px] border-white px-1 text-black'} to={'/'}>Home</NavLink>
          <NavLink className={'font-medium text-lg border-b-[2px] border-white px-1 text-black'} to={'/contact'}>Contact</NavLink>
          <NavLink className={'font-medium text-lg border-b-[2px] border-white px-1 text-black'} to={'/about'}>About</NavLink>
          <NavLink className={'font-medium text-lg border-b-[2px] border-white px-1 text-black'} to={'/sign-in'}>Sign in</NavLink>
        </div>
        <div className="flex items-center justify-center gap-5">
          <label className="input input-secondary flex items-center gap-2 bg-white">
            <input type="search" className="grow font-semibold italic text-black" placeholder="Search" />
            <FaSearch color='black' />
          </label>
          <FaHeart color='red' fontSize={'1.5rem'} />
          <Link to={'/products'}> <FaShoppingCart color='black' fontSize={'1.5rem'} /> </Link>
          <FaUser className={`${profil}`} color='black' fontSize={'1.5rem'} />
        </div>
      </header>
    </Fragment>
  )
}

export default Header