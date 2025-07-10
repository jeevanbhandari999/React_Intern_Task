import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import AboutUs from './components/AboutUs'
import OurTeam from './components/OurTeam'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Slider />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/team' element={<OurTeam />} />
          <Route path='/contact' element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
