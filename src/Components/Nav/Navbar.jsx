import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import img from "../../Assets/Ellipse 1.png"
import './navbar.css'

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  return (
    <>
      <div className='mynav'>
        <div className='colorpress'>
          <Link to='/' className='lin'>colorpress</Link>
        </div>
        <ul className='links'>
          <li>
            <Link className='lin'>Home</Link>
          </li>
          <li>
            <Link  className='lin'>Home</Link>
          </li>
          <li>
            <Link  className='lin'>Home</Link>
          </li>
          <li>
            <Link  className='lin'>Home</Link>
          </li>
          <li>
            <Link  className='lin'>Home</Link>
          </li>
          <li>
            <Link className='lin'>Home</Link>
          </li>
        </ul>

        <img className='profiless' src={img} />
        <div className='toggle_btn' onClick={toggleDropdown}>
          <i className='bi bi-list'></i>
        </div>
      </div>

      {dropdownOpen && (
        <div className='nav_dropdown open'>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Home</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar