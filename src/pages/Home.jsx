import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FaPlane, FaShip, FaTruck, FaBoxOpen, FaFileAlt, FaWarehouse, FaChevronLeft, FaChevronRight, FaTrophy } from 'react-icons/fa'

const BASE = import.meta.env.BASE_URL

const services = [
  { icon: FaPlane, title: 'Air Freight', desc: "We are India's leading air freight forwarder, offering complete import and export logistics. Our volume ensures competitive pricing and guaranteed space.", image: `${BASE}images/air-freight.jpeg`, tags: ['Speed', 'Efficiency', 'Reliability', 'Affordability'], imageLeft: true },
  { icon: FaShip, title: 'Sea Freight', desc: "We offer global sea freight services via top shipping lines. Our team understands your products, transit needs, and budget.", image: `${BASE}images/sea-freight.jpeg`, tags: ['Flexibility', 'Cost-Effective', 'Scalability'], imageLeft: false },
  { icon: FaTruck, title: 'Multi Modal Transport', desc: 'Air, sea, and multimodal transport with real-time cargo tracking. We streamline your supply chain as your single point of contact.', image: `${BASE}images/multimodal.jpg`, tags: ['Integration', 'Visibility', 'Convenience'], imageLeft: true },
  { icon: FaBoxOpen, title: 'Project Cargo', desc: 'Oversized and breakbulk cargo handling – open tops, flat racks, flatbeds. We handle logistics, clearance, and oversized cargo with expertise.', image: `${BASE}images/project-cargo.jpg`, tags: ['Precision', 'Security', 'Oversized'], imageLeft: false },
  { icon: FaFileAlt, title: 'Custom Broking', desc: 'Licensed customs agents with 30+ years of experience. Strong ties with authorities, handling all clearance challenges.', image: `${BASE}images/customs.jpg`, tags: ['Compliance', 'Expertise', 'Speed'], imageLeft: true },
  { icon: FaWarehouse, title: 'Transit Warehouse', desc: 'Temperature-controlled (15-25°C, 2-8°C), DGR, general cargo zones. Specialized packaging, palletizing, and nationwide reefer/general trucks.', image: `${BASE}images/warehouse.jpg`, tags: ['Specialized', 'Versatile', 'Nationwide'], imageLeft: false },
]

const achievements = [
  { label: 'Strategic Domestic Offices', value: 7, suffix: '+' },
  { label: 'Global Presence', value: 1, suffix: ' (USA)' },
  { label: 'Logistics Experts', value: 200, suffix: '+' },
  { label: 'Awards & Accolades', value: 50, suffix: '+' },
]

const testimonials = [
  { quote: "Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. They always stand by their commitment – a meaningful difference to our business.", author: "Frank Naeve, Vice President Asia Pacific, Lufthansa Cargo" },
  { quote: "We highly regard Penta Freight's professionalism and knowledge. For about two decades we have been satisfied by the flexible, reliable and trustworthy service.", author: "Makarand Sane, General Manager Head-Export Logistics, Watson Pharmaceuticals" },
  { quote: "Penta Freight has been one of our export LSP's for several years. Excellent service level and professional relationship.", author: "Ryan Veigas, Vice President - Supply Chain & Procurement" },
]

const certifications = [
  `${BASE}images/cert-aon.png`, `${BASE}images/cert-bchaa.png`, `${BASE}images/cert-aeo.png`, `${BASE}images/cert-ffi.png`,
  `${BASE}images/cert-fiata.png`, `${BASE}images/cert-wca.png`, `${BASE}images/cert-pharma-aero.png`, `${BASE}images/cert-mto.png`
]

const awards = [
  { name: 'Emirates SkyCargo', year: 'Top Cargo Agents, 2016/17', image: `${BASE}images/award-1.jpeg` },
  { name: 'Delta Air Lines', year: 'Top Revenue Performance, 2002', image: `${BASE}images/award-2.jpeg` },
  { name: 'MASKargo', year: 'Mega Tonners, 2006/07', image: `${BASE}images/award-3.jpeg` },
  { name: 'CONCOR', year: 'CONCOR Exim Star, 2003/04', image: `${BASE}images/award-4.jpeg` },
  { name: 'Air France', year: 'Meritorious Performance, 1999/2000', image: `${BASE}images/award-5.jpeg` },
  { name: 'Finnair Cargo', year: 'Top Performance, 2008', image: `${BASE}images/award-6.jpeg` },
  { name: 'IAG Cargo', year: 'Significant Support, 2007', image: `${BASE}images/award-7.jpeg` },
  { name: 'STAT Trade Times', year: 'International Award Winner, 2018', image: `${BASE}images/award-8.jpeg` },
]

const ServiceCard = ({ service, idx, total, progress }) => {
  const cardRef = useRef(null)
  const start = idx / total
  const end = 1
  const scale = useTransform(progress, [start, end], [1, 1 - (total - idx) * 0.015])

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        top: `calc(12% + ${idx * 32}px)`,
        zIndex: idx,
      }}
      className="sticky bg-white rounded-3xl shadow-xl overflow-hidden mb-16 w-full border border-gray-100 origin-top will-change-transform"
    >
      <div className={`flex flex-col lg:flex-row ${service.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        <div className="w-full lg:w-1/2 h-64 lg:h-[420px] overflow-hidden relative group">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out" />
          <div className="absolute inset-0 bg-[#0B2545]/10 group-hover:bg-transparent transition duration-500" />
        </div>
        <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center bg-white">
          <div className="p-3 bg-[#E28766]/10 rounded-2xl w-fit mb-4">
            <service.icon className="text-[#E28766] text-3xl" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-extrabold mb-4 text-[#0B2545] tracking-tight">{service.title}</h3>
          <p className="text-gray-600 text-sm lg:text-base font-light leading-relaxed mb-6">{service.desc}</p>
          <div className="flex flex-wrap gap-2">
            {service.tags.map(tag => (
              <span key={tag} className="text-xs bg-gray-50 border border-gray-100 text-[#0B2545] px-3 py-1.5 rounded-full font-medium">{tag}</span>
            ))}
          </div>
          <Link to="/services" className="text-[#E28766] font-bold mt-8 text-left hover:text-[#d37452] flex items-center gap-2 transition w-fit group">
            Read Detailed Profile <span className="transform group-hover:translate-x-1 transition">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [counters, setCounters] = useState(achievements.map(() => 0))
  
  const achievementsRef = useRef(null)
  const isAchievementsInView = useInView(achievementsRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isAchievementsInView) {
      achievements.forEach((item, idx) => {
        let start = 0
        const end = item.value
        const duration = 2000 
        const stepTime = 30
        const totalSteps = duration / stepTime
        const incrementValue = end / totalSteps

        const timer = setInterval(() => {
          start += incrementValue
          if (start >= end) {
            clearInterval(timer)
            start = end
          }
          setCounters(prev => {
            const updated = [...prev]
            updated[idx] = Math.floor(start)
            return updated
          })
        }, stepTime)
      })
    }
  }, [isAchievementsInView])

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setSlideIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const handlePrevSlide = () => {
    setDirection(-1)
    setSlideIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNextSlide = () => {
    setDirection(1)
    setSlideIndex(prev => (prev + 1) % testimonials.length)
  }

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0 })
  }

  return (
    <div className="bg-white text-gray-800 antialiased selection:bg-[#DE7E5D] selection:text-white">
      
      {/* Hero Video */}
      <section className="relative h-screen min-h-[600px] flex items-center text-white overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src={`${BASE}hero-video.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35 z-10"></div>
        <div className="container-custom relative z-20 px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          </motion.div>
        </div>
      </section>

      {/* Plane Corporate Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12">
            <div className="shrink-0 lg:w-1/4">
              <span className="text-[#E28766] font-bold text-xs uppercase tracking-widest block border-b border-[#E28766] pb-2 w-fit">
                ABOUT US
              </span>
              <h4 className="text-xs font-bold text-[#0B2545] tracking-widest uppercase mt-3">
                PENTA FREIGHT
              </h4>
            </div>
            <div className="lg:w-3/4">
              <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
                Penta Freight provides reliable <span className="text-[#0B2545] font-semibold">logistics solutions</span>, specializing in temperature-sensitive shipments. We ensure safe, <span className="text-[#0B2545] font-semibold">on-time delivery</span> worldwide. Trust us for seamless supply chain management.
              </p>
            </div>
          </div>
          
          {/* Full Width Clean View Plane Banner */}
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl relative h-[300px] md:h-[500px]">
            <img 
              src={`${BASE}images/plane-banner.jpeg`} 
              alt="Penta Freight Aviation Transport Systems" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center max-w-3xl mx-auto px-6">
          <span className="text-[#E28766] font-bold text-xs uppercase tracking-widest block mb-2">Core Foundations</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight mb-6">Our Philosophy</h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light">
            Customer satisfaction drives everything we do. Every shipment is a promise, and we deliver it with precision, care, and professionalism. With expert resources, we ensure safe, timely transport, building lasting partnerships founded on trust and excellence.
          </p>
        </div>
      </section>

      {/* Stacking Services Section */}
      <section ref={containerRef} className="relative py-24 bg-gray-50 border-y border-gray-100">
        <div className="container-custom px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#0B2545] tracking-tight">Capabilities & Solutions</h2>
            <p className="text-gray-500 font-light">Tailored multi-modal pathways matching asset security profiles with cost-optimal routing metrics.</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto flex flex-col items-center">
            {services.map((service, idx) => (
              <ServiceCard 
                key={idx} 
                service={service} 
                idx={idx} 
                total={services.length} 
                progress={scrollYProgress} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white">
        <div className="container-custom px-6">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight mb-16">Why Choose Penta Freight</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#0B2545]">Comprehensive Solutions</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">Full-spectrum logistics services including air, sea, and multimodal transport for seamless handling of your cargo.</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#0B2545]">Expertise and Experience</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">Over 30+ years of experience with skilled customs agents ensuring accurate clearance and secure delivery.</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#0B2545]">State-of-the-Art Facilities</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">Advanced transit warehouse with specialized storage and a fleet of reefer and general trucks for efficient nationwide transport.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={achievementsRef} className="py-20 bg-[#0B2545] text-white">
        <div className="container-custom text-center px-6">
          <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Our Achievements</h2>
          <p className="text-gray-300 font-light max-w-xl mx-auto mb-16">Over three decades of global distribution excellence verified by compliance parameters.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {achievements.map((item, idx) => (
              <div key={idx} className="p-4">
                <div className="text-4xl md:text-5xl font-black text-[#E28766] tracking-tight">
                  {counters[idx]}{item.suffix}
                </div>
                <div className="text-xs md:text-sm text-gray-300 font-light mt-3 uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Smooth Slider */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom px-6">
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight mb-16">Global Trust Index</h2>
            <div className="relative min-h-[220px] md:min-h-[160px] flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={slideIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="w-full absolute"
                >
                  <p className="text-gray-600 text-lg md:text-xl italic font-light leading-relaxed">"{testimonials[slideIndex].quote}"</p>
                  <p className="mt-6 font-bold text-[#0B2545] tracking-wide text-sm md:text-base">— {testimonials[slideIndex].author}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex justify-center gap-4 mt-8 relative z-20">
              <button onClick={handlePrevSlide} className="bg-gray-50 border border-gray-200 text-[#0B2545] p-3.5 rounded-full hover:bg-[#0B2545] hover:text-white transition duration-300"><FaChevronLeft size={14} /></button>
              <button onClick={handleNextSlide} className="bg-gray-50 border border-gray-200 text-[#0B2545] p-3.5 rounded-full hover:bg-[#0B2545] hover:text-white transition duration-300"><FaChevronRight size={14} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Dynamic Card Carousel - Centered & Loop Optimized */}
      <section className="py-20 bg-[#2D3E4E] relative overflow-hidden">
        {/* Subtle wavy background overlay lines effect to replicate image context */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="w-full px-6 text-center relative z-10">
          <h2 className="text-[#E28766] text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Certifications</h2>
          <p className="text-gray-300 font-light max-w-2xl mx-auto mb-14 text-sm md:text-base">
            Certified excellence, ensuring compliance, quality, and global logistics reliability.
          </p>
          
          {/* Outer track wrapper containing a centered perspective */}
          <div className="relative w-full overflow-hidden py-4 flex justify-center items-center">
            <motion.div 
              className="flex gap-6 shrink-0 justify-center items-center"
              animate={{ x: [0, -1968] }} // Adjusted track translate vector match total list offsets dynamically
              transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            >
              {/* Multiplying instances slightly to cover empty gaps in large monitors and center perfectly */}
              {[...certifications, ...certifications, ...certifications].map((cert, i) => (
                <div 
                  key={i} 
                  className="w-52 h-52 sm:w-60 sm:h-60 bg-white rounded-2xl shadow-md p-6 flex items-center justify-center shrink-0 transform hover:scale-[1.02] transition duration-300 border border-white/10 select-none"
                >
                  <img 
                    src={cert} 
                    alt="Penta Freight official credential badge" 
                    className="max-h-full max-w-full object-contain filter contrast-[1.05]" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `<div class="text-[#0B2545]/30 font-bold text-xs tracking-wider uppercase">Penta Certified</div>`;
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards & Accolades Section */}
      <section className="py-24 bg-white">
        <div className="container-custom px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#E28766] font-bold text-xs uppercase tracking-widest block mb-2">Performance Standards</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">Awards & Accolades</h2>
            <p className="text-gray-500 font-light mt-2">Recognized globally by top tier commercial air carriers and cargo authorities.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col justify-between items-center text-center">
                
                <div className="w-full h-24 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 mb-5 flex items-center justify-center p-1 group-hover:bg-white transition">
                  <img 
                    src={award.image} 
                    alt={`${award.name} official award seal`}
                    className="max-h-full max-w-full object-contain rounded-lg transition duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `<div class="text-[#0B2545]/40 font-black text-xs tracking-wider uppercase">Penta Excellence</div>`;
                    }}
                  />
                </div>

                <div className="flex-grow flex flex-col justify-center">
                  <div className="p-1.5 bg-[#E28766]/10 rounded-full w-fit mx-auto mb-2">
                    <FaTrophy className="text-[#E28766] text-xs" />
                  </div>
                  <h3 className="font-extrabold text-[#0B2545] text-base leading-tight">{award.name}</h3>
                  <p className="text-xs text-gray-400 font-medium mt-1 uppercase tracking-wider">{award.year}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footprint Map */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container-custom text-center px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight mb-4">Our Global Footprint</h2>
          <p className="text-gray-500 font-light max-w-md mx-auto mb-12">Seamless intercontinental tracking routes routing cargo safely through critical cross-docks.</p>
          <div className="w-full rounded-3xl shadow-md border border-gray-200/60 overflow-hidden bg-white p-2">
            <img src={`${BASE}images/global-impact.jpeg`} alt="Global Cargo Footprint Map" className="w-full h-auto object-cover rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Final Action Call */}
      <section className="bg-[#E28766] py-20 text-white text-center relative overflow-hidden">
        <div className="container-custom px-6 relative z-10">
          <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Ready to Move Your Business Forward?</h2>
          <p className="mb-8 text-white/90 font-light text-base md:text-lg max-w-xl mx-auto">Connect with our route configuration technicians to request custom freight logistics modeling.</p>
          <Link to="/contact" className="bg-[#0B2545] hover:bg-[#061426] text-white px-10 py-4 rounded-xl font-semibold inline-block transition shadow-lg transform active:scale-95">
            Contact Our Technicians
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home