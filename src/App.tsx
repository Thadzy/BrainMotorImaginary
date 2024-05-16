import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';
import MyNavbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <MyNavbar />
      <Hero />
      <Footer />
    </div>
    </>
  )
}

export default App
