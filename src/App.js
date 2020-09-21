import React from 'react'
import './App.css'
import Header from './Components/Commons/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Features from './Components/Features/Features'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Commons/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
