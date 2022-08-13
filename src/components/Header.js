import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
   <header className="bg-black">
    <div className="container mx-auto flex justify-between">
        <nav className="flex text-white">
            <NavLink to="/" exact className="inline-flex items-center py-3 px-3 mr-4">
                Neil Davidson Portfolio
            </NavLink>
            <NavLink to="/projects" className="inline-flex items-center py-3 px-3 mr-4">
                Projects
            </NavLink>
            {/* <NavLink to="/about" className="inline-flex items-center py-3 px-3 mr-4">
                About
            </NavLink> */}
          
        </nav>
    </div>
   </header>
  )
}

export default Header