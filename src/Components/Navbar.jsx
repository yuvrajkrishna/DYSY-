import React from 'react'

import Menu from './navComponents/Menu'
import Buttons from './navComponents/Button'
import Logo from './navComponents/Logo'

const Navbar = () => {
  return (
    <nav  className='bg-primary text-amber-50 w-full h-15 p-4 font-thin flex items-center justify-between sticky top-0 z-1000'>
        <Logo />
        <Buttons />
        <Menu />
    </nav>
  )
}

export default Navbar