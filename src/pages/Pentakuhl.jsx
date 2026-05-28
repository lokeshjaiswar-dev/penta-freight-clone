import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaSnowflake, FaLeaf, FaChartLine, FaShieldAlt, FaQuestionCircle, FaChevronDown } from 'react-icons/fa'

const BASE = import.meta.env.BASE_URL

// Safely formats asset paths using import.meta.env.BASE_URL without risking double slashes
const getAssetPath = (path) => {
  const base = BASE.endsWith('/') ? BASE : `${BASE}/`
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}

const features = [
  { icon: FaSnowflake, title: 'Temperature Stability', desc: 'Precise thermal preservation maintaining critical ranges from -50°C down to +25°C.' },
  { icon: FaLeaf, title: 'Eco-Friendly Systems', desc: 'High-performance reusable configurations reducing waste footprint.' },
  { icon: FaChartLine, title: 'Real-Time Monitoring', desc: 'Continuous visibility tracks internal payload metrics across transit milestones.' },
  { icon: FaShieldAlt, title: 'Validated Security', desc: 'Robust thermal drop-tested configurations adhering to global compliance metrics.' },
]

const seriesGuide = [
  { name: 'SERIES 4', temp: '2°C – 8°C', products: 'Vaccines, Insulin, Biologics', desc: 'Designed for cold-chain medicines requiring strict refrigerated parameters without freezing risk.' },
  { name: 'SERIES 22', temp: '-20°C', products: 'Frozen Vaccines, Plasma', desc: 'Optimized for frozen payloads demanding deep sub-zero thermal protection over extended transit phases.' },
  { name: 'SERIES 20M', temp: '15°C – 25°C', products: 'Controlled Room Temperature (CRT)', desc: 'Maintains ideal ambient storage states shielding chemical compounds from external weather extremes.' },
  { name: 'SERIES 50M', temp: '-50°C', products: 'Ultra-Deep Frozen Assets', desc: 'Engineered for cell lines and advanced pharmaceutical cargo using extreme thermal buffering.' }
]

const faqs = [
  { q: 'What is Penta Kuhl?', a: 'Penta Kuhl is our specialized temperature-controlled supply chain and packaging architecture developed in partnership with Pelican BioThermal™ to safeguard critical medical, biological, and pharmaceutical payloads globally.' },
  { q: 'How does Penta Kuhl ensure cargo safety?', a: 'We utilize state-of-the-art phase change materials (PCM), vacuum insulation panels (VIP), and continuous calibrated temperature data loggers to guarantee zero thermal breaches from dispatch to destination point.' },
  { q: 'What types of cargo can Penta Kuhl handle?', a: 'Our systems handle highly sensitive chemical reactants, life-saving oncology therapeutics, insulin profiles, diagnostic samples, and large-scale bulk pharmaceutical components.' },
]

const AccordionItem = ({ faq, isOpen, toggleOpen }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-4 transition-shadow hover:shadow-md">
      <button 
        onClick={toggleOpen}
        className="w-full p-5 text-left flex justify-between items-center gap-4 bg-white focus:outline-none"
      >
        <div className="flex gap-3 items-center">
          <FaQuestionCircle className="text-secondary text-xl shrink-0 text-[#E28766]" />
          <h3 className="font-bold text-primary text-base md:text-lg text-[#0B2545]">{faq.q}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400 shrink-0"
        >
          <FaChevronDown />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 pt-1 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-50 font-light">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Pentakuhl = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  return (
    <div className="bg-white text-gray-800 antialiased selection:bg-[#DE7E5D] selection:text-white">
      {/* Video Hero Block */}
      <section className="relative h-[75vh] min-h-[550px] flex items-center text-white overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src={getAssetPath('images/pentakuhl-video.mp4')} type="video/mp4" />
          <source src={getAssetPath('pentakuhl-video.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/55 z-10"></div>
        
        <div className="container-custom relative z-20 text-center px-4 w-full">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.6 }} 
            className="text-white text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            PentaKuhl
          </motion.h1>
          <motion.p 
            initial={{ y: 25, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.25, duration: 0.5 }} 
            className="text-lg md:text-2xl mt-4 text-gray-200 font-light max-w-3xl mx-auto"
          >
            Advanced Temperature‑Sensitive Packaging – Preserving Product Integrity Nationwide
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a href="#faq" className="mt-8 bg-[#E28766] hover:bg-[#D5714E] text-white px-8 py-3.5 rounded-xl font-semibold inline-block transition shadow-lg transform active:scale-95">
              Explore Product FAQ
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section & Strategic Alignment */}
      <section className="py-24 bg-white">
        <div className="container-custom px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-[#E28766] font-bold tracking-widest text-xs uppercase block mb-2">Cool Chain Infrastructure</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2545] mb-6">ABOUT PENTA KUHL</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 font-light">
                At Pentakuhl, we engineer modular thermal packaging systems that eliminate risks associated with cold-chain breakdowns during variable transit cycles. Our certified asset management secures safe distribution lines for pharmaceuticals, biomaterials, and sensitive lab reagents.
              </p>
              
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-[#E28766] p-4 rounded-r-xl">
                <span className="font-semibold text-[#0B2545] text-sm md:text-base block">
                  Authorized National Distributor for Pelican BioThermal™ Products
                </span>
              </div>
            </div>

            {/* Quick Stats/Features Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ delay: i * 0.1, duration: 0.5 }} 
                  viewport={{ once: true, amount: 0.2 }} 
                  className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:shadow-md transition duration-300"
                >
                  <div className="p-3 bg-[#E28766]/10 rounded-xl w-fit mb-4">
                    <f.icon className="text-[#E28766] text-2xl" />
                  </div>
                  <h3 className="font-bold text-[#0B2545] text-lg mb-1">{f.title}</h3>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parcel vs Pallet Shipper Classification - Redesigned to exactly match Screenshot 2026-05-28 150219.png */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container-custom px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-stretch">
            
            {/* Left Card: Parcel Shippers */}
            <div className="flex flex-col items-center justify-between text-center bg-white p-2">
              <div className="w-full">
                <h2 className="text-4xl md:text-5xl text-[#111111] font-normal tracking-wide mb-6">
                  Parcel Shippers
                </h2>
                <p className="text-gray-700 text-base md:text-lg max-w-md mx-auto leading-relaxed mb-10 font-normal">
                  We understand the unique challenges faced by parcel shippers and offer tailored solutions for seamless shipping.
                </p>

                {/* Single Use Row */}
                <div className="flex items-stretch border border-gray-200/70 rounded shadow-sm overflow-hidden mb-6 h-20 bg-white">
                  <div className="w-1/3 flex items-center justify-start pl-6 bg-white">
                    <span className="text-xl md:text-2xl font-medium text-[#111111]">Single Use</span>
                  </div>
                  <div className="w-1/3 flex items-center justify-center border-l border-gray-200/70 p-3">
                    <img src={getAssetPath('images/coolguard-pcm.png')} alt="CoolGuard PCM" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="w-1/3 flex items-center justify-center border-l border-gray-200/70 p-3">
                    <img src={getAssetPath('images/coolguard-advance.png')} alt="CoolGuard Advance" className="max-h-full max-w-full object-contain" />
                  </div>
                </div>

                {/* Reusable Row */}
                <div className="flex items-stretch border border-gray-200/70 rounded shadow-sm overflow-hidden mb-12 h-20 bg-white">
                  <div className="w-1/3 flex items-center justify-start pl-6 bg-white">
                    <span className="text-xl md:text-2xl font-medium text-[#111111]">Reusable</span>
                  </div>
                  <div className="w-2/3 flex items-center justify-center border-l border-gray-200/70 p-4">
                    <img src={getAssetPath('images/credo-cube.png')} alt="Crēdo Cube" className="max-h-full max-w-xs object-contain" />
                  </div>
                </div>
              </div>

              <Link to="/parcel-shippers" className="bg-[#ED7233] hover:bg-[#de6021] text-white px-8 py-3 rounded shadow-[0_4px_12px_rgba(237,114,51,0.3)] font-medium text-sm md:text-base tracking-wide transition duration-200 active:scale-95">
                Parcel Shippers
              </Link>
            </div>

            {/* Right Card: Pallet Shippers */}
            <div className="flex flex-col items-center justify-between text-center bg-white p-2 md:border-l md:border-gray-100 md:pl-16">
              <div className="w-full">
                <h2 className="text-4xl md:text-5xl text-[#111111] font-normal tracking-wide mb-6">
                  Pallet Shippers
                </h2>
                <p className="text-gray-700 text-base md:text-lg max-w-md mx-auto leading-relaxed mb-10 font-normal">
                  We provide tailored services for pallet shippers, ensuring your cargo arrives safely and efficiently.
                </p>

                {/* Single Use Row */}
                <div className="flex items-stretch border border-gray-200/70 rounded shadow-sm overflow-hidden mb-6 h-20 bg-white">
                  <div className="w-1/3 flex items-center justify-start pl-6 bg-white">
                    <span className="text-xl md:text-2xl font-medium text-[#111111]">Single Use</span>
                  </div>
                  <div className="w-1/3 flex items-center justify-center border-l border-gray-200/70 p-3">
                    <img src={getAssetPath('images/coolpall-vertos.png')} alt="CoolPall Vertos" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="w-1/3 flex items-center justify-center border-l border-gray-200/70 p-3">
                    <img src={getAssetPath('images/coolpall-vertos-advance.png')} alt="CoolPall Vertos Advance" className="max-h-full max-w-full object-contain" />
                  </div>
                </div>

                {/* Reusable Row */}
                <div className="flex items-stretch border border-gray-200/70 rounded shadow-sm overflow-hidden mb-12 h-20 bg-white">
                  <div className="w-1/3 flex items-center justify-start pl-6 bg-white">
                    <span className="text-xl md:text-2xl font-medium text-[#111111]">Reusable</span>
                  </div>
                  <div className="w-1/3 flex items-center justify-center border-l border-gray-200/70 p-3">
                    <img src={getAssetPath('images/credo-xtreme.png')} alt="Crēdo Xtreme" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="w-1/3 flex items-center justify-center border-l border-gray-200/70 p-3">
                    <img src={getAssetPath('images/credo-cargo.png')} alt="Crēdo Cargo" className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
              </div>

              <Link to="/pallet-shippers" className="bg-[#ED7233] hover:bg-[#de6021] text-white px-8 py-3 rounded shadow-[0_4px_12px_rgba(237,114,51,0.3)] font-medium text-sm md:text-base tracking-wide transition duration-200 active:scale-95">
                Pallet Shippers
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Series Grid Component */}
      <section className="py-24 bg-white">
        <div className="container-custom px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2545] mb-3">Thermal Series Guide</h2>
            <p className="text-gray-500 font-light">Cross-reference target pharmaceutical storage parameters with specialized pre-conditioned packaging structures.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seriesGuide.map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -6 }} 
                className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col justify-between items-center text-center h-full min-h-[250px]"
              >
                <div className="w-full flex-grow flex flex-col justify-center items-center">
                  <h3 className="text-[#E28766] text-xs font-bold tracking-widest uppercase mb-1">
                    {item.name}
                  </h3>
                  <div className="text-3xl font-black text-[#0B2545] my-2 tracking-tight">
                    {item.temp}
                  </div>
                  
                  <div className="w-full max-w-[90%] bg-gray-50 border border-gray-100 rounded-xl py-2 px-3 my-3">
                    <span className="text-xs font-bold text-[#0B2545]/90 tracking-wide block">
                      {item.products}
                    </span>
                  </div>
                </div>

                <div className="mt-2 w-full">
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion FAQ Grid */}
      <section id="faq" className="py-24 bg-gray-50 border-t border-gray-100 scroll-mt-10">
        <div className="container-custom max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2545] mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-500 font-light">Get immediate insights into pre-conditioning protocols, compliance metrics, and asset return pathways.</p>
          </div>
          
          <div className="mt-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                faq={faq} 
                isOpen={openFaqIndex === i} 
                toggleOpen={() => setOpenFaqIndex(openFaqIndex === i ? null : i)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA Unit */}
      <section className="py-20 bg-[#0B2545] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
        <div className="container-custom px-6 relative z-10">
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4">Protecting What Matters Most</h2>
          <p className="mb-8 text-gray-300 max-w-2xl mx-auto font-light text-base md:text-lg">
            Consult our cold chain route configuration team to build a verified secure distribution blueprint for your chemical and therapeutic operations.
          </p>
          <Link to="/contact" className="bg-[#E28766] hover:bg-[#D5714E] text-white px-10 py-4 rounded-xl font-semibold inline-block transition shadow-lg transform active:scale-95">
            Contact Our Cold Chain Experts
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Pentakuhl