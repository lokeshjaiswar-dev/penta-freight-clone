import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-2">Mumbai</h4>
            <p className="text-sm text-gray-300">
              902, 'A' Wing, Times Square,<br />
              Andheri-Kurla Road, Marol,<br />
              Andheri (East), Mumbai 400 059<br />
              +91 22-6222-6222
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Ahmedabad</h4>
            <p className="text-sm text-gray-300">
              D21 The Address, True Value,<br />
              West Gate, SG Highway,<br />
              Ahmedabad 380 009<br />
              +91 79-4022-7900
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Bengaluru</h4>
            <p className="text-sm text-gray-300">
              205, 2nd floor,<br />
              Connection point H.A.L Airport,<br />
              Exit Road, Bangalore 560 017<br />
              +91 80-4112-5590
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Chennai</h4>
            <p className="text-sm text-gray-300">
              Flat no.A1, 1st floor,<br />
              No 24 Vembuli Amman koi Street,<br />
              Palavanthangal Chennai-600 114<br />
              +91-44-22241462/1464
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Delhi</h4>
            <p className="text-sm text-gray-300">
              Penta Freight Pvt. Ltd. Khasra No.<br />
              10/1/10/2, 11/5/1, No. 4, Samalkha,<br />
              Old Delhi – Gurgaon Road, Opposite Primary School,<br />
              New Delhi – 110 037<br />
              +91 11-4078-2222
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Hyderabad</h4>
            <p className="text-sm text-gray-300">
              G-27 & 28, Cargo Satellite Building,<br />
              Rajiv Gandhi International Airport,<br />
              Shamshabad 501 218, Telangana, India<br />
              +91 40-2400-4048
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Kolkata</h4>
            <p className="text-sm text-gray-300">
              131, Jangalpur Road, near airport,<br />
              Gate No. 3, Motilal Colony, P.O Rajbari,<br />
              Kolkata 700 081, West Bengal<br />
              +91 33-2514-7089
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">USA – Chicago</h4>
            <p className="text-sm text-gray-300">
              Penta Freight Pvt. Ltd.<br />
              5100 Newport Dr. Suite 4,<br />
              Rolling Meadows, IL 60008 USA<br />
              +040 234 6559 / +224 434 2154
            </p>
            <p className="text-xs text-gray-400 mt-2">Expanded globally, beginning with the USA</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Penta Freight. All Rights Reserved. Developed by Nipralo</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link to="/privacy" className="hover:text-secondary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-secondary">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer