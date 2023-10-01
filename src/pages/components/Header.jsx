import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='Header-wrapper'>
      <div className='header-logo'>
        <i class="fa-solid fa-bars"></i>
        <img src="https://i.ibb.co/mv6qRzy/Youtube-Logo-Font-3-removebg-preview.png" alt="Youtube-Logo-Font-3-removebg-preview" border="0"></img>
      </div>
      <div className='header-search'>
        <input type="text" name="search" id="search" placeholder='Search'/>
        <i id='search-icon' class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className='header-details'>
       <i class="fa-solid fa-video"></i>
       <i class="fa-regular fa-bell"></i>
       <i class="fa-solid fa-user"></i>
      </div>
    </div>
  )
}

export default Header