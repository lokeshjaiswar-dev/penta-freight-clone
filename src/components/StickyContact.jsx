import React from 'react'
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const StickyContact = () => {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/912262226222"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
      <a
        href="tel:+912262226222"
        className="bg-secondary text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="Phone"
      >
        <FaPhoneAlt size={24} />
      </a>
      <a
        href="mailto:info@pentafreight.com"
        className="bg-primary text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="Email"
      >
        <FaEnvelope size={24} />
      </a>
    </div>
  )
}

export default StickyContact