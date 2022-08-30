
import './App.css';
// import AlertDimissble from './components/AlertDimissble';
// import Alerts from './components/Alerts';
// import TypesExamples from './components/TypesExamples';
// import { ReactComponent as ReactIcon } from './assets/react.svg';
// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Car from './components/Car';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <div>
        {/* <TypesExamples />
        <Alerts />
        <AlertDimissble />
        <ReactIcon />
        <car /> */}
        <Router>
          <div>
            <Link to="/">
              <Button>Home</Button>
            </Link>
            <Link to="/contacto">
              <Button>Contacto</Button>
            </Link>
            <Link to="/acercade">
              <Button>Quien Soy</Button>
            </Link>
          </div>
          <Routes>
            <Route path="/acercade" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </Router>


      </div>
    </div>
  );
}

export default App;
