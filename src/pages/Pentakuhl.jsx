import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaSnowflake, FaLeaf, FaChartLine, FaShieldAlt, FaBoxes, FaPallet, FaQuestionCircle } from 'react-icons/fa'

const series = [
  { name: 'SERIES4', temp: '2°C – 8°C', ideal: 'Vaccines, insulin, biologics' },
  { name: 'SERIES22', temp: '-20°C', ideal: 'Frozen vaccines and biologics' },
  { name: 'SERIES20M', temp: '15°C – 25°C', ideal: 'Medicines, cosmetics' },
  { name: 'SERIES50M', temp: '-50°C', ideal: 'Advanced biologics' },
]

const features = [
  { icon: FaSnowflake, title: 'Temperature Stability', desc: '-50°C to +25°C' },
  { icon: FaLeaf, title: 'Eco-Friendly', desc: 'Sustainable cooling' },
  { icon: FaChartLine, title: 'Real-Time Monitoring', desc: 'Live tracking' },
  { icon: FaShieldAlt, title: 'Secure Packaging', desc: 'Durable, validated' },
]

const Pentakuhl = () => {
  return (
    <div>
      {/* Video Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center text-white">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/pentakuhl-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="container-custom relative z-20 text-center">
          <motion.h1 initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="text-white text-6xl md:text-7xl">PentakUHL</motion.h1>
          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl md:text-2xl mt-4">Temperature-Sensitive Products – Ensuring Safe Transport</motion.p>
          <Link to="#faq" className="btn-primary inline-block mt-6">Explore FAQ</Link>
        </div>
      </section>

      {/* About section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div><h2>ABOUT PENTA KUHL</h2><p className="text-gray-700">At Pentakuhl, we specialize in durable, effective packaging that maintains temperature stability during transit, protecting your valuable products. Authorized Distributor for Pelican BioThermal™ Products.</p><button className="btn-outline mt-4">Read more</button></div>
            <div className="grid grid-cols-2 gap-4">{features.map((f, i) => (<motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i*0.1 }} className="bg-gray-light p-4 rounded-xl text-center"><f.icon className="text-secondary text-3xl mx-auto"/><h3 className="font-bold">{f.title}</h3><p className="text-xs">{f.desc}</p></motion.div>))}</div>
          </div>
        </div>
      </section>

      {/* Series Guide */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom text-center"><h2>Series Guide</h2><div className="grid md:grid-cols-4 gap-6 mt-8">{series.map((s, i) => (<motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-5 rounded-xl shadow"><h3 className="text-secondary text-xl">{s.name}</h3><div className="text-2xl font-bold">{s.temp}</div><p className="text-sm mt-2">{s.ideal}</p></motion.div>))}</div></div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center"><h2 className="text-white">Protecting What Matters Most</h2><Link to="/contact" className="btn-primary inline-block mt-4">Contact Us Today</Link></section>
    </div>
  )
}
export default Pentakuhl