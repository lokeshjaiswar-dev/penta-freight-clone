import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LoadingSpinner from './components/LoadingSpinner'

const Home = lazy(() => import('./pages/Home'))
const Industries = lazy(() => import('./pages/Industries'))
const Pentakuhl = lazy(() => import('./pages/Pentakuhl'))

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">
        {/* Stark white animated structural spinner spinner */}
        <div className="w-14 h-14 border-2 border-white border-t-transparent rounded-full animate-spin mb-6"></div>
        
        {/* Minimalist Black & White Typography */}
        <p className="text-white text-base font-medium tracking-wider uppercase">Verifying your browser...</p>
        <p className="text-white/40 text-xs mt-2 tracking-wide font-light">Please wait while we check your connection</p>
      </div>
    )
  }

  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/pentakuhl" element={<Pentakuhl />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App