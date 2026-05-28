import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPills, FaFlask, FaSolarPanel, FaTshirt, FaCar, FaBox, FaClock, FaGlassMartini, FaMicrochip } from 'react-icons/fa'

const industries = [
  { icon: FaPills, title: 'Pharmaceuticals', desc: 'The pharmaceutical industry requires highly customized supply chain solutions. Our temperature-controlled warehouse ensures seamless end-to-end service, prioritizing transparency and attention to detail for precise and reliable shipments.' },
  { icon: FaFlask, title: 'Chemicals', desc: 'We follow IATA guidelines for chemical imports and exports, offering competitive options. With strong authority relations and continuous monitoring, we ensure a smooth, compliant, and efficient supply chain experience.' },
  { icon: FaTshirt, title: 'Textiles', desc: 'We are sensitive to the tightly controlled consignments and seasonality within the textile industry. We optimize your supply chain through our distribution and consolidation services. Our door-to-door offerings and constant shipment tracking allow you to efficiently monitor your consignments.' },
  { icon: FaSolarPanel, title: 'Energy', desc: 'As an organization we have kept up with the growing consumption of renewable energy. We have supported the transport of cutting edge tools used to generate renewable energy by coming up with creative methods to serve emerging markets.' },
  { icon: FaCar, title: 'Automobile', desc: 'Our adaptable nature allows us to handle inventory of any dimension and value for the automobile industry. We demonstrate the same flexibility by catering to the dynamic market trends of this industry across our global network.' },
  { icon: FaBox, title: 'Packaging', desc: 'The packaging industry needs forwarders with a widespread reach. We are able to offer this through our global partnerships and diverse network of carriers. Our experienced team uses this network to provide you with timely and affordable solutions.' },
  { icon: FaClock, title: 'Time Critical Cargo', desc: 'We leverage strong carrier relations to secure priority pricing while ensuring swift, efficient operations for time-critical cargo.' },
  { icon: FaGlassMartini, title: 'Glassware', desc: 'Our team is acquainted with the extensive reach and distribution network of the glassware industry. We couple our global supply chain knowledge with material handling expertise to ensure your shipments are transported reliably and efficiently.' },
  { icon: FaMicrochip, title: 'Electronics', desc: 'We ensure the safe and efficient transport of electronic goods, protecting sensitive components from damage and delays. Our logistics solutions help businesses meet market demands while optimizing supply chain costs.' },
]

// Orchestrates the automatic sequential drop when the page loads
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18, // Timing separation between each card's drop launch
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    // CRITICAL: Forces all cards to start from the exact same high, centered focal point
    top: "-300px", 
    left: "50%",
    x: "-50%",
    y: 0,
    scale: 0.8,
    rotate: -15
  },
  visible: {
    opacity: 1,
    // Smoothly snaps elements from the shared focal point into their actual grid positions
    top: "0px",
    left: "0%",
    x: "0%",
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 75,   // Heavy pulling force for the long drop down
      damping: 14,     // Creates the elastic, bouncing deck separation effect
      mass: 1.2
    }
  }
}

const Industries = () => {
  return (
    <div className="bg-white text-gray-800 antialiased min-h-screen selection:bg-[#DE7E5D] selection:text-white">
      {/* Header Info Block */}
      <section className="bg-white text-gray-900 py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-gray-900 text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            INDUSTRIES
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Two decades we have been coming up with innovative ways to enable global trade across various industries.
          </p>
        </div>
      </section>

      {/* Falling Deck-to-Grid Section */}
      <section className="py-12 bg-white min-h-[800px]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Parent wrapper that sets up positioning coordinates for the drop */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
          >
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.2 } }}
                className="relative bg-[#E28766] text-white rounded-3xl shadow-lg overflow-hidden flex flex-col justify-between p-8 md:p-10 min-h-[350px] cursor-pointer will-change-transform"
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className="flex items-center justify-start mb-6">
                    <div className="p-3 bg-white/15 rounded-2xl backdrop-blur-sm">
                      <ind.icon className="text-white text-3xl" />
                    </div>
                  </div>
                  
                  {/* Details */}
                  <h3 className="text-2xl font-bold mb-4 tracking-wide">{ind.title}</h3>
                  <p className="text-white/95 text-sm md:text-base font-light leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Footer Block */}
      <section className="bg-[#E28766] py-16 text-white text-center mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-white text-3xl mb-4 font-bold">Tailored Logistics for Every Industry</h2>
          <p className="mb-6 font-light text-white/90">Delivering tailored supply chain solutions to meet the unique needs of industries worldwide.</p>
          <Link to="/contact" className="bg-[#0B2545] hover:bg-[#0B2545]/90 text-white px-8 py-3 rounded-lg font-semibold inline-block transition">Contact Us Today</Link>
        </div>
      </section>
    </div>
  )
}

export default Industries