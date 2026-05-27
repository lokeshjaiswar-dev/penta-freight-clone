import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaShippingFast } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/services', label: 'SERVICES' },
    { path: '/pentakuhl', label: 'PentakUHL' },
    { path: '/industries', label: 'INDUSTRIES' },
    { path: '/careers', label: 'CAREERS' },
    { path: '/contact', label: 'CONTACT' },
  ]
  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <FaShippingFast className="text-secondary" />
            <span>PENTA Freight</span>
          </Link>
          <nav className="hidden md:flex gap-6 lg:gap-8">
            {navItems.map(item => (
              <NavLink key={item.path} to={item.path} className={({ isActive }) => `text-sm lg:text-base hover:text-secondary transition ${isActive ? 'text-secondary border-b-2 border-secondary' : ''}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {isOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3 pb-4">
            {navItems.map(item => (
              <NavLink key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={({ isActive }) => `block py-2 hover:text-secondary ${isActive ? 'text-secondary' : ''}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header