import React from 'react'
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <>
          <header>
        <a href="" className='logo'>My Blogs</a>
        <nav>
          <Link to="/login" > login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header></>
  )
}

export default Header