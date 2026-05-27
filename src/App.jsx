import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LoadingSpinner from './components/LoadingSpinner'

const Home = lazy(() => import('./pages/Home'))
const Industries = lazy(() => import('./pages/Industries'))
const Pentakuhl = lazy(() => import('./pages/Pentakuhl'))

function App() {
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