import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/contact'>Contact</Link>
    </>
  )
}

export default Navbar