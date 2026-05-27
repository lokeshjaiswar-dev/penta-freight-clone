import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div><h3 className="text-xl font-bold mb-3">PENTA Freight</h3><p className="text-gray-300 text-sm">Reliable logistics solutions, specializing in temperature-sensitive shipments worldwide.</p></div>
          <div><h4 className="font-semibold mb-3">Quick Links</h4><ul className="space-y-2 text-sm"><li><Link to="/" className="hover:text-secondary">Home</Link></li><li><Link to="/industries" className="hover:text-secondary">Industries</Link></li><li><Link to="/pentakuhl" className="hover:text-secondary">Pentakuhl</Link></li></ul></div>
          <div><h4 className="font-semibold mb-3">Contact</h4><p className="text-sm text-gray-300">Mumbai: +91 22-6222-6222</p><p className="text-sm text-gray-300">Chicago: +1 224-434-2154</p></div>
          <div><h4 className="font-semibold mb-3">Follow Us</h4><div className="flex gap-4 text-xl"><a href="#" className="hover:text-secondary"><FaFacebook /></a><a href="#" className="hover:text-secondary"><FaTwitter /></a><a href="#" className="hover:text-secondary"><FaLinkedin /></a></div></div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Penta Freight. All Rights Reserved. Developed by Nipralo</p>
          <div className="flex justify-center gap-4 mt-2"><Link to="/privacy" className="hover:text-secondary">Privacy Policy</Link><Link to="/terms" className="hover:text-secondary">Terms and Conditions</Link></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer