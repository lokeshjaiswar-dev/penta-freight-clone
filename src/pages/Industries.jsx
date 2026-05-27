import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPills, FaFlask, FaSolarPanel, FaTshirt, FaCar, FaBox, FaClock, FaGlassMartini, FaMicrochip } from 'react-icons/fa'

const industries = [
  { icon: FaPills, title: 'Pharmaceuticals', desc: 'Temperature-controlled warehouse ensures seamless end-to-end service.' },
  { icon: FaFlask, title: 'Chemicals', desc: 'IATA guidelines compliance, strong authority relations.' },
  { icon: FaSolarPanel, title: 'Energy', desc: 'Transport of cutting-edge renewable energy tools.' },
  { icon: FaTshirt, title: 'Textiles', desc: 'Distribution, consolidation, door-to-door tracking.' },
  { icon: FaCar, title: 'Automobile', desc: 'Handles any dimension or value, adaptable to market trends.' },
  { icon: FaBox, title: 'Packaging', desc: 'Global partnerships, diverse carrier network.' },
  { icon: FaClock, title: 'Time Critical Cargo', desc: 'Priority pricing, swift efficient operations.' },
  { icon: FaGlassMartini, title: 'Glassware', desc: 'Global supply chain + material handling expertise.' },
  { icon: FaMicrochip, title: 'Electronics', desc: 'Safe transport of sensitive components.' },
]

const Industries = () => {
  const [visible, setVisible] = useState([])
  useEffect(() => {
    const timer = setTimeout(() => setVisible(industries.map((_, i) => i)), 100)
    return () => clearTimeout(timer)
  }, [])

  const cardVariants = {
    hidden: { opacity: 0, y: -60, rotate: -5 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { delay: i * 0.07, type: 'spring', stiffness: 300, damping: 15 }
    })
  }

  return (
    <div>
      <section className="bg-primary text-white py-16 text-center"><h1 className="text-white">INDUSTRIES</h1><p className="text-xl max-w-3xl mx-auto mt-4">Over the past two decades we have been coming up with innovative ways to enable global trade across various industries.</p></section>
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                animate={visible.includes(idx) ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white shadow-md rounded-xl p-6 cursor-pointer"
              >
                <ind.icon className="text-secondary text-4xl mb-4" />
                <h3 className="text-xl mb-2">{ind.title}</h3>
                <p className="text-gray-600 text-sm">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-secondary py-16 text-white text-center"><h2 className="text-white">Tailored Logistics for Every Industry</h2><Link to="/contact" className="bg-primary hover:bg-primary/90 px-8 py-3 rounded-lg inline-block mt-4">Contact Us Today</Link></section>
    </div>
  )
}
export default Industries