import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPills, FaFlask, FaSolarPanel, FaTshirt, FaCar, FaBox, FaClock, FaGlassMartini, FaMicrochip } from 'react-icons/fa'

const industries = [
  { icon: FaPills, title: 'Pharmaceuticals', desc: 'Temperature-controlled warehouse ensures seamless end-to-end service.', image: '/images/pharma.jpg' },
  { icon: FaFlask, title: 'Chemicals', desc: 'IATA guidelines compliance, strong authority relations.', image: '/images/chemicals.jpg' },
  { icon: FaSolarPanel, title: 'Energy', desc: 'Transport of cutting-edge renewable energy tools.', image: '/images/energy.jpg' },
  { icon: FaTshirt, title: 'Textiles', desc: 'Distribution, consolidation, door-to-door tracking.', image: '/images/textiles.jpg' },
  { icon: FaCar, title: 'Automobile', desc: 'Handles any dimension or value, adaptable to market trends.', image: '/images/automobile.jpg' },
  { icon: FaBox, title: 'Packaging', desc: 'Global partnerships, diverse carrier network.', image: '/images/packaging.jpg' },
  { icon: FaClock, title: 'Time Critical Cargo', desc: 'Priority pricing, swift efficient operations.', image: '/images/time-critical.jpg' },
  { icon: FaGlassMartini, title: 'Glassware', desc: 'Global supply chain + material handling expertise.', image: '/images/glassware.jpg' },
  { icon: FaMicrochip, title: 'Electronics', desc: 'Safe transport of sensitive components.', image: '/images/electronics.jpg' },
]

const Industries = () => {
  const [visible, setVisible] = useState([])
  useEffect(() => {
    const timer = setTimeout(() => setVisible(industries.map((_, i) => i)), 100)
    return () => clearTimeout(timer)
  }, [])

  const cardVariants = {
    hidden: { opacity: 0, y: -100, rotate: -5 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { delay: i * 0.07, type: 'spring', stiffness: 300, damping: 15 }
    })
  }

  return (
    <div>
      <section className="bg-primary text-white py-20 text-center">
        <div className="container-custom">
          <h1 className="text-white text-4xl md:text-5xl mb-4">INDUSTRIES</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">Over the past two decades we have been coming up with innovative ways to enable global trade across various industries.</p>
        </div>
      </section>
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
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
              >
                <img src={ind.image} alt={ind.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <ind.icon className="text-secondary text-3xl mb-2" />
                  <h3 className="text-xl font-bold">{ind.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-secondary py-16 text-white text-center">
        <div className="container-custom">
          <h2 className="text-white text-3xl mb-4">Tailored Logistics for Every Industry</h2>
          <Link to="/contact" className="bg-primary hover:bg-primary/90 px-8 py-3 rounded-lg inline-block">Contact Us Today</Link>
        </div>
      </section>
    </div>
  )
}

export default Industries