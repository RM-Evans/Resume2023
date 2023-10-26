import './App.css'

import { Routes, Route } from 'react-router'
import Home from './Pages/Home/Home'
import Resume from './Pages/Resume'

import Navbar from './components/Navbar'
import MobileNavbar from './components/MobileNavbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <MobileNavbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
