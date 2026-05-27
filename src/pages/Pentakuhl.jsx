import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaSnowflake, FaLeaf, FaChartLine, FaShieldAlt, FaQuestionCircle } from 'react-icons/fa'

const features = [
  { icon: FaSnowflake, title: 'Temperature Stability', desc: 'Precise control from -50°C to +25°C' },
  { icon: FaLeaf, title: 'Eco-Friendly', desc: 'Sustainable cooling technology' },
  { icon: FaChartLine, title: 'Real-Time Monitoring', desc: 'Live tracking of conditions' },
  { icon: FaShieldAlt, title: 'Secure Packaging', desc: 'Durable, validated thermal containers' },
]

const faqs = [
  { q: 'What is Penta Kuhl?', a: 'Penta Kuhl is our specialized temperature-controlled packaging solution for sensitive products.' },
  { q: 'How does Penta Kuhl ensure cargo safety?', a: 'We use validated thermal packaging and real-time temperature monitoring.' },
]

const Pentakuhl = () => {
  return (
    <div>
      <section className="relative h-[70vh] min-h-[500px] flex items-center text-white">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/pentakuhl-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="container-custom relative z-20 text-center">
          <motion.h1 initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="text-white text-5xl md:text-7xl font-bold">PentakUHL</motion.h1>
          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl md:text-2xl mt-4">Temperature-Sensitive Products – Ensuring Safe Transport</motion.p>
          <Link to="#faq" className="btn-primary inline-block mt-8">Explore FAQ</Link>
        </div>
      </section>
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2>ABOUT PENTA KUHL</h2>
              <p className="text-gray-700 mb-4">At Pentakuhl, we specialize in durable, effective packaging that maintains temperature stability during transit, protecting your valuable products. Authorized Distributor for Pelican BioThermal™ Products.</p>
              <button className="btn-outline">Read more</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="bg-gray-light p-4 rounded-xl text-center">
                  <f.icon className="text-secondary text-3xl mx-auto mb-2" />
                  <h3 className="font-bold">{f.title}</h3>
                  <p className="text-xs">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="py-16 bg-gray-light">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow-sm">
                <div className="flex gap-3"><FaQuestionCircle className="text-secondary text-xl shrink-0 mt-1" /><div><h3 className="font-semibold text-primary">{faq.q}</h3><p className="text-gray-600 mt-1">{faq.a}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary text-white text-center"><div className="container-custom"><h2 className="text-white">Protecting What Matters Most</h2><Link to="/contact" className="btn-primary inline-block mt-4">Contact Us Today</Link></div></section>
    </div>
  )
}

export default Pentakuhl