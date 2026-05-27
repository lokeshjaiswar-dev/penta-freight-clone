import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlane, FaShip, FaTruck, FaBoxOpen, FaFileAlt, FaWarehouse, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const services = [
  { icon: FaPlane, title: 'Air Freight', desc: "India's leading air freight forwarder. Volume advantage ensures competitive pricing.", tags: ['Speed', 'Efficiency'] },
  { icon: FaShip, title: 'Sea Freight', desc: 'Global sea freight via top shipping lines. FCL/LCL options.', tags: ['Flexibility', 'Cost-Effective'] },
  { icon: FaTruck, title: 'Multi Modal Transport', desc: 'Air, sea, and multimodal with real-time tracking.', tags: ['Integration', 'Visibility'] },
  { icon: FaBoxOpen, title: 'Project Cargo', desc: 'Oversized and breakbulk cargo handling.', tags: ['Precision', 'Security'] },
  { icon: FaFileAlt, title: 'Custom Broking', desc: 'Licensed customs agents with 30+ years experience.', tags: ['Compliance', 'Expertise'] },
  { icon: FaWarehouse, title: 'Transit Warehouse', desc: 'Temperature-controlled, DGR, general cargo zones.', tags: ['Specialized', 'Versatile'] },
]

const testimonials = [
  { quote: "Penta Freight has been a highly valued partner of Lufthansa Cargo for 25 years.", author: "Frank Naeve, VP Asia Pacific" },
  { quote: "We highly regard Penta Freight's professionalism and knowledge.", author: "Makarand Sane, Watson Pharma" },
  { quote: "Excellent service level and professional relationship.", author: "Ryan Veigas, Supply Chain VP" },
]

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => setSlideIndex((prev) => (prev + 1) % testimonials.length), 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {/* Hero with Video Background */}
      <section className="relative h-screen min-h-[600px] flex items-center text-white">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video fails */}
        </video>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="container-custom relative z-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">PENTA Freight</h1>
            <p className="text-xl md:text-2xl mb-6 max-w-2xl">PentaFreight provides reliable logistics solutions, specializing in temperature-sensitive shipments. We ensure safe, on-time delivery worldwide.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/industries" className="btn-primary">Explore Industries</Link>
              <Link to="/pentakuhl" className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-semibold">Learn About Pentakuhl</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-center mb-12">Seamless Solutions for Every Logistics Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
                <s.icon className="text-secondary text-4xl mb-4" />
                <h3 className="text-xl mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{s.desc}</p>
                <div className="flex gap-2"><span className="text-xs bg-accent text-primary px-2 py-1 rounded-full">{s.tags[0]}</span><span className="text-xs bg-accent text-primary px-2 py-1 rounded-full">{s.tags[1]}</span></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom text-center">
          <h2 className="mb-8">Hear From Our Satisfied Clients</h2>
          <div className="relative max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div key={slideIndex} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-gray-700 text-lg italic">"{testimonials[slideIndex].quote}"</p>
                <p className="mt-4 font-semibold text-primary">{testimonials[slideIndex].author}</p>
              </motion.div>
            </AnimatePresence>
            <button onClick={() => setSlideIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full"><FaChevronLeft /></button>
            <button onClick={() => setSlideIndex((prev) => (prev + 1) % testimonials.length)} className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full"><FaChevronRight /></button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16 text-white text-center">
        <div className="container-custom"><h2 className="text-white mb-4">Ready to Move Your Business Forward?</h2><Link to="/contact" className="bg-primary hover:bg-primary/90 px-8 py-3 rounded-lg inline-block">Contact Us Today</Link></div>
      </section>
    </div>
  )
}
export default Home