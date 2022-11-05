import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Pages/Home';
import Empresa from './components/Pages/Empresa';
import Contato from './components/Pages/Contato';

import './App.css';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/empresa' element={<Empresa />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
      <Footer />
    </Router>   
  );
}

export default App;
