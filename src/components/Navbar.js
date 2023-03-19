import React from 'react'
import '../scss/nav.scss';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='nav-course'>
        <div className='nav-course-logo'>
            <Link to={"/"}><h1 className='nav-logo-text'>genesis</h1></Link>
        </div>
    </nav>
  )
}

export default Navbar