import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CookieConsent from './CookieConsent'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  )
}

export default Layout