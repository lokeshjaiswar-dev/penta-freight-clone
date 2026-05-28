import React from 'react'

const BASE = import.meta.env.BASE_URL

const Sticker = () => {
  return (
    <div 
      className="fixed z-50 transition-all duration-300
        /* Mobile & Tablet: Bottom Right Corner */
        bottom-6 right-6 transform-none
        /* Desktop (lg screen and up): Middle Left Edge */
        lg:left-0 lg:top-1/2 lg:bottom-auto lg:right-auto lg:-translate-y-1/2"
    >
      <img 
        src={`${BASE}images/sticker.png`} 
        alt="Contact" 
        className="w-12 h-12 md:w-14 md:h-14 lg:w-10 lg:h-auto object-contain cursor-pointer shadow-lg lg:shadow-none rounded-full hover:scale-110 active:scale-95 transition duration-300" 
      />
    </div>
  )
}

export default Sticker