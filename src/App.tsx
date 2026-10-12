import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import CollectionsPage from './components/CollectionsPage'
import CollectionDetailPage from './components/CollectionDetailPage'
import ContactPage from './components/ContactPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/collections" element={<CollectionsPage />} />
      <Route path="/collections/:slug" element={<CollectionDetailPage />} />
    </Routes>
  )
}

export default App

