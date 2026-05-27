import React, { useState, useEffect } from 'react'

const CookieConsent = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) setVisible(true)
  }, [])
  const accept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setVisible(false)
  }
  if (!visible) return null
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-white p-4 shadow-lg z-50 border-t border-white/20">
      <div className="container-custom flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-sm text-center sm:text-left">We use cookies to enhance your experience. Please accept to enjoy the full features of our site.</p>
        <button onClick={accept} className="bg-secondary hover:bg-orange-600 px-6 py-2 rounded-lg">I Accept</button>
      </div>
    </div>
  )
}

export default CookieConsent