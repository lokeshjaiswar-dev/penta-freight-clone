import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const BASE = import.meta.env.BASE_URL

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Track page scroll to transition background from transparent to white
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/services', label: 'SERVICES' },
    { path: '/pentakuhl', label: 'PENTAKUHL', special: true, img: `${BASE}images/pentakuhl.png` },
    { path: '/industries', label: 'INDUSTRIES' },
    { path: '/careers', label: 'CAREERS' },
    { path: '/contact', label: 'CONTACT' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white text-[#0B2545] shadow-md py-3' 
          : 'bg-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between md:justify-center items-center relative">
          
          {/* Desktop Navigation Link Cluster (Centered) */}
          <nav className="hidden md:flex items-center justify-center gap-5 lg:gap-7 mx-auto">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center gap-1.5 text-xs lg:text-sm font-semibold tracking-wider transition duration-300 whitespace-nowrap pb-1
                  ${isScrolled ? 'hover:text-[#E28766]' : 'hover:text-[#E28766]'}
                  ${isActive ? 'text-[#E28766] border-b-2 border-[#E28766]' : ''}
                  ${item.special ? 'bg-[#E28766]/20 px-3 py-1.5 rounded-full border border-[#E28766]/30 hover:bg-[#E28766]/30' : ''}
                `}
              >
                {item.img && (
                  <img 
                    src={item.img} 
                    alt="Pentakuhl" 
                    className={`h-4 w-auto transition duration-300 ${isScrolled ? '' : 'brightness-0 invert'}`} 
                  />
                )}
                {!item.img && item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Display Controls (Aligned right on mobile viewports) */}
          <div className="w-full flex justify-end md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`text-xl p-1 transition ${isScrolled ? 'text-[#0B2545]' : 'text-white'}`}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Responsive Mobile Drawer */}
        {isOpen && (
          <nav className={`md:hidden mt-4 flex flex-col gap-3 pb-5 pt-4 border-t ${
            isScrolled ? 'border-[#0B2545]/10' : 'border-white/10'
          }`}>
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `
                  flex items-center gap-2 py-2.5 text-sm font-bold tracking-wide transition
                  ${isActive ? 'text-[#E28766]' : ''}
                  ${item.special ? 'bg-[#E28766]/20 px-3 rounded-lg border border-[#E28766]/20' : ''}
                `}
              >
                {item.img && (
                  <img 
                    src={item.img} 
                    alt="Pentakuhl" 
                    className={`h-4 w-auto ${isScrolled ? '' : 'brightness-0 invert'}`} 
                  />
                )}
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