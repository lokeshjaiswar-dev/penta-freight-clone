import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const domesticOffices = [
    {
      city: 'Mumbai',
      address: "902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol, Andheri (East), Mumbai 400 059",
      phone: '+91 22-6222-6222'
    },
    {
      city: 'Ahmedabad',
      address: 'D21 The Address, True Value West Gate, SG highway, Ahmedabad 380 009',
      phone: '+91 7940227900'
    },
    {
      city: 'Bengaluru',
      address: '205, 2nd floor, Connection point H.A.L Airport Exit Road, Bangalore 560 017',
      phone: '+91 80-4112-5590'
    },
    {
      city: 'Chennai',
      address: 'Flat no.A1, 1st floor, No 24 Vembuli Amman koil Street, Palavanthangal Chennai- 600 114',
      phone: '+91-44-22241462/ 1464'
    },
    {
      city: 'Delhi',
      address: 'Penta Freight Pvt. Ltd. Khasra No. 10/1/10/2, 11/5/1, No. 4, Samalkha, Old Delhi – Gurgaon Road, Opposite Primary School, New Delhi – 110 037',
      phone: '+91 11-4078-2222'
    },
    {
      city: 'Hyderabad',
      address: 'G-27 & 28, Cargo Satellite Building, Rajiv Gandhi International Airport, Shamshabad 501 218, Telangana, India',
      phone: '+91 40-2400-4048'
    },
    {
      city: 'Kolkata',
      address: '131, Jangalpur Road, near airport, Gate No. 3, Motilal Colony, P.O Rajbari, Kolkata 700 081, West Bengal',
      phone: '+91 33-2514-7089'
    }
  ]

  return (
    <footer className="bg-white text-[#555555] pt-16 pb-8 font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Continuous Fluid Grid: Contains Title + All 7 Cities seamlessly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          
          {/* Grid Position 1: Section Title */}
          <div className="space-y-3">
            <h2 className="text-[#0B2545] text-3xl font-bold tracking-tight">
              Our <span className="text-[#E28766]">India</span> Offices
            </h2>
            <p className="text-sm font-light leading-relaxed text-gray-400">
              Penta Freight delivers seamless logistics across India, with branches in key cities for your convenience.
            </p>
          </div>

          {/* Grid Positions 2 through 8: Dynamic wrapping naturally keeps lines perfectly straight */}
          {domesticOffices.map((office, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-[#0B2545] text-lg font-bold tracking-tight">{office.city}</h3>
              <p className="text-xs font-light text-gray-500 leading-relaxed min-h-[48px]">{office.address}</p>
              <p className="text-xs font-medium text-gray-600 pt-1">{office.phone}</p>
            </div>
          ))}
        </div>

        {/* USA Office Profile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 pb-12 border-b border-gray-200/60">
          <div className="space-y-3">
            <h2 className="text-[#0B2545] text-3xl font-bold tracking-tight">
              Our <span className="text-[#E28766]">USA</span> Office
            </h2>
            <p className="text-sm font-light leading-relaxed text-gray-400">
              Penta Freight has expanded its operations globally, beginning with the USA, to offer continuous support across continents.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-[#0B2545] text-lg font-bold tracking-tight">Chicago</h3>
            <p className="text-xs font-light text-gray-500 leading-relaxed min-h-[48px]">
              Penta Freight Pvt.Ltd 5100 Newport Dr. Suite 4, Rolling Meadows, IL 60008 USA
            </p>
            <p className="text-xs font-medium text-gray-600 pt-1">+040 234 6559 / +224 434 2154</p>
          </div>

          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
        </div>

        {/* Sub-Footer Legal Ribbon */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4 font-light">
          <div>
            © {currentYear} Penta Freight. All Rights Reserved Developed by Nipralo
          </div>

          <div className="flex items-center justify-center">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-7 h-7 rounded-full border border-gray-300 text-gray-500 hover:bg-[#0B2545] hover:text-white flex items-center justify-center transition duration-300"
            >
              <FaLinkedinIn size={11} />
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/privacy-policy" className="hover:text-gray-900 transition">Privacy Policy</Link>
            <span className="w-1 h-1 rounded-full bg-gray-300 block select-none"></span>
            <Link to="/terms" className="hover:text-gray-900 transition">Terms and Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer