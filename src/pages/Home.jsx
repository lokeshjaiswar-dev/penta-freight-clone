import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { FaPlane, FaShip, FaTruck, FaBoxOpen, FaFileAlt, FaWarehouse, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// Service data – alternating image position
const services = [
  { icon: FaPlane, title: 'Air Freight', desc: "We are India's leading air freight forwarder, offering complete import and export logistics. Our volume advantage ensures competitive pricing and guaranteed space. Our expert route planners optimize transit, carrier selection, and cargo handling. We reduce costs and transit time with on-demand pickup, drop-off, and warehousing.", image: '/images/air-freight.jpg', tags: ['Speed', 'Efficiency', 'Reliability', 'Affordability'], imageLeft: true },
  { icon: FaShip, title: 'Sea Freight', desc: "We offer global sea freight services via top shipping lines. Our team understands your products, transit needs, and budget. With decades of experience, we plan, monitor, and manage shipments, ensuring compliance. We provide flexible FCL scheduling and cost-efficient LCL options. On-demand pickup, drop-off, and warehousing help cut costs and transit time.", image: '/images/sea-freight.jpg', tags: ['Flexibility', 'Cost-Effective', 'Scalability'], imageLeft: false },
  { icon: FaTruck, title: 'Multi Modal Transport', desc: 'Air, sea, and multimodal transport with real-time cargo tracking. We streamline your supply chain as your single point of contact.', image: '/images/multimodal.jpg', tags: ['Integration', 'Visibility', 'Convenience'], imageLeft: true },
  { icon: FaBoxOpen, title: 'Project Cargo', desc: 'Oversized and breakbulk cargo handling – open tops, flat racks, flatbeds. We handle logistics, clearance, and oversized cargo with expertise.', image: '/images/project-cargo.jpg', tags: ['Precision', 'Security', 'Oversized'], imageLeft: false },
  { icon: FaFileAlt, title: 'Custom Broking', desc: 'Licensed customs agents with 30+ years of experience. Strong ties with authorities, handling all clearance challenges.', image: '/images/customs.jpg', tags: ['Compliance', 'Expertise', 'Speed'], imageLeft: true },
  { icon: FaWarehouse, title: 'Transit Warehouse', desc: 'Temperature-controlled (15-25°C, 2-8°C), DGR, general cargo zones. Specialized packaging, palletizing, and nationwide reefer/general trucks.', image: '/images/warehouse.jpg', tags: ['Specialized', 'Versatile', 'Nationwide'], imageLeft: false },
]

const achievements = [
  { label: 'Strategic Domestic Offices', value: 7, suffix: '+' },
  { label: 'Global presence', value: 1, suffix: ' (USA)' },
  { label: 'Logistics Experts', value: 200, suffix: '+' },
  { label: 'Awards & Accolades', value: 50, suffix: '+' },
]

const testimonials = [
  { quote: "Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. They always stand by their commitment – a meaningful difference to our business.", author: "Frank Naeve, Vice President Asia Pacific, Lufthansa Cargo" },
  { quote: "We highly regard Penta Freight's professionalism and knowledge. For about two decades we have been satisfied by the flexible, reliable and trustworthy service.", author: "Makarand Sane, General Manager Head-Export Logistics, Watson Pharmaceuticals" },
  { quote: "Penta Freight has been one of our export LSP's for several years. Besides having strong relationships with airlines to obtain competitive rates, they get things done in a compliant manner. Excellent service level and professional relationship.", author: "Ryan Veigas, Vice President - Supply Chain & Procurement" },
]

const certifications = [
  '/images/cert-aeo.png', '/images/cert-iso.png', '/images/cert-iata.png', '/images/cert-gdp.png',
  '/images/cert-indo-italian.png', '/images/cert-wca.png', '/images/cert-interglobal.png', '/images/cert-akzali.png'
]

const awards = [
  { name: 'Emirates SkyCargo', year: 'Top Cargo Agents, 2016/17' },
  { name: 'Delta Air Lines', year: 'Top Revenue Performance, 2002' },
  { name: 'MASKargo', year: 'Mega Tonners, 2006/07' },
  { name: 'CONCOR', year: 'CONCOR Exim Star, 2003/04' },
  { name: 'Air France', year: 'Meritorious Performance, 1999/2000' },
  { name: 'Finnair Cargo', year: 'Top Performance, 2008' },
  { name: 'IAG Cargo', year: 'Significant Support, 2007' },
  { name: 'STAT Trade Times', year: 'International Award Winner, 2018' },
]

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [counters, setCounters] = useState(achievements.map(() => 0))
  const achievementsRef = useRef(null)
  const isInView = useInView(achievementsRef, { once: true, amount: 0.3 })

  // Count-up effect
  useEffect(() => {
    if (isInView) {
      achievements.forEach((item, idx) => {
        let start = 0
        const end = item.value
        const duration = 2000
        const stepTime = 20
        const steps = duration / stepTime
        const increment = end / steps
        let current = start
        const timer = setInterval(() => {
          current += increment
          if (current >= end) {
            current = end
            clearInterval(timer)
          }
          setCounters(prev => {
            const newArr = [...prev]
            newArr[idx] = Math.floor(current)
            return newArr
          })
        }, stepTime)
      })
    }
  }, [isInView])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => setSlideIndex((prev) => (prev + 1) % testimonials.length), 5000)
    return () => clearInterval(interval)
  }, [])

  // Overlapping cards animation
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Create transforms for each card (6 cards)
  const transforms = []
  const opacities = []
  for (let i = 0; i < services.length; i++) {
    const start = i / services.length
    const end = (i + 1) / services.length
    transforms.push(useTransform(scrollYProgress, [start, end], [80, 0]))
    opacities.push(useTransform(scrollYProgress, [start, end], [0, 1]))
  }

  return (
    <div>
      {/* 1. Hero Video */}
      <section className="relative h-screen min-h-[600px] flex items-center text-white overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="container-custom relative z-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">PENTA Freight</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 max-w-2xl">PentaFreight provides reliable logistics solutions, specializing in temperature‑sensitive shipments. We ensure safe, on‑time delivery worldwide. Trust us for seamless supply chain management.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/industries" className="btn-primary">Explore Industries</Link>
              <Link to="/pentakuhl" className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-semibold transition">Learn About Pentakuhl</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Banner Image with Text (Plane Banner) */}
      <div className="container-custom -mt-16 relative z-30">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <img src="/images/plane-banner.jpg" alt="Air Freight Excellence" className="w-full md:w-1/2 h-64 object-cover" />
            <div className="p-8 md:w-1/2">
              <h3 className="text-2xl font-bold text-primary">Air Freight Excellence</h3>
              <p className="text-gray-600 mt-2">We are India's leading air freight forwarder, offering complete import and export logistics. Our volume advantage ensures competitive pricing and guaranteed space.</p>
              <Link to="/services" className="text-secondary font-semibold mt-4 inline-block hover:underline">Read More →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Our Philosophy */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2>Our Philosophy</h2>
          <p className="text-gray-700 text-lg">Customer satisfaction drives everything we do. Every shipment is a promise, and we deliver it with precision, care, and professionalism. With expert resources, we ensure safe, timely transport, building lasting partnerships founded on trust and excellence.</p>
          <button className="btn-outline mt-6">Read more</button>
        </div>
      </section>

      {/* 4. Overlapping Services Section */}
      <div ref={containerRef} className="relative py-16 bg-white" style={{ minHeight: `${services.length * 100}vh` }}>
        <div className="sticky top-24 container-custom">
          <h2 className="text-center mb-4">Services</h2>
          <p className="text-center text-gray-600 mb-12">Seamless Solutions for Every Logistics Need – Tailored logistics solutions for timely, cost-effective deliveries across air, sea, and multimodal transport.</p>
          <div className="relative max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                style={{ y: transforms[idx], opacity: opacities[idx] }}
                className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
              >
                <div className={`flex flex-col md:flex-row ${service.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <img src={service.image} alt={service.title} className="w-full md:w-1/2 h-80 object-cover" />
                  <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    <service.icon className="text-secondary text-4xl mb-3" />
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.tags.map(tag => (
                        <span key={tag} className="text-sm bg-accent text-primary px-3 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <button className="text-secondary font-semibold mt-4 text-left hover:underline">Read More →</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Why Choose Penta Freight */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <h2 className="text-center mb-12">Why choose Penta Freight</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-bold mb-3">Comprehensive Solutions</h3>
              <p className="text-gray-600">Full-spectrum logistics services including air, sea, and multimodal transport for seamless handling of your cargo.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-bold mb-3">Expertise and Experience</h3>
              <p className="text-gray-600">Over 30+ years of experience with skilled customs agents ensuring accurate clearance and secure delivery.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-bold mb-3">State-of-the-Art Facilities</h3>
              <p className="text-gray-600">Advanced transit warehouse with specialized storage and a fleet of reefer and general trucks for efficient nationwide transport.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Achievements with Counter */}
      <section ref={achievementsRef} className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Our Achievements</h2>
          <p className="text-gray-300 mb-12">Over 31+ years of excellence, trusted globally, delivering reliable logistics solutions with precision.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-bold text-secondary">{counters[idx]}{item.suffix}</div>
                <div className="text-sm mt-2">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials Slider */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="mb-8">Hear From Our Satisfied Clients</h2>
            <div className="relative h-48">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: i === slideIndex ? 1 : 0, x: i === slideIndex ? 0 : 50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                  style={{ display: i === slideIndex ? 'block' : 'none' }}
                >
                  <p className="text-gray-700 text-lg italic">"{t.quote}"</p>
                  <p className="mt-4 font-semibold text-primary">{t.author}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <button onClick={() => setSlideIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)} className="bg-primary text-white p-2 rounded-full"><FaChevronLeft /></button>
              <button onClick={() => setSlideIndex(prev => (prev + 1) % testimonials.length)} className="bg-primary text-white p-2 rounded-full"><FaChevronRight /></button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Certifications Marquee (right to left) */}
      <section className="py-12 bg-gray-light overflow-hidden">
        <div className="container-custom">
          <h2 className="text-center mb-8">Certifications</h2>
          <div className="relative overflow-hidden">
            <div className="flex gap-12 animate-scroll-right whitespace-nowrap">
              {certifications.concat(certifications).map((cert, i) => (
                <img key={i} src={cert} alt="certification" className="h-16 inline-block grayscale hover:grayscale-0 transition" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CSS for right-to-left marquee */}
      <style>{`
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-right {
          animation: scrollRight 20s linear infinite;
          display: inline-flex;
        }
      `}</style>

      {/* 9. Awards & Accolades Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-4">Awards & Accolades</h2>
          <p className="text-center text-gray-600 mb-12">Proudly Recognized with Prestigious Awards and Accolades.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {awards.map((award, idx) => (
              <div key={idx} className="bg-gray-light p-6 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center">
                <h3 className="font-bold text-primary">{award.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Global Footprint Image */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom text-center">
          <h2 className="mb-8">Our Global Footprint</h2>
          <img src="/images/global-footprint.jpg" alt="Global Footprint Map" className="w-full rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-secondary py-16 text-white text-center">
        <div className="container-custom">
          <h2 className="text-white mb-4">Ready to Move Your Business Forward?</h2>
          <p className="mb-6 text-lg">Contact our experts for a custom quote.</p>
          <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold inline-block transition">Contact Us Today</Link>
        </div>
      </section>
    </div>
  )
}

export default Home