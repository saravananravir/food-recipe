
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Recipes from './pages/Recipes';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;