// App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Privacy from './pages/Privacy';


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        
      </Routes>
    </div>
  );
}