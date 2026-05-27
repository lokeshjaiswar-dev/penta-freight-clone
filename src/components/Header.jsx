import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaShippingFast } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/services', label: 'SERVICES' },
    { path: '/pentakuhl', label: 'PENTAKUHL', special: true, img: '/images/pentakuhl.png' },
    { path: '/industries', label: 'INDUSTRIES' },
    { path: '/careers', label: 'CAREERS' },
    { path: '/contact', label: 'CONTACT' },
  ]

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="container-custom py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold shrink-0">
            <FaShippingFast className="text-secondary" />
            <span className="hidden sm:inline">PENTA Freight</span>
            <span className="sm:hidden">PENTA</span>
          </Link>

          <nav className="hidden md:flex items-center justify-center gap-4 lg:gap-6 flex-1 mx-4">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center gap-1 text-sm lg:text-base font-medium hover:text-secondary transition whitespace-nowrap
                  ${isActive ? 'text-secondary border-b-2 border-secondary' : ''}
                  ${item.special ? 'bg-secondary/20 px-2 py-1 rounded-full' : ''}
                `}
              >
                {item.img && <img src={item.img} alt="Pentakuhl" className="h-5 w-auto" />}
                {!item.img && item.label}
              </NavLink>
            ))}
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl p-1">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3 pb-4 border-t border-white/20 pt-4">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `
                  flex items-center gap-2 py-2 hover:text-secondary transition
                  ${isActive ? 'text-secondary' : ''}
                  ${item.special ? 'bg-secondary/20 px-2 rounded' : ''}
                `}
              >
                {item.img && <img src={item.img} alt="Pentakuhl" className="h-5 w-auto" />}
                {!item.img && item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header