import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './components/Hero';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Hero />
    </div>
    </>
  )
}

export default App
