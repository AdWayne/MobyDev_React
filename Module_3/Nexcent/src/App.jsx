import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Body from './pages/Body'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Body />
      <Footer />
    </>
  )
}

export default App
