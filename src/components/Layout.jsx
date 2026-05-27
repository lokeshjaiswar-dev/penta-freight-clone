import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CookieConsent from './CookieConsent'
import Sticker from './Sticker'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <CookieConsent />
      <Sticker />
    </div>
  )
}

export default Layout