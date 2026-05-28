import React from 'react'

const BASE = import.meta.env.BASE_URL

const Sticker = () => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      <img src={`${BASE}images/sticker.png`} alt="Contact" className="w-10 h-auto cursor-pointer hover:scale-110 transition duration-300" />
    </div>
  )
}

export default Sticker