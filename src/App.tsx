import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import {BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Contact } from "./pages/Contact"
import { About } from "./pages/About"
import { Repository } from "./pages/Repository"

function App() {

  return (

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/repo" element={<Repository />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
