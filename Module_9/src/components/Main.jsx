import '../styles/Footer.css'
import Logo from '../assets/Finsweet.svg'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <header className="my-header">
      <img src={Logo} alt={Logo} />
      <div className='right'>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact us</Link>
      </nav>
      <button>Subscribe</button>
      </div>
    </header>
  )
}