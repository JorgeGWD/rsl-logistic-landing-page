import React from 'react'
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Features from './Components/Features/Features'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
