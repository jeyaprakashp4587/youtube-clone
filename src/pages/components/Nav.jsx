import React, { useEffect, useState } from 'react'
import navigation from '../json/navigation.json'
import '../home.css'

const Nav = () => {
    const [nav, setNav] = useState([]);
    useEffect(()=>{
        setNav(navigation.nav);
    },[nav]);
    
  return (
    <div className='main-wrapper-nav'>
        {nav.map((data)=>(
          <div className="navs">
            <p>{data.name}</p>
          </div>
        ))}
    </div>
  )
}

export default Nav