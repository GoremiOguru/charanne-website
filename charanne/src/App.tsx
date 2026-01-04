import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../sections/homepage'
import About from '../sections/About'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes> 
    </Router>
    
  )
}

export default App