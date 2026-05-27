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
      <div className="fixed inset-0 bg-primary flex flex-col items-center justify-center z-[9999]">
        <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-white text-lg">Verifying your browser...</p>
        <p className="text-white/60 text-sm mt-2">Please wait while we check your connection</p>
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